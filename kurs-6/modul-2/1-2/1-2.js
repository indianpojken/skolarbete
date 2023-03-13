import { writeFile, readFile } from 'node:fs/promises';

const filename = 'alicequotes.txt';
const text = `Why, sometimes I've believed as many as six impossible things before breakfast.`;

try {
  await writeFile(filename, text);
} catch (e) {
  console.error(e);
}

try {
  const content = await readFile(filename, { encoding: 'utf8' });
  console.log(content);
} catch (e) {
  console.error(e);
}
