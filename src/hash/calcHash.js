import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

  const buffer = await fs.readFile(filePath);
  const hashSum = crypto.createHash('sha256').update(buffer);

  console.log(hashSum.digest('hex'));
};

await calculateHash();
