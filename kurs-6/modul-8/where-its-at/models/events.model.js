import { database } from '../database.js';

async function all() {
  return await database.events.find();
}

async function get(eventID) {
  const event = await database.events.findOne({ _id: eventID });

  if (event) {
    return event;
  } else {
    throw new Error('no such event exist');
  }
}

async function isTicketsAvailable(eventID) {
  try {
    const event = await get(eventID);

    return event.tickets > 0;
  } catch (error) {
    throw error;
  }
}

async function decreaseTickets(eventID) {
  try {
    const event = await get(eventID);

    return await database.events.updateOne(
      { _id: eventID },
      { $set: { tickets: event.tickets - 1 } }
    );
  } catch (error) {
    throw error;
  }
}

export {
  all, get, isTicketsAvailable, decreaseTickets
};
