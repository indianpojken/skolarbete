import * as staff from '../models/staff.model.js';

async function signUp(request, response) {
  const { username, password } = request.body;

  try {
    await staff.add(username, password);

    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function login(request, response) {
  const { username, password } = request.body;

  try {
    const apiKey = await staff.getKey(username, password);

    response.status(200).json({ success: true, apiKey });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}


export { signUp, login };
