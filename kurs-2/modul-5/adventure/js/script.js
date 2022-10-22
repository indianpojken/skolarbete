const story = [
  {
    story: `Once upon a time, there was a little girl named Goldilocks.\n
    She went for a walk in the forest. Pretty soon, she came upon a house.\n
    She knocked and, when no one answered, she walked right in.\n
    She tasted the porridge from the ...`,
    choises: ['First bowl', 'Second bowl', 'Third bowl'],
    replies: [
      'This porridge is too hot!" she exclaimed.',
      '"This porridge is too cold," she said.',
      '"Ahhh, this porridge is just right," she said happily and she ate it all up.'
    ],
    correct: 2,
  },
  {
    story: `After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired.\n
    So, she walked into the living room where she saw three chairs.\n
    Goldilocks sat in the first chair to rest.`,
    choises: ['Big chair', 'Small chair', 'Even bigger chair'],
    replies: [
      'This chair is too big!" she exclaimed.',
      `"Ahhh, this chair is just right," she sighed. \n
      But just as she settled down into the chair to rest, it broke into pieces!`,
      '"This chair is too big, too!" she whined.',
    ],
    correct: 1,
  },
  {
    story: `Goldilocks was very tired by this time, she went upstairs to the bedroom.\n
    She lay down in the first bed, but it was too hard. Then she lay in the second bed, but it was too soft. Then she lay down in the third bed and it was just right. Goldilocks fell asleep.\n
    As she was sleeping, the three bears came home.\n
    "Someone's been eating my porridge," growled the Papa bear.\n
    "Someone's been eating my porridge," said the Mama bear.\n
    "Someone's been eating my porridge and they ate it all up!" cried the Baby bear.\n
    "Someone's been sitting in my chair," growled the Papa bear.\n
    "Someone's been sitting in my chair," said the Mama bear.\n
    "Someone's been sitting in my chair and they've broken it to pieces," cried the Baby bear.
    They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled,\n
    "Someone's been sleeping in my bed.”\n
    "Someone's been sleeping in my bed, too" said the Mama bear.\n
    "Someone's been sleeping in my bed and she's still there!" exclaimed the Baby bear.\n
    Just then, Goldilocks woke up. She saw the three bears.
    `,
    choises: ['Scream "help!" and run', 'Cover in fear', 'Fight'],
    replies: [
      '---',
      'Goldilock covered in fear and got killed by the bears.',
      'Goldilock raised her fists and got a hit in, but the bears fought back and killed her.',
    ],
    correct: 0,
  },
];

// ----

const ui = {
  text: {
    story: document.querySelector('#story'),
    reply: document.querySelector('#reply'),
  },
  button: [
    document.querySelector('#choice_1'),
    document.querySelector('#choice_2'),
    document.querySelector('#choice_3')
  ],
};

ui.button.forEach((button, i) => {
  ui.button[i].addEventListener('click', () => { gameLoop(i) });
});

let index = 0;
let win = false;
let wrongChoices = [];

function render() {
  ui.text.story.innerText = story[index].story;

  ui.button.forEach((button, i) => {
    button.innerText = story[index].choises[i];
  });

  wrongChoices.forEach((button) => {
    ui.button[button].classList.add('hidden');
  });

  if (win === true) {
    document.querySelector('.ui').classList.toggle('hidden');
    document.querySelector('.victory').classList.toggle('hidden');
  }
}

function gameLoop(choice) {
  if (parseInt(choice, 10) === story[index].correct) {
    if (index + 1 === story.length) {
      win = true;
    } else if (index + 1 !== story.length) {
      wrongChoices = [];

      ui.button.forEach((button) => {
        button.classList.remove('hidden');
      });

      ui.text.reply.innerText = '';

      index += 1;
    }
  } else {
    ui.text.reply.innerText = story[index].replies[choice] ?? '';

    if (parseInt(choice, 10) !== story[index].correct) {
      wrongChoices.push(choice);
    }
  }

  render();
}

render();
