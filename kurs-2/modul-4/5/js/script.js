const story = [
  {
    story: `Once upon a time, there was a little girl named Goldilocks.\n
    She went for a walk in the forest. Pretty soon, she came upon a house.\n
    She knocked and, when no one answered, she walked right in.\n
    She tasted the porridge from the ...`,
    choices: ['First bowl', 'Second bowl', 'Third bowl'],
    replies: [
      'This porridge is too hot!" she exclaimed.',
      '"This porridge is too cold," she said. \n',
      '"Ahhh, this porridge is just right," she said happily and she ate it all up.'
    ],
    correct: 2,
  },
  {
    story: `After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired.\n
    So, she walked into the living room where she saw three chairs.\n
    Goldilocks sat in the first chair to rest.`,
    choices: ['Big chair', 'Small chair', 'Even bigger chair'],
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
    She lay down in the first bed, but it was too hard. Then she lay in the second bed, but it was too soft. Then she lay down in the third bed and it was just right. Goldilocks fell asleep.\n`,
    choices: ['Continue'],
    replies: [''],
    correct: 0,
  },
  {
    story: `"Someone's been eating my porridge," growled the Papa bear.\n
    "Someone's been eating my porridge," said the Mama bear.\n
    "Someone's been eating my porridge and they ate it all up!" cried the Baby bear.\n`,
    choices: ['Continue'],
    replies: [''],
    correct: 0,
  },
  {
    story: `"Someone's been sitting in my chair," growled the Papa bear.\n
    "Someone's been sitting in my chair," said the Mama bear.\n
    "Someone's been sitting in my chair and they've broken it to pieces," cried the Baby bear.`,
    choices: ['Continue'],
    replies: [''],
    correct: 0,
  },
  {
    story: `They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled,\n
    "Someone's been sleeping in my bed.”\n
    "Someone's been sleeping in my bed, too" said the Mama bear.\n
    "Someone's been sleeping in my bed and she's still there!" exclaimed the Baby bear.\n
    Just then, Goldilocks woke up. She saw the three bears.`,
    choices: ['Scream "help!" and run', 'Fight back!'],
    replies: [
      `She screamed, "Help!" And she jumped up and ran out of the room.\n
       Goldilocks ran down the stairs, opened the door, and ran away into the forest.\n
       She never returned to the home of the three bears.`,
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
    victory: document.querySelector('#victory_text'),
  },
  buttons: function () { return document.querySelectorAll('button'); },
};

let index = 0;

function addButton(text, choice) {
  const button = document.createElement("button");

  button.innerHTML = text;
  button.addEventListener('click', () => { gameLoop(choice) });

  document.querySelector('.ui').appendChild(button);
}

function render() {
  ui.text.story.innerText = story[index].story;

  ui.buttons().forEach((button, i) => {
    button.innerText = story[index].choices[i];
  });

  if (!ui.buttons().length) {
    story[index].choices.forEach((choice, i) => {
      addButton(choice, i);
    })
  }
}

function gameLoop(choice) {
  if (choice === story[index].correct) {
    if (index + 1 === story.length) {
      ui.text.victory.innerText = story[index].replies[choice];

      document.querySelector('.ui').classList.toggle('hidden');
      document.querySelector('.victory').classList.toggle('hidden');
    } else if (index < story.length) {
      ui.buttons().forEach((button) => {
        button.remove();
      });

      ui.text.reply.innerText = '';

      story[index + 1].story = story[index].replies[choice] !== ''
        ? story[index].replies[choice] + '\n' + story[index + 1].story
        : story[index + 1].story;

      index += 1;
    }
  } else {
    ui.text.reply.innerText = story[index].replies[choice];

    if (choice !== story[index].correct) {
      ui.buttons()[choice].classList.add('hidden');
    }
  }

  render();
}

render();
