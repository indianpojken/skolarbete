import {
  addUser,
  getUserByUsername,
  comparePassword,
  generateToken,
} from '../models/users.model.js';

async function signUp(request, response) {
  const { username, password } = request.body;

  try {
    await addUser(username, password);

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
    const user = await getUserByUsername(username);

    const passwordMatch = await comparePassword(
      user.password, password
    );

    if (passwordMatch) {
      const token = generateToken(user);

      response
        .status(200)
        .cookie('token', token, { httpOnly: true })
        .json({ success: true });
    } else {
      throw new Error('incorrect password');
    }
  } catch (error) {
    response.status(401).json({
      success: false, message: error.message
    });
  }
}

export { signUp, login };
