import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import fs from 'fs';

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filesPath = path.join(__dirname, 'files');

  const unzip = createGunzip();

  const readStream = fs.createReadStream(path.join(filesPath, 'archive.gz'));
  const writeStream = fs.createWriteStream(path.join(filesPath, 'fileToCompress.txt'));

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
