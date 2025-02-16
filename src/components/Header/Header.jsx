import './Header.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${scroll ? 'header-scroll' : 'header'} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="" />
            <p>SkyLang</p>
          </NavLink>
        </div>
        
        <button 
          className="hamburger-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="header__links">
            <li><NavLink to="/" onClick={handleLinkClick}>Головна</NavLink></li>
            <li><NavLink to="/courses" onClick={handleLinkClick}>Наші курси</NavLink></li>
            <li><NavLink to="/about" onClick={handleLinkClick}>Про нас</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>Контакт</NavLink></li>
          </ul>
        </nav>
        <div className="empty-div"></div>
      </div>
    </header>
  );
};

export default Header;
