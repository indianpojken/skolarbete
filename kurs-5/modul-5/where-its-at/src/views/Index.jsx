import { EventList } from '../components/EventList';

import Events from '../assets/events.json';

import './Index.scss';

function Index() {
  return (
    <div className="app events">
      <header>
        <h2 className="events__title">Events</h2>
      </header>

      <main>
        <EventList events={Events} />
      </main>
    </div>
  );
}

export { Index };
