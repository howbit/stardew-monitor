"""Exercise the zipped theme with same-origin CFSM responses in an isolated browser."""

import mimetypes
import os
import re
import sys
from io import BytesIO
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit
from zipfile import ZipFile

from playwright.sync_api import expect, sync_playwright
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://monitor.test'
NODE = {'id': 'probe-1', 'name': '测试探针', 'is_online': True, 'os': 'Debian',
        'cpu': 12, 'cpu_cores': 2, 'ram_total': 4096, 'ram_used': 768}


def check_system_fonts(page, selectors):
    for selector in selectors:
        expect(page.locator(selector).first).to_have_text(re.compile(r'\S'))
    # Force a layout before waiting for newly inserted glyphs.
    page.evaluate('document.body.getBoundingClientRect()')
    page.evaluate('document.fonts.ready.then(() => true)')
    session = page.context.new_cdp_session(page)
    try:
        session.send('DOM.enable')
        session.send('CSS.enable')
        root = session.send('DOM.getDocument')['root']['nodeId']
        for selector in selectors:
            node = session.send('DOM.querySelector', {'nodeId': root, 'selector': selector})['nodeId']
            fonts = session.send('CSS.getPlatformFontsForNode', {'nodeId': node})['fonts']
            expect(page.locator(selector).first).to_have_css('font-family', re.compile(r'^system-ui,'))
            assert fonts and all(not font['isCustomFont'] for font in fonts), (selector, fonts)
    finally:
        session.detach()


