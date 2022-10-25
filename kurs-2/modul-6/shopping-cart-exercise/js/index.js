let shoppingCart = [];
let products = document.getElementsByTagName('button');

document.getElementById('open-cart').addEventListener('click', function () {
  document.getElementById('cart').classList.toggle('hide');
  listProductsInCart();
});

function updateCart() {
  document.getElementById('productsInCart').innerHTML = shoppingCart.length;
  listProductsInCart();
}

function listProductsInCart() {
  let cartProducts = '';

  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts += '<li><span class="product-title">Titel: </span>' + shoppingCart[i]
      + '<button>Remove product</button>' + '</li>';
  }

  document.getElementById('products').innerHTML = cartProducts;

  document.querySelectorAll('#products > li > button').forEach((button, i) => {
    button.addEventListener('click', () => {
      shoppingCart.splice(i, 1);
      updateCart();
    });
  });
}

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function (event) {
    let product = event.target.parentNode.getAttribute('data-product');

    if (!shoppingCart.includes(product)) {
      shoppingCart.push(product);
      updateCart();
    } else {
      alert(`'${product}' is already added to cart.`);
    }
  });
}

