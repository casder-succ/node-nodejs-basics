import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const filesPath = path.join(__dirname, 'files');
  const filesCopyPath = path.join(__dirname, 'files_copy');

  try {
    const names = await fs.readdir(filesPath);

    await fs.mkdir(filesCopyPath);

    for (const name of names) {
      await fs.copyFile(path.join(filesPath, name), path.join(filesCopyPath, name));
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
