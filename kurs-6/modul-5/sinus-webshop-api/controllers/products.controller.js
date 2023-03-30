import products from '../assets/products.json' assert { type: 'json' };

function getAll(request, response) {
  response.json({ success: true, products });
}

export { getAll };
