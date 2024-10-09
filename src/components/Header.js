import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../assets/ktennis.jpg'; // Adjust the path as per your project structure

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Ensure menu closes after clicking a link
  };

  return (
    <header className="header-container flex items-center justify-between h-16 px-4 lg:px-6 bg-[#006400] z-50"> {/* Added z-index to the header */}
      <Link className="logo flex items-center" to="/" onClick={closeMenu}>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
          <img src={logo} alt="KTennis Logo" className="w-full h-full object-cover" />
        </div>
        <span className="ml-2 text-2xl font-bold text-white logo-text">KTennis</span>
      </Link>

      {/* Burger Menu Icon for Mobile */}
      <div className="burger-menu lg:hidden" onClick={toggleMenu}>
        <span className="icon">&#9776;</span> {/* Unicode character for burger menu */}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''} lg:flex`}>
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`} to="/reviews" onClick={closeMenu}>
          Reviews
        </Link>
        <Link className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery" onClick={closeMenu}>
          Gallery
        </Link>
        <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={closeMenu}>
          Contact & Booking
        </Link>
      </nav>
    </header>
  );
};

export default Header;
