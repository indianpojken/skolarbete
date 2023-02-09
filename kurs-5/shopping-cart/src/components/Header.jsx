import Cart from './Cart';

import './Header.css';

function Header({ cart }) {
    return (
        <header className="header">
            <section className="menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </section>
            <Cart items={cart} />
        </header>
    );
}

export default Header;
