import { useState } from 'react';

import './Cart.css';

function Cart({ items }) {
    const [showCart, setShowCart] = useState(false);

    return (
        <article className="cart">
            <button className="cart__button" onClick={() => items.length != 0 && setShowCart(!showCart)}>
                Cart <span className="cart__items">{items.length}</span>
            </button>

            <article className={"cart__list" + (!showCart ? " hidden" : "")}>
                {items.map((item, i) =>
                    <article key={i} className="cart__item">
                        <h2>{item.title}</h2>
                        <p>{item.author}</p>
                    </article>
                )}
            </article>
        </article>
    );
}

export default Cart;
