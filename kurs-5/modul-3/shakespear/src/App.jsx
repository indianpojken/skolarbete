import { useState } from 'react';
import Insult from './components/Insult'
import Insults from './components/Insults'
import './App.css';

function App() {
  const [insult, setInsult] = useState({ quote: "", play: "" });
  const [insults, setInsults] = useState(
    [
      {
        quote: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?',
        play: 'Macbeth',
      },
      {
        quote: 'Never hung poison on a fouler toad.',
        play: 'Richard III',
      },
      {
        quote: 'He thinks too much: such men are dangerous.',
        play: 'Julius Ceasar',
      },
      {
        quote: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.',
        play: 'The Merchant of Venice',
      },
      {
        quote: 'Give me your hand...I can tell your fortune. You are a fool.',
        play: 'The Two Noble Kinsmen',
      },
      {
        quote: 'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!',
        play: 'The Tempest',
      },
      {
        quote: 'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.',
        play: 'Macbeth',
      },
      {
        quote: 'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.',
        play: 'Titus Andronicus',
      },
      {
        quote: 'He hath eaten me out of house and home; he hath put all substance into that fat belly of his.',
        play: 'Henry IV, Part 2',
      },
      {
        quote: 'Out, you green-sickness carrion! Out, you baggage! You tallow-face!',
        play: 'Romeo and Juliet',
      },
    ]
  );

  const getInsult = () => {
    const random = Math.floor(Math.random() * insults.length);
    setInsult(insults[random]);
  }

  if (!insult.quote && !insult.play) getInsult();

  return (
    <div className="App">
      <main>
        <Insult quote={insult.quote} play={insult.play} onClick={getInsult} />
      </main>

      <section>
      </section>

      <section>
        <Insults insults={insults} />
      </section>
    </div>
  )
}

export default App;
