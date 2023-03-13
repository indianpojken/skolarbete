import { readFile } from 'node:fs/promises';

const filename = 'index.html';

try {
  const content = await readFile(filename, { encoding: 'utf8' });
  console.log(content);
} catch (e) {
  console.error(e);
}
