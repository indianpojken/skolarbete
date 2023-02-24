import { EventList } from '../components/EventList';

import Events from '../assets/events.json';

import './Index.scss';

function Index() {
  return (
    <div className="app events">
      <header>
        <h1 className="events__title">Events</h1>
      </header>

      <main>
        <EventList events={Events} />
      </main>
    </div>
  );
}

export { Index };
