import { Order } from '../models/order.model.js';

async function getOrder(request, response) {
  const { id } = request.params;

  try {
    response.status(200).json({
      success: true,
      order: (await Order.get(id)).details
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    });
  }
}

async function getAll(request, response) {
  try {
    response.status(200).json({
      success: true,
      orders: (await Order.getAll()).map((order) => order.details)
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    });
  }
}

async function sendOrder(request, response) {
  const { shippingInfo, items } = request.body;

  try {
    const order = new Order(shippingInfo, items);
    await order.send();

    response.status(201).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    });
  }
}

async function updateOrder(request, response) {
  const { id } = request.params;
  const { shippingInfo, items } = request.body;

  try {
    const order = await Order.get(id);
    order.clear();

    order.shippingInfo = shippingInfo;
    order.add(...items);

    order.update();

    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    });
  }
}

async function deleteOrder(request, response) {
  const { id } = request.params;

  try {
    await Order.delete(id);
    response.status(200).json({ success: true });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    });
  }
}

export {
  getOrder, getAll, sendOrder,
  updateOrder, deleteOrder
};
