import express from 'express';
import Datastore from 'nedb-promises';

import { validate } from './middleware/validate.js';
import { paginator } from './middleware/paginator.js';

const app = express();
const port = 8000;

const db = Datastore.create('todos.db');

app.use(express.json());

app.get('/api/todos',
  validate({
    query: {
      page: { condition: (n) => Number(n) >= 1 },
      limit: { condition: (n) => Number(n) >= 1 },
    }
  }, { maybe: true }),
  paginator(db)
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
    await db.insert({ todo, done: false, createdAt });

    response.status(201).json({ success: true });
  }
);

app.delete('/api/todos/:id', async (request, response) => {
  const { id } = request.params;

  const deleted = await db.remove({ _id: id });

  if (deleted) {
    response.status(200).json({ success: true });
  } else {
    response.status(404).json({
      success: false, error: 'Todo with the corresponding ID was not found'
    });
  }
});

app.listen(port);
