import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { selectTicket } from '../actions/ticketActions';

import { EventItem } from './EventList/EventItem';

import './EventList.scss';

function EventList({ events }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const click = (ticket) => {
    dispatch(selectTicket(ticket));
    navigate('/buy');
  }

  return (
    <section className="event-list">
      {events.map((event) =>
        <EventItem
          event={event}
          onClick={() => click(event)}
          key={event.id}
        />
      )}
    </section>
  );
}

export { EventList };
