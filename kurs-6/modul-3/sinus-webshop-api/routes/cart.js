import { Router } from 'express';

import { validate } from '../middlewear/validate.js';
import { Cart } from '../helpers/cart.js';

const router = Router();

const cart = new Cart();

router.get('/', (request, response) => {
  response.status(200).json({ items: cart.items, total: cart.total });
});

router.post('/',
  validate({
    body: {
      serial: { type: 'string' },
    },
  }),
  (request, response) => {
    const { serial } = request.body;

    try {
      cart.add(serial);
      response.status(201).json({ success: true });
    } catch (error) {
      response.status(400).json({ success: false, message: error.message });
    }
  }
);

router.delete('/',
  validate({
    body: {
      serial: { type: 'string' },
    },
  }),
  (request, response) => {
    const { serial } = request.body;

    try {
      cart.remove(serial);
      response.status(201).json({ success: true });
    } catch (error) {
      response.status(400).json({ success: false, message: error.message });
    }
  }
);

export default router;
