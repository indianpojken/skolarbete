import { useState } from 'react';
import MenuButton from './MenuButton/MenuButton.tsx';
import Nav from '../Nav/Nav.tsx';

import './Header.scss';

export default function Header({ label }: { label?: string }) {
  const [showMenu, setShowMenu] = useState(false);

  const menuButton = (
    <MenuButton
      className={showMenu ? 'menu-button--toggled' : ''}
      onClick={() => setShowMenu(!showMenu)}
    />
  );

  return (
    <header className="header">
      <aside>{menuButton}</aside>
      {label && <p className="header__label">{label}</p>}
      {showMenu && (
        <Nav button={menuButton} toggler={() => setShowMenu(false)} />
      )}
    </header>
  );
}
