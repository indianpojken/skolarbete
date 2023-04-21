import {
  isTicketsAvailable,
  decreaseTickets,
  getEventByID
} from '../models/events.model.js';

import * as ticketsServices from '../services/tickets.service.js';
import * as usersService from '../services/users.service.js';

async function buy(request, response) {
  const { eventID } = request.params;
  const userID = request.user._id;

  try {
    const user = await usersService.get(userID);

    if (await isTicketsAvailable(eventID)) {
      const ticket = await ticketsServices.create(eventID);

      await usersService.addTicket(user, ticket.number)
      await decreaseTickets(eventID);

      response.status(201).json({
        success: true,
        ticket: {
          ticketNumber: ticket.number,
          validate: ticket.validated,
          event: await getEventByID(ticket.eventID),
        }
      });
    } else {
      throw new Error('no tickets available');
    }
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function verify(request, response) {
  const { ticketNumber } = request.body;

  try {
    await ticketsServices.validate(ticketNumber);

    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

export { buy, verify };
