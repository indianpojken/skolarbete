import { addTicket, validateTicket } from '../models/tickets.model.js';
import { getUserByID, addTicketToUser } from '../models/users.model.js';

async function buy(request, response) {
  const { eventID } = request.params;
  const userID = request.user._id;

  try {
    const ticket = await addTicket(eventID);

    const user = await getUserByID(userID);
    await addTicketToUser(user, ticket.number);

    response.status(201).json({ success: true, ticket });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function verify(request, response) {
  const { ticketNumber } = request.body;

  try {
    await validateTicket(ticketNumber);

    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}


export { buy, verify };
