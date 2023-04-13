import { customAlphabet } from 'nanoid'

import { database } from '../database.js';

import * as events from './events.model.js';

async function get(number) {
  const ticket = await database.tickets.findOne({ number });

  if (ticket) {
    return {
      number: ticket.number,
      validated: ticket.validated,
      event: await events.get(ticket.eventID)
    };
  } else {
    throw new Error('no ticket with that number exist');
  }
}

async function add(eventID) {
  if (await events.isTicketsAvailable(eventID)) {
    const ticket = await database.tickets.insert({
      number: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6)(),
      validated: false,
      eventID
    });

    await events.decreaseTickets(eventID);

    return await get(ticket.number);
  } else {
    throw new Error('no tickets available');
  }
}

async function validate(number) {
  try {
    const ticket = await get(number);

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

export { add, validate };
