import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filesPath = path.join(__dirname, 'files');

  try {
    await fs.rename(path.join(filesPath, 'wrongFilename.txt'), path.join(filesPath, 'properFilename.md'));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
