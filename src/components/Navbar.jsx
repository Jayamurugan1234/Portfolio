import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} ref={menuRef}>
      <div className="logo">JAYAMURUGAN V</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link className={isActive("/") ? "nav-active" : ""} to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link className={isActive("/about") ? "nav-active" : ""} to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link className={isActive("/resume") ? "nav-active" : ""} to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        <li><Link className={isActive("/projects") ? "nav-active" : ""} to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link className={isActive("/contact") ? "nav-active" : ""} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/jayamurugan-v-7a3571269/" target="self"><FaLinkedin /></a>
        <a href="https://github.com/Jayamurugan1234" target="self"><FaGithub /></a>
        <a href="https://www.instagram.com/jayamurugan__03?utm_source=qr&igsh=MWFlN20wd2dyZjkw" target="self"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
