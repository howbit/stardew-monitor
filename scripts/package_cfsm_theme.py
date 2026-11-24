"""Build the selected interactive farm as a CF-Server-Monitor third-party theme."""

import hashlib
from html import escape
import os
import re
from pathlib import Path
from urllib.parse import urlsplit
from zipfile import ZIP_DEFLATED, ZipFile


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / 'reviews/05-composed'
ASSETS = ROOT / 'assets'
OUTPUT = ROOT / 'release/stardew-monitor.zip'


def origins(key):
    result = []
    for value in os.getenv(key, '').split(','):
        url = urlsplit(value.strip())
        if url.scheme == 'https' and url.hostname and not (
                url.username or url.password or url.query or url.fragment or url.path.rstrip('/')):
            result.append(f'https://{url.netloc}')
    return result


def runtime_config(html):
    api = origins('API_BASE')
    static = origins('CSP_STATIC')
    connect = list(dict.fromkeys(api + origins('CSP_API') + [
        origin.replace('https:', 'wss:', 1) for origin in api]))
    tags = [f'<meta name="apiBase" content="{escape(",".join(api))}">'] if api else []
    if api:
        html = html.replace('href="/admin#/admin"', f'href="{escape(api[0])}/admin#/admin"')
    if static or connect:
        allowed = " ".join(static)
        policy = f"img-src 'self' data: blob: https: {allowed}; media-src 'self' blob: {allowed}; "
        policy += f"font-src 'self' data: {allowed}; connect-src 'self' {' '.join(connect)}"
        tags.append(f'<meta http-equiv="Content-Security-Policy" content="{escape(policy)}">')
    title = os.getenv('TITLE', '').strip()
    if title:
        html = re.sub(r'<title>[^<]*</title>', lambda _: f'<title>{escape(title)}</title>', html, count=1)
        html = re.sub(r'(<div class="site-sign-copy"><strong>)[^<]*', lambda m: m[1] + escape(title), html)
    background = os.getenv('BACKGROUND_IMAGE', '').strip()
    if urlsplit(background).scheme == 'https' and re.fullmatch(r'https://[^\s"\'<>\\]+', background):
        tags.append(f'<style>body.landscape-preview{{background-image:url("{background}")}}</style>')
    return html.replace('</head>', '\n'.join(tags) + '\n</head>') if tags else html


