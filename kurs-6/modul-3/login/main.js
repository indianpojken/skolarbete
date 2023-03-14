import express from 'express';
import { validate } from '../helpers/helpers.js';

const app = express();
const port = 8000;

const users = [];

app.use(express.json());

app.post('/api/signup',
  validate({ username: 'string', email: 'string', password: 'string' }),
  (request, response) => {
    const { username, email, password } = request.body;

    const duplicates = {
      usernameExists: users.some((user) => user.username === username),
      emailExists: users.some((user) => user.email === email),
    };

    const duplicate = Object.values(duplicates).some(Boolean);

    if (!duplicate) {
      users.push({ username, email, password });
      response.status(201).send({ success: true });
    } else {
      response.status(409).send({ success: false, ...duplicates });
    }
  }
);

app.post('/api/login',
  validate({ username: 'string', password: 'string' }),
  (request, response) => {
    const { username, password } = request.body;

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

app.get('/api/users', (request, response) => {
  response.send(users);
});

app.listen(port);
