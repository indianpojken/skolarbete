import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { database } from '../database.js';

async function addUser(username, password) {
  const usernameExists = await database.users.findOne({ username });

  if (!usernameExists) {
    await database.users.insert({
      username,
      password: await bcrypt.hash(password, 10),
      roles: ['user'],
      tickets: [],
    });
  } else {
    throw new Error('username already exists');
  }
}

async function getUserByUsername(username) {
  const user = await database.users.findOne({ username });

  if (user) {
    return user;
  } else {
    throw new Error('no such user exists');
  }
}

async function getUserByID(id) {
  const user = await database.users.findOne({ _id: id });

  if (user) {
    return user;
  } else {
    throw new Error('no user with that id exists');
  }
}

async function addTicketToUser(user, ticketNumber) {
  await database.users.updateOne(
    { _id: user._id },
    { $push: { tickets: ticketNumber } },
  );
}

async function comparePassword(userPassword, password) {
  return await bcrypt.compare(password, userPassword);
}

function generateToken(user) {
  return jwt.sign(
    { _id: user._id, roles: user.roles },
    process.env.JWT_SECRET,
    { expiresIn: '30m' }
  );
}

function hasRole(user, role) {
  return user.roles.includes(role);
}

export {
  addUser,
  getUserByUsername,
  getUserByID,
  addTicketToUser,
  comparePassword,
  generateToken,
  hasRole,
};
