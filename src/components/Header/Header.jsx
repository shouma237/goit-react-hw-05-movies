import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" end className={css.links}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.links}>
          Movie
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
