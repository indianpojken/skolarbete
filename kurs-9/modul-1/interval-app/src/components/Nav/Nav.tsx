import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav({
  button,
  toggler,
}: {
  button: React.JSX.Element;
  toggler: () => void;
}) {
  const links = [
    { title: 'Interval', to: '/interval' },
    { title: 'Digital', to: '/digital' },
  ];

  return (
    <nav className="nav">
      <aside className="nav__button">{button}</aside>
      <section className="nav__items">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={toggler}>
            <p>{link.title}</p>
          </NavLink>
        ))}
      </section>
    </nav>
  );
}
