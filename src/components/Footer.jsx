import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram, } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      <h2>Follow me in</h2>

      <div className="footer-icons">
        <a href="https://www.instagram.com/jayamurugan__03?utm_source=qr&igsh=MWFlN20wd2dyZjkw" target="self" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jayamurugan-v-7a3571269/" target="self"  rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jayamurugan1234" target="self" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      

    </div>
  );
}

export default Footer;