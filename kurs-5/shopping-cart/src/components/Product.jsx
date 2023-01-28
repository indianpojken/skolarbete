import './Product.css';

function Product({ title, author, synopsis }) {
    return (
        <article className="product">
            <h2 className="product__title">{title}</h2>
            <h3 className="product__author">av {author}</h3>
            <p className="product__synopsis">{synopsis}</p>
            <button className="product__button">Add to cart</button>
        </article>
    );
}

export default Product;
