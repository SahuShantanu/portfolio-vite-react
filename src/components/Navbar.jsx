import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <button
        className="navbar-menu-btn"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="navbar-menu-icon">☰</span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="navbar-dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            More ▼
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </li>
      </ul>
      {menuOpen && <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
