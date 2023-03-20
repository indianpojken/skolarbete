import { Router } from 'express';

import { validate } from '../middlewear/validate.js';
import { Cart } from '../helpers/cart.js';

const router = Router();

router.post('/',
  validate({
    body: {
      items: [{
        serial: { type: 'string' }
      }],
    },
  }),
  (request, response) => {
    const { items } = request.body;
    const order = new Cart(items.map((i) => i.serial));

    response.json({
      items: order.items,
      quantity: order.items.length,
      total: order.total
    });
  }
);

export default router;
