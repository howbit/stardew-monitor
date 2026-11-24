"""Build the selected interactive farm as a CF-Server-Monitor third-party theme."""

import hashlib
from html import escape
from io import BytesIO
import json
import os
import re
from pathlib import Path
from urllib.parse import urlsplit
from zipfile import ZIP_DEFLATED, ZipFile
from PIL import Image


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
    built = PAGE / 'native-built/spa'
    manifest = json.loads((built / 'build-files.json').read_text(encoding='utf8'))
    for name in manifest['chunks']:
        files['app/' + name] = built / name
    main = manifest['entry']
    entry = runtime_config(f"""<!doctype html>
<html lang="zh-CN" data-cfsm-mode="live" data-farm-spa>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>星谷哨站</title>
  <link rel="stylesheet" href="@THEME@/app/home.css">
  <script type="module" src="@THEME@/app/{main}"></script>
</head>
<body class="landscape-preview" data-farm-art="native">
  <div id="app"></div>
</body>
</html>""")
    files['app/LICENSES.txt'] = built / 'LICENSES.txt'
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

    page = (PAGE / 'index.html').read_text(encoding='utf8')
    styles = []
    for url in re.findall(r'<link rel="stylesheet" href="([^"]+)"', page):
        path = (PAGE / url).resolve()
        css = path.read_text(encoding='utf8')
        for relative in re.findall(r'url\("([\w.-]+)"\)', css):
            files['app/' + relative] = path.parent / relative
        styles.append(re.sub(r'url\("([\w.-]+)"\)', r'url("@THEME@/app/\1")', css)
                      .replace('../../assets/', '@THEME@/'))
    content = {}
    for name, path in sorted(files.items()):
        if name.startswith('landscape/native-spring-estate/') and path.suffix == '.png':
            converted = BytesIO()
            with Image.open(path) as image:
                image.save(converted, 'WEBP', lossless=True, exact=True, method=5)
            content[name.removesuffix('.png') + '.webp'] = converted.getvalue()
        else:
            content[name] = path.read_bytes()
    content['app/home.css'] = '\n'.join(styles).encode('utf8')
    # Pinned commits have immutable assets. Change their browser URLs without changing the repository paths.
    digest = hashlib.sha256(entry.encode('utf8'))
    for name, data in content.items():
        digest.update(name.encode('utf8') + b'\0' + hashlib.sha256(data).digest())
    revision = digest.hexdigest()[:12]

    entry = entry.replace('data-farm-spa>', f'data-farm-spa data-asset-revision="{revision}">')
    entry = entry.replace('@THEME@/app/home.css"', f'assets/app/home.css?stardew_v={revision}"')
    entry = entry.replace('@THEME@/', 'assets/')

    OUTPUT.parent.mkdir(exist_ok=True)
    temporary = OUTPUT.with_suffix('.zip.tmp')
    with ZipFile(temporary, 'w', compression=ZIP_DEFLATED) as archive:
        archive.writestr('index.html', entry)
        for name, data in content.items():
            if name.endswith('.css'):
                data = re.sub(rb'url\((["\']?)(@THEME@/[\w./-]+)(#[\w-]+)?\1\)',
                              lambda m: b'url(' + m[1] + m[2] + f'?stardew_v={revision}'.encode()
                              + (m[3] or b'') + m[1] + b')', data)
                data = data.replace(b'@THEME@/', b'../')
            archive.writestr('assets/' + name, data)
    temporary.replace(OUTPUT)
    print(f'{OUTPUT} ({len(content) + 1} files, {OUTPUT.stat().st_size / 2**20:.1f} MiB)')


if __name__ == '__main__':
    build()
