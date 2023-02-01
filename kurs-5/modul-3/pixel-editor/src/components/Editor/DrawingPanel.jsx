import './DrawingPanel.css';
import Pixel from './Pixel';
import Row from './Row';

function DrawingPanel({ width, height, selectedColor }) {
    const rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(
            <Row width={width} key={i}>
                <Pixel selectedColor={selectedColor} />
            </Row>
        );
    }

    return (
        <article className="drawing-panel">
            {rows}
        </article>
    );
}

export default DrawingPanel;
