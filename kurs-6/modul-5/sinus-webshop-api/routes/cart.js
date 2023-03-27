import { Router } from 'express';

import { validate } from '../middleware/validate.js';
import { Cart } from '../helpers/cart.js';

const router = Router();

const cart = new Cart();

router.get('/', async (request, response) => {
  response.status(200).json({
    success: true,
    items: await cart.items,
    total: await cart.total,
  });
});

const validator = validate({
  body: {
    serial: { type: 'string' },
  },
});

router.post('/', validator, async (request, response) => {
  const { serial } = request.body;

  try {
    await cart.add(serial);
    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
});

router.delete('/', validator, async (request, response) => {
  const { serial } = request.body;

  try {
    await cart.remove(serial);
    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
});

export default router;
