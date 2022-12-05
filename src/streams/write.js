import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filesPath = path.join(__dirname, 'files');

  const writeStream = fs.createWriteStream(path.join(filesPath, 'fileToWrite.txt'));

  process.stdin.pipe(writeStream);
};

await write();
