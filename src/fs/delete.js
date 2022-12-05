import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const exists = async (path) => {
  try {
    await fs.access(path);

    return true;
  } catch (e) {
    return false;
  }
}

const remove = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files/fileToRemove.txt');

  if (!await exists(filePath)) {
    throw new Error('FS operation failed');
  }

  await fs.unlink(filePath);
};

await remove();
