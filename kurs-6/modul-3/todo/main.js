import express from 'express';
import { validate, paginator } from '../helpers/helpers.js';

const app = express();
const port = 8000;

const todos = [];

app.use(express.json());

app.get('/api/todo', paginator(todos));

app.post('/api/todo',
  validate({ id: 'string', todo: 'string', done: 'boolean' }),
  (request, response) => {
    const { id, todo, done } = request.body;

    const createdAt = new Date().toLocaleDateString();
    todos.unshift({ id, todo, done, createdAt });

    response.status(201).send({ success: true });
  }
);

app.delete('/api/todo/:id', (request, response) => {
  const { id } = request.params;

  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    response.send(todos.splice(index, 1));
  } else {
    response.status(404).send({
      success: false, error: 'Todo with the corresponding ID was not found'
    });
  }
});

app.listen(port);
