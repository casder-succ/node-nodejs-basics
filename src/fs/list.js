import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filesPath = path.join(__dirname, 'files');

  try {
    const fileName = await fs.readdir(filesPath);

    fileName.forEach((name) => {
      console.log(name);
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
