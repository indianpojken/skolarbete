import express from 'express';

import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.listen(port);
