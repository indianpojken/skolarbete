import Cart from './Cart';

import './Header.css';

function Header({ cart }) {
    return (
        <header className="header">
            <Cart items={cart} />
        </header>
    );
}

export default Header;
