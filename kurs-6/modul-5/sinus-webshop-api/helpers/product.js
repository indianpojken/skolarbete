import products from '../assets/products.json' assert { type: 'json' };

class Product {
  #serial;

  constructor(serial) {
    if (this.#isProduct(serial)) {
      this.#serial = serial;
    } else {
      throw new Error('no such product exist');
    }
  }

  get serial() {
    return this.#serial;
  }

  get details() {
    return products.find((product) => product.serial === this.#serial);
  }

  #isProduct(serial) {
    return products.some((product) => product.serial === serial);
  }
}

export { Product };
