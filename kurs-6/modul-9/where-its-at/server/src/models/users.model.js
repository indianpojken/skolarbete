import bcrypt from 'bcrypt';

import { database } from '../database.js';

async function get(id) {
  const user = await database.users.findOne({ _id: id });

  if (user) {
    return user;
  } else {
    throw new Error(`no user with the id '${id}' exists`);
  }
}

async function getByUsername(username) {
  const user = await database.users.findOne({ username });

  if (user) {
    return user;
  } else {
    throw new Error(`no user with the username '${username}' exists`);
  }
}

async function create(username, password) {
  const usernameExists = await getByUsername(username);

  if (!usernameExists) {
    return await database.users.insert({
      username,
      password: await bcrypt.hash(password, 10),
      roles: ['user'],
      tickets: [],
    });
  } else {
    throw new Error('username already exists');
  }
}

async function push(id, data) {
  return await database.users.updateOne(
    { _id: id },
    { $push: data },
  );
}

export { get, getByUsername, create, push };
