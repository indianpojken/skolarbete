import './Cart.css';

function Cart({ items = 0 }) {
    return (
        <article className="cart">
            <p>Cart <span className="cart__items">{items}</span></p>
        </article>
    );
}

export default Cart;
