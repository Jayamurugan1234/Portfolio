import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram, } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      <h2>Follow me in</h2>

      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      

    </div>
  );
}

export default Footer;