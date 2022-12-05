import path from 'path';
import { fileURLToPath } from 'url';
import child_process from 'child_process';

const spawnChildProcess = async (args) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const filePath = path.join(__dirname, 'files', 'script.js');

  const childProcess = child_process.spawn('node', [filePath, ...args], {shell: true});

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess([1, 2, 3]);
