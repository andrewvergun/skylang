'use client';

import '@/styles/components/Header.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
const Logo = '/svg/logo.svg';
import Image from 'next/image'


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
          <Link href="/" onClick={handleLinkClick}>
          <Image width={36} src={Logo} height={36}  alt="" />
            <p>SkyLang</p>
          </Link>
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
            <li><Link href="/" onClick={handleLinkClick}>Головна</Link></li>
            <li><Link href="/courses" onClick={handleLinkClick}>Наші курси</Link></li>
            <li><Link href="/about-us" onClick={handleLinkClick}>Про нас</Link></li>
            <li><Link href="/contact" onClick={handleLinkClick}>Контакт</Link></li>
          </ul>
        </nav>
        <div className="empty-div"></div>
      </div>
    </header>
  );
};

export default Header;
