import { readFile } from 'node:fs/promises';

async function readJSON(filename) {
  try {
    const content = await readFile(filename, { encoding: 'utf8' });
    return JSON.parse(content);
  } catch (e) {
    console.error(e);
  }
}

const json = await readJSON('./insults.json');

console.log(json);
console.log(json.insults.length);
