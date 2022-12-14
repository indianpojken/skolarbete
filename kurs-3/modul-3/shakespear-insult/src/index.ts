interface Insult {
  insult: string,
  source: string,
}

const storedInsults: Insult[] = [
  {
    insult: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?',
    source: 'Macbeth',
  },
  {
    insult: 'Never hung poison on a fouler toad.',
    source: 'Richard III',
  },
  {
    insult: 'He thinks too much: such men are dangerous.',
    source: 'Julius Ceasar',
  },
  {
    insult: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.',
    source: 'The Merchant of Venice',
  },
  {
    insult: 'Give me your hand...I can tell your fortune. You are a fool.',
    source: 'The Two Noble Kinsmen',
  },
  {
    insult: 'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!',
    source: 'The Tempest',
  },
  {
    insult: 'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.',
    source: 'Macbeth',
  },
  {
    insult: 'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.',
    source: 'Titus Andronicus',
  },
  {
    insult: 'He hath eaten me out of house and home; he hath put all substance into that fat belly of his.',
    source: 'Henry IV, Part 2',
  },
  {
    insult: 'Out, you green-sickness carrion! Out, you baggage! You tallow-face!',
    source: 'Romeo and Juliet',
  },
];

// ---

const ui = {
  insult: document.querySelector('#insult') as HTMLElement | null,
  source: document.querySelector('#source') as HTMLElement | null,
  button: document.querySelector('#get_insult') as HTMLElement | null,
};

let insults = [...storedInsults];

function getInsult() {
  const random = Math.floor(Math.random() * insults.length);

  ui!.insult!.innerText = insults[random].insult;
  ui!.source!.innerText = insults[random].source;

  insults.splice(random, 1);

  if (!insults.length) insults = [...storedInsults];
}

window.onload = () => {
  ui?.button?.addEventListener('click', () => { getInsult(); });
  getInsult();
};
