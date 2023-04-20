import { customAlphabet } from 'nanoid'

import { database } from '../database.js';

import {
  getEventByID,
  isTicketsAvailable,
  decreaseTickets
} from './events.model.js';

async function getTicket(ticketNumber) {
  const ticket = await database.tickets.findOne({ number: ticketNumber });

  if (ticket) {
    return {
      _id: ticket._id,
      number: ticket.number,
      validated: ticket.validated,
      event: await getEventByID(ticket.eventID),
    };
  } else {
    throw new Error('no ticket with that number exist');
  }
}

async function addTicket(eventID) {
  if (await isTicketsAvailable(eventID)) {
    const ticket = await database.tickets.insert({
      number: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6)(),
      validated: false,
      eventID,
    });

    await decreaseTickets(eventID);

    return await getTicket(ticket.number);
  } else {
    throw new Error('no tickets available');
  }
}

async function validateTicket(ticketNumber) {
  try {
    const ticket = await getTicket(ticketNumber);

    if (!ticket.validated) {
      await database.tickets.updateOne(
        { number: ticket.number },
        { $set: { validated: true } }
      );
    } else {
      throw new Error('ticket has already been validated')
    }
  } catch (error) {
    throw error;
  }
}

export { getTicket, addTicket, validateTicket };
