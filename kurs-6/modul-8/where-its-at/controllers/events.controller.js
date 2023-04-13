import * as events from '../models/events.model.js';

async function getEvents(request, response) {
  response.status(200).json({
    success: true, events: await events.all()
  });
}

export { getEvents };
