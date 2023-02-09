import { useOutletContext } from 'react-router-dom';
import Product from './../components/Product';

function Products() {
  const { addToCart } = useOutletContext();

  const products = [
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  ];

  return (
    <section className="products">
      {products.map((product, i) =>
        <Product
          key={i}
          product={product}
          addToCart={addToCart}
        />
      )}
    </section>
  );
}

export default Products;
