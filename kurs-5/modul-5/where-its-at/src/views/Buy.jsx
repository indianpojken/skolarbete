import { Cart } from '../components/Cart';

import './Buy.scss';

function Buy() {
  return (
    <div className="app buy">
      <p className="buy__flavour-text">
        You are about to score some tickets to
      </p>

      <main>
        <Cart />
      </main>
    </div>
  );
}

export { Buy };
