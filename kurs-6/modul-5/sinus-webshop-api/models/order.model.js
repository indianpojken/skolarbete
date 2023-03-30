import Datastore from 'nedb-promises';

import { Product } from './product.model.js';

const orders = Datastore.create('orders.db');

class Order {
  #items = [];
  #id;

  constructor(shippingInfo, items, id = '') {
    this.shippingInfo = shippingInfo;
    this.add(...items);
    this.#id = id;
  }

  add(...serials) {
    this.#items.push(
      ...serials.map((item) => new Product(item.serial).details)
    );
  }

  async send() {
    if (!this.#items.length) {
      throw new Error('Cannot place an order without items');
    }

    if (!this.shippingInfo) {
      throw new Error('Cannot place an order without shipping information');
    }

    await orders.insert({
      shippingInfo: this.shippingInfo,
      items: this.#items,
      total: this.total
    });
  }

  static async get(id) {
    const data = await orders.findOne({ _id: id });

    if (data) {
      return new Order(data.shippingInfo, data.items, data._id);
    } else {
      throw new Error('No order by that id found');
    }
  }

  static async getAll() {
    const data = await orders.find();

    return data.map((order) => {
      return new Order(order.shippingInfo, order.items, order._id)
    });
  }

  static async delete(id) {
    const deleted = await orders.deleteOne({ _id: id });

    if (!deleted) {
      throw new Error('No order by that id found');
    }
  }

  async update() {
    await orders.update(
      { _id: this.#id },
      { $set: { shippingInfo: this.shippingInfo, items: this.#items, } }
    );
  }

  clear() {
    this.#items = [];
    this.shippingInfo = {};
  }

  get items() {
    return this.#items;
  }

  get total() {
    return this.#items.reduce((acc, item) => acc + item.price, 0);
  }

  get details() {
    return {
      shippingInfo: this.shippingInfo,
      items: this.#items,
      total: this.total,
    };
  }
}

export { Order };

