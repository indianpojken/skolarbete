interface Letters {
  [letter: string]: number,
}

function letterFrequency(text: string): Letters {
  const letters: Letters = {};

  [...text].forEach((letter) => {
    letters[letter] ? letters[letter] += 1 : letters[letter] = 1;
  });

  return letters;
}

console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin"));
