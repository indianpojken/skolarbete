import Datastore from 'nedb-promises';

const database = {
  events: Datastore.create('events.db'),
  users: Datastore.create('users.db'),
  tickets: Datastore.create('tickets.db'),
}

export { database };
