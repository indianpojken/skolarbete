import { useState } from 'react';

import './Product.css';

function Product({ product, addToCart }) {
    const [disabled, setDisabled] = useState(false);

    const click = () => {
        setDisabled(true);
        addToCart(product);
    }

    return (
        <article className="product">
            <h2 className="product__title">{product.title}</h2>
            <h3 className="product__author">av {product.author}</h3>
            <p className="product__synopsis">{product.synopsis}</p>
            <button
                className="product__button"
                onClick={click}
                disabled={disabled}
            >
                Add to cart
            </button>
        </article>
    );
}

export default Product;
