import express from 'express';
import { validateBody } from '../helpers/helpers.js';

const app = express();
const port = 8000;

const users = [];

app.use(express.json());

/*
function checkDuplicates(data, items) {
  return Object.fromEntries(Object.keys(items).map((key) =>
    [key + 'Exists', data.some((item) => item[key] === items[key])]
  ));
}
*/

app.post('/api/signup',
  validateBody({ username: 'string', email: 'string', password: 'string' }),
  (request, response) => {
    const { username, email, password } = request.body;

    // const duplicates = checkDuplicates(data, { username, email });
    const duplicates = {
      usernameExists: users.some((user) => user.username === username),
      emailExists: users.some((user) => user.email === email),
    };

    const duplicate = Object.values(duplicates).some(Boolean);

    if (!duplicate) {
      users.push({ username, email, password });
      response.status(201).send({ success: true })
    } else {
      response.status(409).send({ success: false, ...duplicates });
    }
  }
);

app.post('/api/login',
  validateBody({ username: 'string', password: 'string' }),
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
