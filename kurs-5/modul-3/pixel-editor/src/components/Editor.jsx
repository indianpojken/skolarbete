import { useState } from 'react';
import './Editor.css';

import DrawingPanel from './Editor/DrawingPanel';
import { CompactPicker } from 'react-color';

function Editor({ width, height }) {
  const [color, setColor] = useState("#fff");

  return (
    <main className="editor">
      <section className="color-picker">
        <CompactPicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
      </section>

      <DrawingPanel width={width} height={height} selectedColor={color} />
    </main>
  );
}

export default Editor;
