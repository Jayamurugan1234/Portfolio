import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>

      <div className="logo">JAYAMURUGAN V</div>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

     
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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