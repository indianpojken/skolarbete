import express from 'express';
import Datastore from 'nedb-promises';

import { validate } from './middleware/validate.js';

const app = express();
const port = 8000;

const db = Datastore.create('users.db');

app.use(express.json());

app.post('/api/signup',
  validate({
    body: {
      username: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
    }
  }),
  async (request, response) => {
    const { username, email, password } = request.body;

    const users = await db.find();

    const duplicates = {
      usernameExists: users.some((user) => user.username === username),
      emailExists: users.some((user) => user.email === email),
    };

    const duplicate = Object.values(duplicates).some(Boolean);

    if (!duplicate) {
      db.insert({ username, email, password });
      response.status(201).send({ success: true });
    } else {
      response.status(409).send({ success: false, ...duplicates });
    }
  }
);

app.post('/api/login',
  validate({
    body: {
      username: { type: 'string' },
      password: { type: 'string' },
    }
  }),
  async (request, response) => {
    const { username, password } = request.body;

    const users = await db.find();

    const validPassword = users
      .find((user) => user.username === username)
      ?.password === password;

    if (validPassword) {
      response.send({ success: true });
    } else {
      response.status(401).send({ success: false });
    }
  }
);

app.get('/api/users', async (request, response) => {
  response.send(await db.find());
});

app.get('/api/users/:username/email',
  async (request, response) => {
    const { username } = request.params;

    const user = await db.findOne({ username });

    if (user) {
      response.status(200).json({
        email: user.email
      });
    } else {
      response.status(404).json({
        success: false, error: 'No user with that username exist'
      });
    }
  }
);

app.delete('/api/users/:username',
  async (request, response) => {
    const { username } = request.params;

    const deleted = await db.remove({ username });

    if (deleted) {
      response.status(200).json({ success: true });
    } else {
      response.status(404).json({
        success: false, error: 'No user with that username exist'
      });
    }
  }
);

app.listen(port);
