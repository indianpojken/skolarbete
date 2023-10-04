import MenuButton from './MenuButton/MenuButton.tsx';
import './Header.scss';

export default function Header({ label }: { label?: string }) {
  return (
    <header className="header">
      <aside>
        <MenuButton />
      </aside>
      {label && <p className="header__label">{label}</p>}
    </header>
  );
}
