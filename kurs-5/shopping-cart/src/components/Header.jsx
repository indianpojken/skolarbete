import { Link } from 'react-router-dom';

import Cart from './Cart';

import './Header.css';

function Header({ cart }) {
    return (
        <header className="header">
            <section className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </section>

            <Cart items={cart} />
        </header>
    );
}

export default Header;
