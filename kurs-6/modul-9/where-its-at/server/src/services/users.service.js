import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import * as usersModel from '../models/users.model.js';

async function addTicket(user, ticketNumber) {
  return await usersModel.push(user._id, { tickets: ticketNumber });
}

async function isPasswordMatch(password, encryptedPassword) {
  return await bcrypt.compare(password, encryptedPassword);
}

async function generateToken(user) {
  return jwt.sign(
    { _id: user._id, roles: user.roles },
    process.env.JWT_SECRET,
    { expiresIn: '30m' }
  );
}

async function verify(user, password) {
  const passwordMatch = await isPasswordMatch(
    password, user.password
  );

  if (passwordMatch) {
    return await generateToken(user);
  } else {
    throw new Error('incorrect password');
  }
}

function hasRole(user, role) {
  return user.roles.includes(role);
}

export {
  get,
  getByUsername,
  create
} from '../models/users.model.js';

export {
  addTicket,
  verify,
  hasRole,
};
