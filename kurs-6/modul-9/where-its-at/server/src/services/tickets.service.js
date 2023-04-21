import * as ticketsModel from '../models/tickets.model.js';

async function validate(ticketNumber) {
  const ticket = await ticketsModel.getByNumber(ticketNumber);

  if (!ticket.validated) {
    await ticketsModel.update(ticket, { validated: true });
  } else {
    throw new Error('ticket has already been validated');
  }
}

export {
  get,
  getByNumber,
  create,
} from '../models/tickets.model.js';

export { validate };
