import { useSelector } from 'react-redux';

import './Receipt.scss';

function Receipt() {
  const ticket = useSelector((state) => { return state.ticket });

  return (
    <article className="receipt">
      <section className="receipt__row receipt__top">
        <p className="receipt__label">
          What
        </p>

        <h2 className="receipt__performer">
          {ticket.performer}
        </h2>
      </section>

      <section className="receipt__row receipt__middle">
        <p className="receipt__label">
          Where
        </p>

        <p className="receipt__location">
          {ticket.location}
        </p>
      </section>

      <section className="receipt__column receipt__bottom">
        <section className="receipt__column-item">
          <p className="receipt__label">
            When
          </p>

          <p>
            {ticket.date}
          </p>
        </section>

        <section className="receipt__column-item">
          <p className="receipt__label">
            From
          </p>

          <p>
            {ticket.start}
          </p>
        </section>

        <section className="receipt__column-item">
          <p className="receipt__label">
            To
          </p>

          <p>
            {ticket.end}
          </p>
        </section>
      </section>
    </article>
  )
}

export { Receipt };
