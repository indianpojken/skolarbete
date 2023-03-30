import express from 'express';

import productsRouter from './routes/products.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.listen(port);
