import Datastore from 'nedb-promises';

import { Product } from './product.model.js';

const cart = Datastore.create('cart.db');

class Cart {
  async add(serial) {
    if (!await this.#isDuplicate(serial)) {
      await cart.insert({ serial });
    } else {
      throw new Error('Product already in cart');
    }
  }

  async remove(serial) {
    const found = await cart.remove({ serial });

    if (!found) {
      throw new Error('No such product in cart');
    }
  }

  get items() {
    return (async () =>
      (await cart.find({}))
        .map((item) => new Product(item.serial).details)
    )();
  }

  get total() {
    return (async () =>
      (await this.items).reduce((acc, item) => acc + item.price, 0)
    )();
  }

  async #isDuplicate(serial) {
    return !!await cart.findOne({ serial });
  }
}

export { Cart };
