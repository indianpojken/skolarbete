import express from 'express';
import Datastore from 'nedb-promises';

import { validate } from './middleware/validate.js';

const app = express();
const port = 8000;

const todos = Datastore.create('todos.db');

app.use(express.json());

app.get('/api/todos',
  validate({
    query: {
      page: { condition: (n) => Number(n) >= 1 },
      limit: { condition: (n) => Number(n) >= 1 },
    }
  }, { maybe: true }),
  async (request, response) => {
    const { page } = request.query;
    const limit = request.query.limit || 5;

    const data = await todos.find().sort({ todo: -1 });

    if (page !== undefined) {
      response.status(200).json(
        data.limit(limit).skip((page - 1) * limit)
      );
    } else {
      response.status(200).json(data);
    }
  }
);

app.post('/api/todos',
  validate({
    body: {
      todo: { type: 'string' },
    }
  }),
  async (request, response) => {
    const { todo } = request.body;

    const createdAt = new Date().toLocaleDateString();
    await todos.insert({ todo, done: false, createdAt });

    response.status(201).json({ success: true });
  }
);

app.delete('/api/todos/:id', async (request, response) => {
  const { id } = request.params;

  const deleted = await todos.remove({ _id: id });

  if (deleted) {
    response.status(200).json({ success: true });
  } else {
    response.status(404).json({
      success: false,
      error: 'Todo with the corresponding ID was not found'
    });
  }
});

app.listen(port);