def check(archive, browser):
    page = browser.new_page(timezone_id='Asia/Hong_Kong', reduced_motion='reduce')
    missing, errors = set(), []
    page.on('pageerror', lambda error: errors.append(str(error)))
    status = 403
    nodes = [NODE]
    history_requests = []
    theme_options = {}
    access_policy = {}
    require_proof = False
    require_login = False
    sockets = []

    def serve(route):
        url = urlsplit(route.request.url)
        path = unquote(url.path)
        if url.hostname == 'api.open-meteo.com':
            return route.fulfill(json={'current': {'weather_code': 3, 'temperature_2m': 20}})
        if url.hostname == 'challenges.cloudflare.com':
            # Stand-in for the external widget. The simulated site still has to accept the response.
            return route.fulfill(content_type='text/javascript', body="""
              window.turnstile = {render(host, opts) {
                const b = document.createElement('button'); b.textContent = 'Complete test challenge';
                b.onclick = () => opts.callback('unit-response'); host.append(b); return 'fixture';
              }, remove() {}};
            """)
        if url.hostname != 'monitor.test':
            return route.abort()
        if path == '/api/config':
            proof = {}
            if require_proof and route.request.headers.get('x-turnstile-token') == 'unit-response':
                proof = {'verified':True, 'turnstile_verified':'unit-proof'}
            return route.fulfill(json={'site_title': '农场测试', 'theme_options': theme_options, **access_policy, **proof})
        if path in ('/api/servers', '/api/server', '/api/history/all'):
            if require_login and route.request.headers.get('authorization') != 'Bearer fixture-jwt':
                return route.fulfill(status=401, json={})
            if require_proof and route.request.headers.get('x-turnstile-verified') != 'unit-proof':
                return route.fulfill(status=403, json={})
        if path == '/api/servers':
            return route.fulfill(status=status, json={'servers': nodes})
        if path == '/api/server':
            node_id = parse_qs(url.query)['id'][0]
            node = next((item for item in nodes if item['id'] == node_id), None)
            return route.fulfill(json=node or {}, status=200 if node else 404)
        if path == '/admin':
            return route.fulfill(body='CFSM admin', content_type='text/html')
        if path == '/api/history/all':
            query = parse_qs(url.query)
            history_requests.append((query['id'][0], query['hours'][0]))
            return route.fulfill(json=[] if query['hours'] == ['0.167'] else [
                {'timestamp': f'2026-11-24T15:{minute}:00Z', 'cpu': cpu, 'ping_ct': 23, 'loss_ct': 0}
                for minute, cpu in [('45', 12), ('55', 35)]])
        if re.fullmatch(r'/flags/[a-z]{2}\.svg', path):
            return route.fulfill(body='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"/>', content_type='image/svg+xml')
        if path == '/os-icons/os-debian.svg':
            return route.fulfill(path=ROOT / 'assets/ui/os-icons/os-debian.svg', content_type='image/svg+xml')
        name = path.lstrip('/') or 'index.html'
        if name not in archive.namelist():
            missing.add(name)
            return route.fulfill(status=404)
        mime = {'.js':'text/javascript', '.ogg':'application/octet-stream'}.get(Path(name).suffix)
        return route.fulfill(body=archive.read(name), content_type=mime or mimetypes.guess_type(name)[0])

    page.route('**/*', serve)
    def accept_socket(socket):
        sockets.append(socket)
        socket.on_message(lambda _: None)
    page.route_web_socket('**/api/ws*', accept_socket)
    # Observe offsets passed to real Web Audio sources, including in the new document after reload.
    page.add_init_script("""{
      const start = AudioBufferSourceNode.prototype.start;
      AudioBufferSourceNode.prototype.start = function(when, offset, ...rest) {
        window.lastMusicStart = {context: this.context, when, offset};
        return start.call(this, when, offset, ...rest);
      };
    }""")
    page.goto(SITE)
    expect(page.locator('.empty-state')).to_contain_text('登录或访问验证')
    expect(page.locator('.stats .stat-label')).to_have_text(['实时流量', '全部节点', '在线', '离线'])
    expect(page.locator('.stats .stat-value strong')).to_have_text(['—'] * 4)
    expect(page.locator('#cards article')).to_have_count(0)
    expect(page.locator('#farm-temperature')).to_have_text('20°C')
    expect(page.locator('#farm-temperature')).to_have_attribute('href', 'https://open-meteo.com/en/licence')
    admin = page.locator('.node-toolbar').get_by_role('link', name='管理后台')
    expect(page.locator('footer, .footer-credit').get_by_role('link', name='管理后台')).to_have_count(0)
    expect(admin).to_have_attribute('href', '/admin#/admin')
    admin.click()
    expect(page).to_have_url(SITE+'/admin#/admin')
    page.go_back()
    status = 200
    page.reload()
    expect(page.locator('.monitor-card .name')).to_have_text(NODE['name'])
    expect(page.locator('.system-badge img')).to_have_attribute('src', '/os-icons/os-debian.svg')
    check_system_fonts(page, ['#music-current', '.region-tab', '.monitor-card .name', '.credit-link',
                              '.site-sign strong', '#season-time', '.time-sign-copy strong', '#farm-temperature'])
    page.locator('.monitor-card .name').click()
    expect(page.locator('.host-name')).to_contain_text(NODE['name'])
    expect(page.locator('.history-note')).to_have_text('暂无数据')
    expect(page.locator('.time-btn')).to_have_count(9)
    check_system_fonts(page, ['.host-name > span:nth-last-child(2)', '.sysinfo-value', '.time-btn.active'])
    assert page.url.endswith('#/server/probe-1')
    page.reload()
    expect(page.locator('.host-name')).to_contain_text(NODE['name'])
    page.locator('.back-btn').click()
    expect(page.locator('.monitor-card')).to_be_visible()
    for phase in ('day', 'night'):
        night = phase == 'night'
        if page.locator('body').evaluate("el => el.classList.contains('night')") != night:
            page.locator('#view-mode').click()
        card = page.locator('.monitor-card').first
        surface = card.evaluate('el => getComputedStyle(el).backgroundColor')
        expect(card).to_have_css('background-image', 'none')
        expect(page.locator('.scene-controls')).to_have_css('border-top-width', '0px')
        card.locator('.name').click()
        expect(page.locator('.host-name')).to_be_visible()
        expect(page.locator('.host-card')).to_have_css('background-color', surface)
        for sample in ['.chart-title','.chart-subtitle','.sysinfo-label','.sysinfo-value','.time-btn.active']:
            contrast = page.locator(sample).first.evaluate("""el => {
                const luminance = rgb => {
                    const channels = rgb.match(/[\\d.]+/g).slice(0,3).map(Number).map(n => n / 255)
                        .map(s => s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4);
                    return channels[0]*0.2126 + channels[1]*0.7152 + channels[2]*0.0722;
                };
                let parent = el;
                while (getComputedStyle(parent).backgroundColor === 'rgba(0, 0, 0, 0)') parent = parent.parentElement;
                const [dark, light] = [getComputedStyle(el).color, getComputedStyle(parent).backgroundColor]
                    .map(luminance).sort((a,b) => a-b);
                return (light + 0.05) / (dark + 0.05);
            }""")
            assert contrast >= 4.5, (phase, sample, contrast)
        expect(page.locator('.terminal-header :is(button,select,a)')).to_have_count(1)
        expect(page.locator('.terminal-header a')).to_have_attribute('href','/admin#/admin')
        expect(page.locator('.back-btn')).to_have_text('返回')
        expect(page.locator('.back-btn svg')).to_have_count(0)
        for width in (320, 1440):
            page.set_viewport_size({'width':width, 'height':844})
            selector = page.locator('.time-selector').bounding_box()
            back = page.locator('.back-btn').bounding_box()
            assert selector['x'] + selector['width'] <= back['x'] and abs(selector['y']-back['y']) <= 1
        page.reload()
        expect(page.locator('.terminal-title')).to_have_text(NODE['name'])
        expect(page.locator('.host-card')).to_have_css('background-color', surface)
        page.locator('.back-btn').click()
        expect(page.locator('.monitor-card').first).to_have_css('background-color', surface)
    for width in (320, 661, 801, 1280, 1920):
        page.set_viewport_size({'width': width, 'height': 844})
        positions = page.evaluate("""() => {
            const readings = [
                ['—', '', '↑ —　↓ —'], ['0', 'B/s', '↑ 0 B/s　↓ 0 B/s'],
                ['26.0', 'KB/s', '↑ 9.8 KB/s　↓ 16.2 KB/s'],
                ['1023.9', 'MB/s', '↑ 511.9 MB/s　↓ 512.0 MB/s']
            ];
            const results = readings.map(([realtime, realtimeUnit, realtimeDetail]) => {
                updateStats({realtime, realtimeUnit, realtimeDetail});
                const cell = document.querySelector('.stats .realtime');
                const rect = selector => cell.querySelector(selector).getBoundingClientRect();
                return [rect('.farm-computer').left, rect('.stat-label').left,
                    rect('.stat-value > :last-child').right <= cell.getBoundingClientRect().right];
            });
            updateStats(cfsmAdapter.getStats());
            return results;
        }""")
        assert all(p == positions[0] and p[2] for p in positions), (width, positions)
    for width, height in [(1920, 1080), (390, 844)]:
        page.set_viewport_size({'width': width, 'height': height})
        rows = page.locator('.stats > .stat').evaluate_all('(items) => items.map(el => el.offsetTop)')
        assert len(rows) == 4 and len(set(rows)) == (1 if width == 1920 else 2), (width, rows)
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), width
        assert page.locator('.site-sign-copy strong').evaluate(
            'e => e.scrollWidth <= e.parentElement.clientWidth + 1'), width
        footer = page.locator('#seasonal-footer').bounding_box()
        cards = page.locator('#cards').bounding_box()
        gap = footer['y'] - cards['y'] - cards['height']
        assert 0 <= gap <= 8 and footer['height'] <= (82 if width == 1920 else 44), (width, gap, footer)
        pictures = []
        for _ in range(2):
            icons = page.locator('.node-toolbar svg')
            expect(icons).to_have_count(6)
            page.mouse.move(0,0)
            for i, icon in enumerate(icons.all()):
                image = Image.open(BytesIO(icon.screenshot())).convert('RGB')
                background = image.getpixel((0,0))
                ink = tuple(max(abs(a-b) for a,b in zip(pixel,background)) > 45 for pixel in image.getdata())
                assert sum(ink) >= 25, (width, i, 'empty toolbar icon')
                if i == 3:
                    pictures.append(ink)
            page.locator('#view-mode').click()
        assert pictures[0] != pictures[1], (width,'sun and moon must look different')
    music_control = page.locator('.scene-music')
    toggle = page.locator('#music-toggle')
    # Fix the scene so a manual night override reverting to local time cannot change tracks on reload.
    page.goto(SITE + '/?demo=spring-day')
    # A trusted gesture also unlocks browsers that suspended the initial AudioContext.
    page.locator('.site-sign').click(force=True)
    expect(music_control).to_have_attribute('data-state', 'playing')
    page.wait_for_function('window.lastMusicStart && lastMusicStart.context.currentTime - lastMusicStart.when > .3')
    previous_track = music_control.get_attribute('data-playing')
    page.reload()
    point = page.evaluate("JSON.parse(sessionStorage.getItem('cfsm_scene_music_position_v1'))")
    assert point['id'] == previous_track and point['offset'] > .25, point
    if music_control.get_attribute('data-state') == 'blocked':
        page.locator('.site-sign').click(force=True)
    expect(music_control).to_have_attribute('data-state', 'playing')
    expect(music_control).to_have_attribute('data-playing', previous_track)
    actual_offset = page.evaluate('lastMusicStart.offset')
    assert abs(actual_offset - point['offset']) < .001, (point, actual_offset)
    toggle.click()
    expect(page.locator('#music-status')).to_contain_text('已暂停')
    page.reload()
    expect(music_control).to_have_attribute('data-state', 'off')
    expect(page.locator('#music-status')).to_contain_text('已暂停')
    for season in ('spring', 'summer', 'fall', 'winter'):
        page.locator('#season-preview').select_option(season)
        for _ in range(2):
            page.locator('#view-mode').click()
            page.wait_for_function("""() => ['.hero-art','.flora-img','.fence-img'].every(selector=>{
              const img=document.querySelector(selector);
              const mode=document.body.classList.contains('night') ? 'night':'day';
              return img.complete && img.naturalWidth && img.src.includes(document.body.dataset.season+'-'+mode);
            })""")
            if not page.locator('body').evaluate("body => body.classList.contains('night')"):
                expect(page.locator('.estate-animal').first).to_be_attached()
            expect(music_control).to_have_attribute('data-state', 'off')
            expect(music_control).to_have_attribute('data-playing', '')
    toggle.click()
    expect(music_control).to_have_attribute('data-state', 'playing')
    expect(music_control).to_have_attribute('data-playing', music_control.get_attribute('data-track'))
    assert page.locator('#farm-temperature').get_attribute('href') is None
    music = [name for name in archive.namelist() if name.endswith('.ogg')]
    assert len(music) == 8
    assert page.evaluate("""async tracks => {
        const context = new OfflineAudioContext(1,1,44100);
        for (const file of tracks) {
            const bytes = await (await fetch('/'+file)).arrayBuffer();
            if (!(await context.decodeAudioData(bytes)).duration) return false;
        }
        return true;
    }""", music)
    uuid = 'bc5447ac-1825-487e-87d3-c4c76854e5b2'
    page.clock.set_fixed_time('2026-11-24T15:59:00Z')
    nodes[:] = [dict(NODE, id=uuid, name='RN-1', region='US', latitude=None, longitude=None,
                     expire_date='2026-12-09', tags='edge,prod', swap_total=512, swap_used=64, ping_ct=23, loss_ct=0)]
    page.goto(SITE+'/#/server/'+uuid)
    expect(page.locator('.host-name')).to_contain_text('RN-1')
    page.reload()
    expect(page.locator('.host-name')).to_contain_text('RN-1')
    expect(page.locator('.host-name .flag-img')).to_have_attribute('src', re.compile(r'flags/us\.svg$'))
    expect(page.locator('#info-panel')).to_contain_text('剩余 15 天')
    expect(page.locator('.time-btn.active')).to_have_text('10m')
    page.get_by_role('button',name='6h',exact=True).click()
    expect(page.locator('.history-note')).to_have_count(0)
    assert (uuid, '6') in history_requests
    page.set_viewport_size({'width':1920, 'height':1080})
    chart = page.locator('.chart-card').first
    chart.locator('.chart-expand-btn').click()
    expect(chart).to_have_class(re.compile('full-width'))
    chart.locator('.chart-expand-btn').click()
    for width, columns in [(1920, 2), (390, 1), (320, 1)]:
        page.set_viewport_size({'width':width, 'height':844})
        assert page.locator('.charts-container').evaluate('el => getComputedStyle(el).gridTemplateColumns.split(" ").length') == columns
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (width, page.evaluate(
            'Array.from(document.querySelectorAll("body *")).filter(el=>el.getBoundingClientRect().right>innerWidth+1).slice(0,12).map(el=>[el.tagName,el.className,Math.round(el.getBoundingClientRect().right)])'))
    page.locator('.back-btn').click()
    card = page.locator('.monitor-card')
    expect(card.locator('.node-billing')).to_contain_text('剩余 15 天')
    card.hover()
    assert card.evaluate("""el => {
        const name = el.querySelector('.name');
        name.focus({preventScroll:true});
        const top = el.getBoundingClientRect().top;
        const node = window.cfsmAdapter.getNodes()[0];
        node.cpu = 37.5;
        window.renderNodes();
        return el === document.querySelector('.monitor-card') && name === document.activeElement &&
          el.getBoundingClientRect().top === top && getComputedStyle(el).transform === 'none' && el.textContent.includes('37.50');
    }""")
    assert page.evaluate("""['2026-11-25','2026-11-24','2026-11-23','2026-02-30'].map(d => expiryInfo(d)?.text || '')""") == [
        '剩余 1 天','今天到期','已过期 1 天','']
    page.goto(SITE+'/?view=list')
    expect(page.locator('.server-summary .summary-expiry')).to_have_text('剩余 15 天')
    page.locator('.view-opt[data-view="grid"]').click()
    theme_options['stardew_scene'] = {'serverLocations': {uuid: {
        'city':'洛杉矶', 'timeZone':'America/Los_Angeles', 'latitude':34.0522, 'longitude':-118.2437}}}
    page.reload()
    page.locator('.farm-warp').click()
    expect(page.locator('#scene-label')).to_contain_text('洛杉矶')
    page.locator('.building-picker').click()
    picker = page.get_by_role('dialog', name=re.compile('选择小屋'))
    expect(picker.locator('.house-choices button')).to_have_count(21)
    picker.get_by_role('button', name='磨坊', exact=True).click()
    page.reload()
    expect(page.locator('.building-base').first).to_have_attribute(
        'src', re.compile(r'/assets/ui/estate/mill-3\.png\?stardew_v=[0-9a-f]{12}$'))
    for language, heading, memory, admin_name in [('en','My servers','Memory','Admin dashboard'),('ja','サーバー一覧','メモリ','管理画面')]:
        page.locator('#theme-language').select_option(language)
        expect(page.locator('html')).to_have_attribute('lang',language)
        expect(page.locator('h1')).to_have_text(heading)
        expect(page.locator('.node-toolbar').get_by_role('link',name=admin_name)).to_have_attribute('href','/admin#/admin')
        page.locator('.view-opt[data-view="list"]').click()
        expect(page.locator('.summary-metric dt').nth(2)).to_have_text(memory)
        expect(page.locator('.summary-os')).to_contain_text('Debian')
        page.set_viewport_size({'width': 320, 'height': 760})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        expect(page.locator('.summary-head .region-flag img')).to_have_attribute('src','/flags/us.svg')
        page.locator('.server-summary .name').click()
        expect(page.locator('.host-name')).to_contain_text('RN-1')
        expect(page.locator('.chart-title').first).to_contain_text('CPU')
        expect(page.locator('.terminal-header').get_by_role('link', name=admin_name)).to_be_visible()
        page.locator('.back-btn').click()
        expect(page.locator('.server-summary .name')).to_have_text('RN-1')
    page.locator('#theme-language').select_option('zh-CN')
    expect(page.locator('html')).to_have_attribute('lang','zh-CN')
    page.locator('.view-opt[data-view="grid"]').click()
    page.locator('.building-picker').click()
    page.get_by_role('button',name='自动分配').click()
    nodes.append(NODE)
    page.reload()
    page.locator('.view-opt[data-view="list"]').click()
    for node in nodes:
        page.locator('.server-summary .name').filter(has_text=node['name']).click()
        expect(page.locator('.host-name')).to_contain_text(node['name'])
        expect(page.locator('.time-btn.active')).to_have_text('10m')
        assert history_requests[-1][0] == node['id']
        page.go_back()
        expect(page.locator('.server-summary')).to_have_count(2)
    page.goto(SITE+'/#/server/missing-node')
    expect(page.locator('.detail-message')).to_contain_text('节点不存在')
    page.locator('.back-btn').click()
    expect(page.locator('.server-summary')).to_have_count(2)
    # Exercise the same inventory notifications used by live updates.
    tabs = page.locator('.region-tabs button')
    expect(tabs).to_have_text(['全部','美洲','未分区'])
    nodes.extend(dict(NODE, id=country, name=country, region=country, is_online=country != 'ZA')
                 for country in ['HK','DE','ZA','AU','AQ'])
    page.evaluate('window.cfsmAdapter.init()')
    expect(tabs).to_have_text(['全部','亚洲','美洲','欧洲','非洲','大洋洲','南极洲','未分区'])
    page.get_by_role('button', name='非洲', exact=True).click()
    expect(page.locator('#cards article .name')).to_have_text('ZA')
    for view in ('grid','list'):
        page.locator(f'.view-opt[data-view="{view}"]').click()
        expect(page.locator('#cards .offline .system-badge img')).to_have_css('filter','grayscale(1)')
    page.locator('#cards article .name').click()
    expect(page.locator('.host-name')).to_contain_text('ZA')
    page.locator('.back-btn').click()
    expect(page.locator('.region-tab.active')).to_have_text('非洲')
    nodes[:] = [n for n in nodes if n['id'] != 'ZA']
    page.evaluate('window.cfsmAdapter.init()')
    expect(page.locator('.region-tab.active')).to_have_text('全部')
    expect(page.get_by_role('button',name='非洲',exact=True)).to_have_count(0)
    for width in (320,390,1440):
        page.set_viewport_size({'width':width, 'height':844})
        controls = page.locator('.heading-right')
        scene = controls.locator('#scene-label').bounding_box()
        season = controls.locator('#season-preview').bounding_box()
        tools = controls.locator('.node-toolbar').bounding_box()
        if width == 1440:
            assert scene['x'] < season['x'] < tools['x']
        else:
            assert season['y'] + season['height'] <= tools['y'] + 1
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    nodes.clear()
    page.reload()
    expect(page.locator('.empty-state')).to_contain_text('暂无监控节点')
    expect(page.locator('.total strong')).to_have_text('0')
    page.clock.install()
    nodes.extend([dict(NODE, name='同名',region='HK'), dict(NODE,id='probe-2',name='同名',region='US')])
    page.clock.fast_forward(61000)
    expect(page.locator('#cards article')).to_have_count(0)
    page.evaluate("document.dispatchEvent(new Event('visibilitychange'))")
    expect(page.locator('#cards article')).to_have_count(2)
    page.locator('[data-key="probe-2"] .farm-warp').click()
    assert page.evaluate('window.estateSelectedNode()') == 'probe-2'
    expect(page.locator('[data-key="probe-1"] .farm-warp')).to_have_attribute('aria-pressed','false')
    expect(page.locator('#scene-label')).not_to_contain_text('probe-2')
    status = 503
    sockets[-1].close(code=1012, reason='maintenance')
    expect(page.locator('#monitor-access')).to_contain_text('连接中断')
    page.clock.fast_forward(310000)
    expect(page.locator('.online strong')).to_have_text('2')
    expect(page.locator('#cards article.offline')).to_have_count(0)
    nodes.pop()
    status = 200
    page.locator('#monitor-access button').click()
    expect(page.locator('#cards article')).to_have_count(1)
    expect(page.locator('#scene-label')).to_contain_text('本地场景')
    require_proof = True
    access_policy.update(turnstile_enabled=True, turnstile_site_key='fixture', verified=False)
    page.reload()
    expect(page.locator('#cards article')).to_have_count(0)
    expect(page.locator('.stats .stat-value strong')).to_have_text(['—'] * 4)
    for deep_link in (False, True):
        if deep_link:
            page.evaluate("localStorage.removeItem('turnstile_verified')")
            nodes[0].update(net_in_speed=0, net_out_speed=None, ram_used=None, cpu=0)
            page.goto(SITE+'/#/server/probe-1')
        page.get_by_role('button',name='验证访问').click()
        page.get_by_role('button',name='Complete test challenge').click()
        if deep_link:
            expect(page.locator('.host-name')).to_contain_text('同名')
            expect(page.locator('.net-down').first).to_contain_text('0 B/s')
            expect(page.locator('.net-up').first).to_contain_text('—')
            expect(page.locator('.chart-current-value').nth(0)).to_have_text('0.0%')
            expect(page.locator('.chart-current-value').nth(1)).to_have_text('—')
            for width in (320,390,480):
                page.set_viewport_size({'width':width,'height':844})
                assert page.locator('.sysinfo-grid').evaluate("el=>getComputedStyle(el).gridTemplateColumns.split(' ').length") == 2
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        else:
            expect(page.locator('#cards article')).to_have_count(1)
    require_login = True
    for require_proof in (False, True):
        access_policy.update(is_public=False, turnstile_enabled=require_proof)
        page.evaluate("""() => {
            localStorage.setItem('jwt_token', 'expired-fixture');
            localStorage.removeItem('turnstile_verified');
        }""")
        page.goto(SITE + '/')
        expect(page).to_have_url(SITE + '/admin#/admin')
        assert page.evaluate("localStorage.getItem('jwt_token')") is None
        page.evaluate("localStorage.setItem('jwt_token', 'fixture-jwt')")
        page.goto(SITE + '/')
        if require_proof:
            page.get_by_role('button', name='验证访问').click()
            page.get_by_role('button', name='Complete test challenge').click()
        expect(page.locator('#cards article')).to_have_count(1)
        page.locator('a.name').click()
        expect(page.locator('.host-name')).to_contain_text('同名')
    assert not missing, missing
    assert not errors, errors
    page.close()


if __name__ == '__main__':
    with ZipFile(ROOT / 'release/stardew-monitor.zip') as archive, sync_playwright() as driver:
        assert archive.testzip() is None
        channel = os.getenv('STARDEW_TEST_BROWSER') or ('msedge' if sys.platform == 'win32' else None)
        browser = driver.chromium.launch(channel=channel)
        check(archive, browser)
        browser.close()
    print('PASS: packaged assets, four seasons, day/night, music, weather credit, live and failed API, detail routes.')
