import { Product } from './product.js';

class Cart {
  #items;

  constructor(items = []) {
    this.#items = items;
  }

  add(serial) {
    if (this.#isDuplicate(serial)) {
      throw new Error('product already in cart');
    } else {
      this.#items.push(new Product(serial));
    }
  }

  remove(serial) {
    const index = this.#items.findIndex((item) => item.serial === serial);

    if (index >= 0) {
      return this.#items.splice(index, 1);
    } else {
      throw new Error('no such product in cart');
    }
  }

  get items() {
    return this.#items.map((item) => item.details);
  }

  get total() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  #isDuplicate(serial) {
    return this.#items.some((item) => item.serial === serial);
  }
}

export { Cart };
