import { addEvent, getEventByID, getEvents, removeEventByID } from '../models/events.model.js';

async function add(request, response) {
  const event = request.body;

  try {
    await addEvent(event);

    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function remove(request, response) {
  const { eventID } = request.params;

  try {
    const event = await getEventByID(eventID);
    await removeEventByID(event._id);

    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function events(request, response) {
  response.status(200).json({
    success: true, events: await getEventByIDs()
  });
}

export { add, remove, events };
