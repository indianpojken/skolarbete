import { useState } from 'react';
import { Outlet } from "react-router-dom";

import Header from '../components/Header';

function Root() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <div className="app">
      <Header cart={cart} />

      <main>
        <Outlet context={{ addToCart }} />
      </main>
    </div>
  );
}

export default Root;
