import { useState } from 'react';

const insults = [
  'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?',
  'Never hung poison on a fouler toad.',
  'He thinks too much: such men are dangerous.',
  'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.',
  'Give me your hand...I can tell your fortune. You are a fool.',
  'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!',
  'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.',
  'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.',
  'He hath eaten me out of house and home; he hath put all substance into that fat belly of his.',
  'Out, you green-sickness carrion! Out, you baggage! You tallow-face!',
];

export default function InsultGenerator() {
  const [insult, setInsult] = useState('');

  return (
    <article>
      <button
        onClick={() => {
          const newInsult = insults[Math.floor(Math.random() * insults.length)];
          setInsult(newInsult);
        }}
      >
        Insult me!
      </button>

      <p>{insult}</p>
    </article>
  );
}
