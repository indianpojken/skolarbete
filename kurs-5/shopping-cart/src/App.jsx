import Header from './components/Header';
import Product from './components/Product';

import './App.css';

function App() {
  const products = [
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e ex ea commodo consequatex ea commodo consequatex ea commodo consequatex ea commodo consequatex ea commodo consequatex ea commodo consequatex ea commodo consequatex ea commodo consequatex ea commodo consequatx ea commodo consequat' },
  ];

  return (
    <div className="app">
      <Header />

      <main>
        <section className="products">
          {products.map((product, i) =>
            <Product
              key={i}
              title={product.title}
              author={product.author}
              synopsis={product.synopsis} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
