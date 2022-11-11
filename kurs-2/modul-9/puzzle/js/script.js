const puzzles = [
  {
    start: 'four',
    finish: 'five',
    phrase: ['raise', 'to'],
  },
  {
    start: 'eye',
    finish: 'lid',
    phrase: ['cover', 'with'],
  },
  {
    start: 'tiger',
    finish: 'roses',
    phrase: ['crown', 'with'],
  },
  {
    start: 'wheat',
    finish: 'bread',
    phrase: ['make', 'into'],
  },
];

const elements = {
  inputs: document.querySelector('#inputs'),
  phrases: document.querySelectorAll('.phrase'),
  finish: document.querySelector('#finish'),
  restart: document.querySelector('#restart button'),
};

const state = {};

async function initializePuzzle() {
  document.querySelector('#restart').classList.toggle('hidden');

  document.querySelectorAll('#inputs input').forEach((input) => {
    input.remove();
  });

  state.puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  state.previousInput = state.puzzle.start;

  elements.inputs.append(...[...state.puzzle.start].map((char) => {
    const letter = document.createElement('input');
    letter.type = 'text';
    letter.value = char;
    letter.maxLength = 1;

    letter.onchange = async () => {
      if (await isWord(getInput())) {
        state.previousInput = getInput();
        if (getInput() === state.puzzle.finish) {
          victory();
        }
      } else {
        restoreInput();
      }
    };

    return letter;
  }));

  elements.phrases[0].innerText = state.puzzle.phrase[0];
  elements.phrases[1].innerText = state.puzzle.phrase[1];
  elements.finish.innerText = state.puzzle.finish;
}

function getInput() {
  return [...document.querySelectorAll('#inputs input')]
    .reduce((string, letter) => string += letter.value, '').toLowerCase();
}

function restoreInput() {
  document.querySelectorAll('#inputs input').forEach((input, i) => {
    input.value = [...state.previousInput][i];
  });
}

function victory() {
  document.querySelector('#restart').classList.toggle('hidden');

  document.querySelectorAll('#inputs input').forEach((input) => {
    input.style.backgroundColor = "#84cc16";
    input.disabled = true;
  });

  elements.restart.addEventListener('click', () => {
    initializePuzzle();
  });
}

async function isWord(word) {
  const endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(endpoint);
    return Array.isArray(await response.json());
  } catch (error) {
    console.log(error);
  }
}

initializePuzzle();
