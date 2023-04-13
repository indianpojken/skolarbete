import Datastore from 'nedb-promises';

const database = {
  events: Datastore.create('events.db'),
  staff: Datastore.create('staff.db'),
  tickets: Datastore.create('tickets.db'),
}

export { database };
