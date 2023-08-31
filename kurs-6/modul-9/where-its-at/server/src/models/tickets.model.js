import { customAlphabet } from 'nanoid';

import { database } from '../database.js';

async function get(id) {
  const ticket = await database.tickets.findOne({ _id: id });

  if (ticket) {
    return ticket;
  } else {
    throw new Error(`no ticket with that id ${ticketNumber} exist`);
  }
}

async function getByNumber(ticketNumber) {
  const ticket = await database.tickets.findOne({ number: ticketNumber });

  if (ticket) {
    return ticket;
  } else {
    throw new Error(`no ticket with the number '${ticketNumber}' exist`);
  }
}

async function create(eventID) {
  return await database.tickets.insert({
    number: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6)(),
    validated: false,
    eventId,
  });
}

async function update(ticket, data) {
  return await database.tickets.updateOne({ _id: ticket._id }, { $set: data });
}

export { get, getByNumber, create, update };
