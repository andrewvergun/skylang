import './Header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/home">
            <p>SkyLang</p>
            </Link>
          </div>
        
        <nav>
          <ul className="header__links">
            
          <li><Link to="/home">Головна</Link></li>
          <li><Link to="/courses">Наші курси</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакт</Link></li>
          </ul>
        </nav>
        <div className="empty-div"></div>
      </div>
    </header>
  );
};

export default Header;
