import { Cart } from '../models/cart.model.js';

const cart = new Cart();

async function getCart(request, response) {
  response.status(200).json({
    success: true,
    items: await cart.items,
    total: await cart.total,
  });
}

async function addItem(request, response) {
  const { serial } = request.body;

  try {
    await cart.add(serial);
    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

async function removeItem(request, response) {
  const { serial } = request.body;

  try {
    await cart.remove(serial);
    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false, message: error.message
    });
  }
}

export { getCart, addItem, removeItem };
