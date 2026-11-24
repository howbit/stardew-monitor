"""Build and test the theme. Add --push to publish the checked package to GitHub's preview branch."""

import argparse
import hashlib
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path
from zipfile import ZipFile


ROOT = Path(__file__).resolve().parents[1]
REPO = 'https://github.com/howbit/stardew-monitor'
BRANCH = 'preview'
ASSET_MANIFEST = 'assets/published-files.json'


def git_blob_id(data):
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()


def published_assets(git, owned):
    tracked = {}
    for line in git('ls-tree', '-r', 'HEAD', '--', 'assets', capture=True).stdout.splitlines():
        info, path = line.split('\t', 1)
        tracked[path] = info.split()[2]
    manifests = [path for path in tracked if re.fullmatch(
        r'assets/(?:stardew-[0-9a-f]{12}/)?published-files\.json', path)]
    previous = {}
    for manifest in manifests:
        prefix = manifest.rsplit('/', 1)[0]
        entries = json.loads(git('show', 'HEAD:' + manifest, capture=True).stdout)
        previous.update({f'{prefix}/{name}': digest for name, digest in entries.items()})
        previous[manifest] = tracked[manifest]
    if git('ls-files', '--', 'index.html', capture=True).stdout.strip():
        previous_index = git('show', 'HEAD:index.html', capture=True).stdout
        legacy = re.search(r'/(assets/stardew-[0-9a-f]{12})/app/detail-route\.js', previous_index)
        if legacy and legacy[1] + '/published-files.json' not in manifests:
            # Older releases without an inventory can only be matched by identical content.
            for name, digest in owned.items():
                previous[f'{legacy[1]}/{name}'] = digest
    return tracked, {path for path, digest in previous.items() if tracked.get(path) == digest}


def publish(package, remote):
    # Work outside both the source tree and any existing maintainer checkout.
    with tempfile.TemporaryDirectory(prefix='stardew-preview-') as tmp:
        work = Path(tmp).resolve()

        def git(*args, capture=False, check=True):
            return subprocess.run(['git', *args], cwd=work, check=check, text=True, encoding='utf8',
                                  stdout=subprocess.PIPE if capture else None)

        git('init', '--quiet', '--initial-branch=' + BRANCH)
        git('config', 'core.autocrlf', 'false')
        git('remote', 'add', 'origin', remote)
        ref = 'refs/heads/' + BRANCH
        if git('ls-remote', '--heads', 'origin', ref, capture=True).stdout.strip():
            git('fetch', '--quiet', '--depth=1', '--no-tags', 'origin', ref)
            git('update-ref', ref, 'FETCH_HEAD')
            git('read-tree', 'HEAD')

        with ZipFile(package) as archive:
            names = archive.namelist()
            if 'index.html' not in names or 'assets/app/detail-route.js' not in names:
                raise ValueError('Package is missing a theme entry point')
            for name in names:
                if name != 'index.html' and not re.fullmatch(r'assets/(?:app|landscape|music|stats|ui)/[\w./-]+', name):
                    raise ValueError(f'Unexpected package member: {name}')
                if not (work / name).resolve().is_relative_to(work) or '..' in Path(name).parts:
                    raise ValueError(f'Unexpected package path: {name}')
            archive.extractall(work)
        owned = {name.removeprefix('assets/'): git_blob_id((work / name).read_bytes())
                 for name in names if name != 'index.html'}
        (work / ASSET_MANIFEST).write_text(json.dumps(owned, sort_keys=True), encoding='utf8')
        staged = names + [ASSET_MANIFEST]
        tracked, old_assets = published_assets(git, owned) if git('ls-files', capture=True).stdout.strip() else ({}, set())
        for path in staged:
            if path != 'index.html' and path in tracked and path not in old_assets:
                if tracked[path] != git_blob_id((work / path).read_bytes()):
                    raise ValueError(f'Theme update would overwrite a customized asset: {path}')
        obsolete = sorted(old_assets - set(staged))
        for i in range(0, len(obsolete), 64):
            git('--literal-pathspecs', 'rm', '--quiet', '--cached', '--', *obsolete[i:i+64])
        for i in range(0, len(staged), 64):
            git('--literal-pathspecs', 'add', '--force', '--', *staged[i:i+64])
        diff = git('diff', '--cached', '--quiet', check=False)
        if diff.returncode == 1:
            git('-c', 'user.name=Stardew theme publisher', '-c', 'user.email=publisher@stardew-theme.invalid',
                'commit', '--quiet', '-m', 'Update tested theme preview')
            git('push', 'origin', 'HEAD:' + ref)
        else:
            diff.check_returncode()
        commit = git('rev-parse', 'HEAD', capture=True).stdout.strip()
        published = git('ls-remote', '--heads', 'origin', ref, capture=True).stdout.split()
        if not published or published[0] != commit:
            raise RuntimeError('The remote preview branch differs from the tested commit.')
        return commit


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--push', action='store_true', help='Update howbit/stardew-monitor:preview.')
    args = parser.parse_args()
    subprocess.run(['node', str(ROOT / 'scripts/build_native_detail.mjs')], check=True, cwd=ROOT)
    for script in ('package_cfsm_theme.py', 'test_cfsm_package.py', 'test_publish_theme_preview.py'):
        subprocess.run([sys.executable, str(ROOT / 'scripts' / script)], check=True, cwd=ROOT)
    if args.push:
        commit = publish(ROOT / 'release/stardew-monitor.zip', REPO + '.git')
        print(f'{REPO}/tree/{commit}')
    else:
        print('Verified locally. Use --push to publish this theme to the preview branch.')
