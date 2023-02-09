import Pixel from './Pixel';
import Row from './Row';

import './DrawingPanel.css';

function DrawingPanel({ width, height, selectedColor }) {
  const rows = [...Array(height)]
    .map((_, i) =>
      <Row width={width} key={i}>
        <Pixel selectedColor={selectedColor} />
      </Row>
    );

  return (
    <article className="drawing-panel">
      {rows}
    </article>
  );
}

export default DrawingPanel;
