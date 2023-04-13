import * as tickets from '../models/tickets.model.js';

async function buy(request, response) {
  const { eventID } = request.body;

  try {
    const ticket = await tickets.add(eventID);

    response.status(201).json({ success: true, ticket });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function verify(request, response) {
  const { number } = request.body;

  try {
    await tickets.validate(number);

    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}


export { buy, verify };
