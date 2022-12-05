import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files/fileToRead.txt');

  try {
    const buffer = await fs.readFile(filePath);

    console.log(buffer.toString());
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
