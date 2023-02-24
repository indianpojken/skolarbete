import './EventItem.scss';

function EventItem({ event, onClick }) {
  return (
    <article className="event-item" onClick={onClick}>
      <aside className="event-item__box">
        <article className="event-item__date">
          {event.date.slice(0, 6)}
        </article>
      </aside>

      <aside className="event-item__information">
        <h2 className="event-item__performer">
          {event.performer}
        </h2>

        <p className="event-item__location">
          {event.location}
        </p>

        <footer>
          <p className="event-item__time">
            {event.start} - {event.end}
          </p>
          <p className="event-item__price">
            {event.price} sek
          </p>
        </footer>
      </aside>
    </article>
  );
}

export { EventItem };
