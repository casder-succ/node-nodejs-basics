import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filesPath = path.join(__dirname, 'files');

  fs.createReadStream(path.join(filesPath, 'fileToRead.txt')).pipe(process.stdout);
};

await read();
