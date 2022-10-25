let shoppingCart = [];

document.getElementById('open-cart').addEventListener('click', () => {
  document.getElementById('cart').classList.toggle('hide');
  listProductsInCart();
});

function updateCart() {
  document.getElementById('productsInCart').innerHTML = shoppingCart.length;
  listProductsInCart();
}

function listProductsInCart() {
  document.getElementById('products').innerHTML =
    shoppingCart.reduce((acc, v) =>
      acc += `<li><span class="product-title">Titel: </span>${v}<button>Remove product</button></li>`, '');

  document.querySelectorAll('#products > li > button').forEach((button, i) => {
    button.addEventListener('click', () => {
      shoppingCart.splice(i, 1);
      updateCart();
    });
  });
}

[...document.getElementsByTagName('button')].forEach((product) => {
  product.addEventListener('click', (event) => {
    const item = event.target.parentNode.getAttribute('data-product');

    if (!shoppingCart.includes(item)) {
      shoppingCart.push(item);
      updateCart();
    } else {
      alert(`'${item}' is already added to cart.`);
    }
  });
});
