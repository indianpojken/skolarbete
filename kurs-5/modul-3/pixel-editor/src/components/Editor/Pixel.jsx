import { useState } from 'react';
import './Pixel.css';

function Pixel({ selectedColor }) {
    const [color, setColor] = useState("#000");

    const handleClick = () => {
        setColor((c) => c = selectedColor);
    }

    return (
        <aside
            onClick={handleClick}
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
