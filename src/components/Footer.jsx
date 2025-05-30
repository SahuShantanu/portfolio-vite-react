import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. Built with React & Vite. All rights reserved.</p>
      <div className="footer-quick-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a>
      </div>
      <div className="footer-contact">
        <span>✉️ your@email.com</span> | <span>🔗 LinkedIn: yourprofile</span>
      </div>
    </footer>
  );
}
