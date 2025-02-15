import './Header.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scroll ? 'header-scroll' : 'header'}>
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/">
            <p>SkyLang</p>
          </NavLink>
        </div>
        <nav>
          <ul className="header__links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Головна</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Наші курси</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Про нас</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Контакт</NavLink></li>
          </ul>
        </nav>
        <div className="empty-div"></div>
      </div>
    </header>
  );
};

export default Header;
