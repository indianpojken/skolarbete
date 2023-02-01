import { Fragment } from 'react';
import './Row.css';

function Row({ children, width }) {
    const pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(
            <Fragment key={i}>
            {children}
            </Fragment>
        );
    }

    return (
        <section className="row">
            {pixels}
        </section>
    );
}

export default Row;
