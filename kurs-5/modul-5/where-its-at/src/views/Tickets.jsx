import { Receipt } from '../components/Receipt';
import './Tickets.scss';

function Tickets() {
  return (
    <div className="app tickets">
      <header>
        <h1 className="tickets__title">
          Tack för din beställning
        </h1>
      </header>

      <main>
        <Receipt />
      </main>
    </div>
  );
}

export { Tickets };
