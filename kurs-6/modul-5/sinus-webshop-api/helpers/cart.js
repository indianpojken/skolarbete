import Datastore from 'nedb-promises';

import { Product } from './product.js';

class Cart {
  #db;

  constructor() {
    this.#db = Datastore.create('cart.db');
  }

  async add(serial) {
    if (!await this.#isDuplicate(serial)) {
      await this.#db.insert({ serial });
    } else {
      throw new Error('product already in cart');
    }
  }

  async remove(serial) {
    const found = await this.#db.remove({ serial });

    if (!found) {
      throw new Error('no such product in cart');
    }
  }

  get items() {
    return (async () =>
      (await this.#db.find({}))
        .map((item) => new Product(item.serial).details)
    )();
  }

  get total() {
    return (async () =>
      (await this.items).reduce((acc, item) => acc + item.price, 0)
    )();
  }

  async #isDuplicate(serial) {
    return !!await this.#db.findOne({ serial });
  }
}

export { Cart };
