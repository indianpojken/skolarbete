import { writeFile } from 'node:fs/promises';
import readLineSync from 'readline-sync';

const filename = readLineSync.question('Filename: ')

if (filename) {
  const text = readLineSync.question('Input text: ')

  try {
    await writeFile(filename + '.txt', text);
  } catch (e) {
    console.error(e);
  }
}
