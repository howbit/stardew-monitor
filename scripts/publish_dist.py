"""Append the checked theme archive to the dist branch without rewriting history."""

import subprocess
import tempfile
from pathlib import Path
from zipfile import ZipFile


def run(*args, cwd=None, input=None):
    return subprocess.check_output(['git', *map(str, args)], cwd=cwd, input=input)


def publish(archive, remote, source):
    message = run('show', '-s', '--format=%B', source).rstrip()
    message += b'\n\nSource-Commit: ' + run('rev-parse', source)
    with tempfile.TemporaryDirectory(prefix='stardew-dist-') as directory:
        root = Path(directory)
        run('init', '--quiet', cwd=root)
        ref = 'refs/heads/dist'
        upstream = run('ls-remote', '--heads', remote, ref, cwd=root)
        parents = []
        if upstream:
            run('fetch', '--quiet', '--depth=1', remote, ref, cwd=root)
            parents = ['-p', run('rev-parse', 'FETCH_HEAD', cwd=root).decode().strip()]
        with ZipFile(archive) as bundle:
            names = set(bundle.namelist())
            if 'index.html' not in names or any(
                    n != 'index.html' and not n.startswith('assets/')
                    or not (root / n).resolve().is_relative_to(root) for n in names):
                raise ValueError('Expected index.html and assets/ in the release archive')
            bundle.extractall(root)
        run('add', '--force', '--', 'index.html', 'assets', cwd=root)
        tree = run('write-tree', cwd=root).decode().strip()
        commit = run('-c', 'user.name=github-actions[bot]', '-c',
                     'user.email=41898282+github-actions[bot]@users.noreply.github.com',
                     'commit-tree', tree, *parents, cwd=root, input=message).decode().strip()
        run('push', remote, f'{commit}:{ref}', cwd=root)
        return commit


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path)
    parser.add_argument('remote')
    parser.add_argument('--source', default='HEAD')
    options = parser.parse_args()
    print(publish(options.archive, options.remote, options.source))
