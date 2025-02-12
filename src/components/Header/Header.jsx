import './Header.css';
import { useState, useEffect } from 'react';

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
          <p>SkyLang</p>
        </div>
        <nav>
          <ul className="header__links">
            <li><a href="#">Головна</a></li>
            <li><a href="#">Наші курси</a></li>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Контакти</a></li>
          </ul>
        </nav>
        <div className="empty-div"></div>
      </div>
    </header>
  );
};

export default Header;
