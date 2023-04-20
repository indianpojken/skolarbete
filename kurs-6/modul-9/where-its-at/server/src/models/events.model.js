import { database } from '../database.js';

async function addEvent(event) {
  return await database.events.insert(event);
}

async function removeEventByID(eventID) {
  return await database.events.removeOne({ _id: eventID });
}

async function getEvents() {
  return await database.events.find();
}

async function getEventByID(eventID) {
  const event = await database.events.findOne({ _id: eventID });

  if (event) {
    return event;
  } else {
    throw new Error('no such event exist');
  }
}

async function isTicketsAvailable(eventID) {
  try {
    const event = await getEventByID(eventID);

    return event.tickets > 0;
  } catch (error) {
    throw error;
  }
}

async function decreaseTickets(eventID) {
  try {
    const event = await getEventByID(eventID);

    return await database.events.updateOne(
      { _id: eventID },
      { $set: { tickets: event.tickets - 1 } }
    );
  } catch (error) {
    throw error;
  }
}

export {
  addEvent,
  removeEventByID,
  getEvents,
  getEventByID,
  isTicketsAvailable,
  decreaseTickets
};
