import { nanoid } from 'nanoid';

import { database } from '../database.js';

async function add(username, password) {
  const usernameExists = await database.staff.findOne({ username });

  if (!usernameExists) {
    await database.staff.insert({
      username, password, apiKey: nanoid()
    });
  } else {
    throw new Error('username already exists');
  }
}

async function getKey(username, password) {
  const staff = await database.staff.findOne({ username });

  if (!staff) {
    throw new Error('no such username exists');
  }

  if (password !== staff.password) {
    throw new Error('incorrect password');
  }

  return staff.apiKey;
}

async function validKey(apiKey) {
  return !!await database.staff.findOne({ apiKey });
}

export { add, getKey, validKey };
