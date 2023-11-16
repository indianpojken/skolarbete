import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <article>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <p id="result">{counter}</p>
    </article>
  );
}
