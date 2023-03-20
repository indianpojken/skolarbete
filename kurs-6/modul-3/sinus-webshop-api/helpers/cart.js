import products from '../assets/products.json' assert { type: 'json' };

class Cart {
  #items;

  constructor(items = []) {
    this.#items = items;
  }

  add(serial) {
    if (!this.#isProduct(serial)) {
      throw new Error('no such product exist');
    } else if (this.#isDuplicate(serial)) {
      throw new Error('product already in cart');
    } else {
      this.#items.push(serial);
    }
  }

  remove(serial) {
    const index = this.#items.findIndex((item) => item === serial);

    if (index >= 0) {
      return this.#items.splice(index, 1);
    } else {
      throw new Error('no such product in cart');
    }
  }

  get items() {
    return this.#items.map((item) =>
      products.find((product) => product.serial === item)
    );
  }

  get total() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  #isProduct(serial) {
    return products.some((item) => item.serial === serial);
  }

  #isDuplicate(serial) {
    return this.#items.some((item) => item === serial);
  }
}

export { Cart };