def build():
    files = {}
    entry = (PAGE / 'index.html').read_text(encoding='utf8')
    entry = entry.replace('<html lang="zh-CN">', '<html lang="zh-CN" data-cfsm-mode="live">')
    entry = entry.replace('星谷哨站 · 完整组合页', '星谷哨站').replace('星谷哨站完整页面预览', '星谷哨站监控面板')
    # Only the interactive estate is distributed. These scripts belong to the old art previews.
    entry = re.sub(r'^.*<script defer src="(?:bay-motion|crop-layer)\.js"></script>\n', '', entry, flags=re.M)
    entry = re.sub(r' data-(spring|summer|fall|winter)-(day|night)-src="[^"]*"', '', entry)

    def bundle_entry_ref(match):
        attribute, url = match.groups()
        path = (PAGE / url).resolve()
        if not path.is_relative_to(ROOT):
            raise ValueError(url)
        if path.suffix not in ('.js', '.css'):
            return match.group()
        name = 'app/' + path.name
        if name in files and files[name] != path:
            raise ValueError('Duplicate script or stylesheet name: ' + name)
        files[name] = path
        if path.suffix == '.css':
            for relative in re.findall(r'url\("([\w.-]+)"\)', path.read_text(encoding='utf8')):
                files['app/' + relative] = path.parent / relative
        return f'{attribute}="@THEME@/{name}"'

    entry = re.sub(r'\b(src|href)="((?!https?:)[^"]+\.(?:css|js))"', bundle_entry_ref, entry)
    entry = entry.replace('../01-stats/assets', '@THEME@/stats')
    files['app/native-detail.html'] = PAGE / 'native-detail.html'
    for name in ('detail.js', 'detail.css', 'LICENSES.txt'):
        files['app/native-built/' + name] = PAGE / 'native-built' / name
    files['app/SunCalc-LICENSE.txt'] = ROOT / 'scene/vendor/SunCalc-LICENSE.txt'
    files['app/NotoSansCJK-LICENSE.txt'] = PAGE / 'NotoSansCJK-LICENSE.txt'
    files['app/Mikus-LICENSE.txt'] = PAGE / 'Mikus-LICENSE.txt'
    for icon in ('farm-computer', 'scarecrow', 'seedling', 'wilted-plant'):
        files[f'stats/{icon}.png'] = ROOT / f'reviews/01-stats/assets/{icon}.png'
    for folder in ('landscape/native-spring-estate', 'music', 'ui/estate', 'ui/lucide', 'ui/pixelarticons', 'ui/tabler'):
        for path in (ASSETS / folder).rglob('*'):
            if path.is_file() and (path.suffix in ('.png', '.json', '.ogg', '.svg') or path.name == 'LICENSE'):
                files[path.relative_to(ASSETS).as_posix()] = path
    files['ui/weather-symbols.svg'] = ASSETS / 'ui/weather-symbols.svg'

    content = {}
    for name, path in sorted(files.items()):
        data = path.read_bytes()
        if name == 'app/native-detail.html':
            detail = re.sub(r'src="../../scene/(?:vendor/)?([\w-]+\.js)"', r'src="\1"', data.decode('utf8'))
            detail = detail.replace('<html lang="zh-CN">', '<html lang="zh-CN" data-cfsm-mode="live">')
            data = runtime_config(re.sub(r'\b(src|href)="([\w./-]+\.(?:css|js))"',
                                         r'\1="@THEME@/app/\2"', detail)).encode('utf8')
        if path.suffix in ('.js', '.css'):
            source = data.decode('utf8').replace('../../assets/ui/os-icons/', '/os-icons/')
            if path.suffix == '.css':
                source = re.sub(r'url\("([\w.-]+)"\)', r'url("@THEME@/app/\1")', source)
            data = source.replace('../../assets/', '@THEME@/').encode('utf8')
        content[name] = data
    entry = runtime_config(entry.replace('../../assets/', '@THEME@/'))
    # Pinned commits have immutable assets. Change their browser URLs without changing the repository paths.
    digest = hashlib.sha256(entry.encode('utf8'))
    for name, data in content.items():
        digest.update(name.encode('utf8') + b'\0' + hashlib.sha256(data).digest())
    revision = digest.hexdigest()[:12]

    def stamp_html(html):
        # Dynamic references and the detail navigation use the same release revision as these links.
        html = html.replace('data-cfsm-mode="live">', f'data-cfsm-mode="live" data-asset-revision="{revision}">')
        return re.sub(r'\b(src|href)="(@THEME@/[\w./-]+)"', rf'\1="\2?stardew_v={revision}"', html)

    OUTPUT.parent.mkdir(exist_ok=True)
    temporary = OUTPUT.with_suffix('.zip.tmp')
    with ZipFile(temporary, 'w', compression=ZIP_DEFLATED) as archive:
        archive.writestr('index.html', stamp_html(entry).replace('@THEME@/', 'assets/'))
        for name, data in content.items():
            if name.endswith('.html'):
                data = stamp_html(data.decode('utf8')).encode('utf8')
            if name.endswith('.css'):
                data = re.sub(rb'url\((["\']?)(@THEME@/[\w./-]+)(#[\w-]+)?\1\)',
                              lambda m: b'url(' + m[1] + m[2] + f'?stardew_v={revision}'.encode()
                              + (m[3] or b'') + m[1] + b')', data)
            base = b'assets/' if name.endswith('.js') else b'../'
            archive.writestr('assets/' + name, data.replace(b'@THEME@/', base)
                             if name.endswith(('.html', '.css', '.js')) else data)
    temporary.replace(OUTPUT)
    print(f'{OUTPUT} ({len(content) + 1} files, {OUTPUT.stat().st_size / 2**20:.1f} MiB)')


if __name__ == '__main__':
    build()
