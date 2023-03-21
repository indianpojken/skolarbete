import { Router } from 'express';

import { validate } from '../middlewear/validate.js';
import { Cart } from '../helpers/cart.js';

const router = Router();

const cart = new Cart();

router.get('/', (request, response) => {
  response.status(200).json({ items: cart.items, total: cart.total });
});

const validator = validate({
  body: {
    serial: { type: 'string' },
  },
});

router.post('/', validator, (request, response) => {
  const { serial } = request.body;

  try {
    cart.add(serial);
    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({ success: false, message: error.message });
  }
});

router.delete('/', validator, (request, response) => {
  const { serial } = request.body;

  try {
    cart.remove(serial);
    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({ success: false, message: error.message });
  }
});

export default router;
