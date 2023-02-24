import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Cart.scss';

function Cart() {
  const ticket = useSelector((state) => { return state.ticket });

  return (
    <section className="cart">
      <h2 className="cart__performer">{ticket.performer}</h2>

      <p className="cart__date-time">
        {ticket.date} kl. {ticket.start} - {ticket.end}
      </p>

      <p className="cart__location">@ {ticket.location}</p>

      <p className="cart__price">{ticket.price} sek</p>

      <Link to="/tickets">
        <button className="button">Beställ</button>
      </Link>
    </section>
  );
}

export { Cart };
