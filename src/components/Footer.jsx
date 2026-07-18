import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useEffect, useRef } from "react";

function Footer() {
  const footerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="footer" ref={footerRef}>
      <svg className="footer-wave" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,20 C300,45 900,-5 1200,20 L1200,0 L0,0 Z" fill="#f5f8f9"></path>
      </svg>

      <h2>Follow me in</h2>

      <div className="footer-icons">
        <a href="https://www.instagram.com/jayamurugan__03?utm_source=qr&igsh=MWFlN20wd2dyZjkw" target="self" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jayamurugan-v-7a3571269/" target="self" rel="noreferrer">
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
