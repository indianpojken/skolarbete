import { useState } from 'react';

import Header from './components/Header';
import Product from './components/Product';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const products = [
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  ];

  return (
    <div className="app">
      <Header cart={cart} />

      <main>
        <section className="products">
          {products.map((product, i) =>
            <Product
              key={i}
              product={product}
              addToCart={addToCart}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
