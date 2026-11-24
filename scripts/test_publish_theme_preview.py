import subprocess
import tempfile
import unittest
import json
from pathlib import Path
from zipfile import ZipFile

from publish_theme_preview import git_blob_id, publish


class PublishTest(unittest.TestCase):
    def test_preserves_custom_files_across_migration_and_updates(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            remote = root / 'remote.git'
            checkout = root / 'maintainer'
            archive = root / 'theme.zip'
            def git(*args):
                return subprocess.check_output(['git', *map(str, args)], cwd=root, text=True, encoding='utf8')
            git('init', '--bare', '--initial-branch=preview', remote)
            git('clone', remote, checkout)
            def prefix(n):
                return 'assets/stardew-' + format(n, '012x')
            def entry(p):
                return f'<script src="/{p}/app/detail-route.js"></script>'
            def write(name, data):
                path = checkout / name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(data.encode())
            def push_checkout():
                git('-C', checkout, 'add', '.')
                git('-C', checkout, '-c', 'user.name=test', '-c', 'user.email=test@example.invalid',
                    'commit', '-qm', 'fixture')
                git('-C', checkout, 'push', '-q', 'origin', 'HEAD:preview')
            def package(include_image):
                with ZipFile(archive, 'w') as z:
                    z.writestr('index.html', entry('assets'))
                    z.writestr('assets/app/detail-route.js', 'route')
                    if include_image:
                        z.writestr('assets/ui/image.png', 'image')
            custom = ['assets/custom/notes.txt', 'assets/stardew-personal/notes.txt', prefix(1) + '/notes.txt']
            for path in custom:
                write(path, 'preserve')
            write('index.html', entry(prefix(1)))
            write(prefix(1) + '/app/detail-route.js', 'route')
            write(prefix(1) + '/ui/image.png', 'customized')
            write(prefix(2) + '/app/detail-route.js', 'older route')
            write(prefix(2) + '/published-files.json', json.dumps({'app/detail-route.js': git_blob_id(b'older route')}))
            push_checkout()
            package(True)
            publish(archive, str(remote))
            git('-C', checkout, 'pull', '--ff-only')
            package(False)
            sha = publish(archive, str(remote))
            self.assertEqual(sha, publish(archive, str(remote)))
            files = git('--git-dir', remote, 'ls-tree', '-r', '--name-only', sha).splitlines()
            for path in custom + [prefix(1) + '/ui/image.png', 'assets/app/detail-route.js', 'assets/published-files.json']:
                self.assertIn(path, files)
            for n in (1, 2):
                self.assertNotIn(prefix(n) + '/app/detail-route.js', files)
            self.assertNotIn('assets/ui/image.png', files)
            git('-C', checkout, 'pull', '--ff-only')
            write('assets/ui/image.png', 'customized')
            push_checkout()
            package(True)
            with self.assertRaisesRegex(ValueError, 'customized asset'):
                publish(archive, str(remote))


if __name__ == '__main__':
    unittest.main()
