import { useState } from 'react';

import './Pixel.css';

function Pixel({ selectedColor }) {
  const [color, setColor] = useState("#000");

  return (
    <aside
      onClick={() => setColor(selectedColor)}
      style={{
        '--color': color,
        '--selected-color': selectedColor,
      }}
      className="pixel"
    >
    </aside>
  );
}

export default Pixel;
