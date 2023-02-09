import { Fragment } from 'react';
import './Row.css';

function Row({ children, width }) {
  const pixels = [...Array(width)].map((_, i) =>
    <Fragment key={i}>
      {children}
    </Fragment>
  );

  return (
    <section className="row">
      {pixels}
    </section>
  );
}

export default Row;
