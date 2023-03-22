import { Router } from 'express';

import { validate } from '../middleware/validate.js';
import { Product } from '../helpers/product.js';

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

    try {
      const order = items.map((item) => new Product(item.serial).details);
      const total = order.reduce((acc, item) => acc + item.price, 0);

      response.status(201).json({ success: true, order, total });
    } catch (error) {
      response.status(400).json({ success: false, error: error.message });
    }
  }
);

export default router;
