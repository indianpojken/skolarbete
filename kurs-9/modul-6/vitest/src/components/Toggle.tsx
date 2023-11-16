import { useState } from 'react';

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <button onClick={() => setToggle(!toggle)}>{toggle ? 'ON' : 'OFF'}</button>
  );
}
