import { readFile } from 'node:fs/promises';

async function countIDs(filename) {
  try {
    const content = await readFile(filename, { encoding: 'utf8' });
    return content.replaceAll(/[^#]/g, '').length;
  } catch (e) {
    console.error(e);
  }
}

console.log(await countIDs('./style.css'));
