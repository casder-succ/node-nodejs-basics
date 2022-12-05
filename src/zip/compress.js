import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filesPath = path.join(__dirname, 'files');

  const gzip = createGzip();

  const readStream = fs.createReadStream(path.join(filesPath, 'fileToCompress.txt'));
  const writeStream = fs.createWriteStream(path.join(filesPath, 'archive.gz'));

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
