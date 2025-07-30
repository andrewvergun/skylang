'use client';

import '@/styles/components/Header.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
const Logo = '/svg/logo.svg';
import Image from 'next/image'
import {Lexend} from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
});

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (path) => {
    return pathname === path;
  };

  return (
      <header className={`${scroll ? 'header-scroll' : 'header'} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header__container">
          <div className="header__logo">
            <Link href="/" onClick={handleLinkClick}>
              <Image width={36} src={Logo} height={36}  alt="" />
              <p className={`header__logo-text ${lexend.className}`}>SkyLang</p>
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
              <li>
                <Link
                    href="/"
                    onClick={handleLinkClick}
                    className={isActive('/') ? 'active' : ''}
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link
                    href="/courses"
                    onClick={handleLinkClick}
                    className={isActive('/courses') ? 'active' : ''}
                >
                  Наші курси
                </Link>
              </li>
              <li>
                <Link
                    href="/about-us"
                    onClick={handleLinkClick}
                    className={isActive('/about-us') ? 'active' : ''}
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className={isActive('/contact') ? 'active' : ''}
                >
                  Контакт
                </Link>
              </li>
            </ul>
          </nav>
          <div className="empty-div"></div>
        </div>
      </header>
  );
};

export default Header;