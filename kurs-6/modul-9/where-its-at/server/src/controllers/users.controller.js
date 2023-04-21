import * as usersService from '../services/users.service.js';

async function signup(request, response) {
  const { username, password } = request.body;

  try {
    await usersService.create(username, password);

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
    const user = await usersService.getByUsername(username);
    const token = await usersService.verify(user, password);

    response
      .status(200)
      .cookie('token', token, { httpOnly: true })
      .json({ success: true });
  } catch (error) {
    response.status(401).json({
      success: false, message: error.message
    });
  }
}

export { signup, login };
