import { Router } from 'express';

import products from '../assets/products.json' assert { type: 'json' };

const router = Router();

router.get('/', (request, response) => {
  response.json({ success: true, products });
});

export default router;
