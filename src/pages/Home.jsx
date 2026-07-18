import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPython, FaReact, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiDjango, SiJavascript } from "react-icons/si";

const ROLE_TEXT = "Python Full-Stack Developer";

function Home() {
  const navigate = useNavigate();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(ROLE_TEXT.slice(0, i));
      if (i >= ROLE_TEXT.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="home-bg-shapes" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <div className="home-container">

        <div className="home-left">
          <span className="home-badge">Open to new opportunities</span>

          <h1 className="home-name">JAYAMURUGAN V</h1>

          <p className="home-role">
            {typed}
            <span className="typewriter-cursor">|</span>
          </p>

          <p className="home-explain">
            I build scalable, efficient, and user-centered web applications —
            turning ideas into clean, functional systems with modern backend
            technologies and intuitive frontend design.
          </p>

          <div className="home-cta-row">
            <button className="home-btn-primary" onClick={() => navigate("/about")}>
              About Me
            </button>
            <button className="home-btn-secondary" onClick={() => navigate("/contact")}>
              Get In Touch
            </button>
          </div>

          {/* <div className="home-socials">
            <a href="https://www.linkedin.com/in/jayamurugan-v-7a3571269/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Jayamurugan1234" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/jayamurugan__03?utm_source=qr&igsh=MWFlN20wd2dyZjkw" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div> */}
        </div>

        <div className="home-right">
          <div className="home-photo-card">
            <img src="/bg1.png" alt="workspace" />
          </div>

          <span className="home-tech-badge badge-python"><FaPython /> Python</span>
          <span className="home-tech-badge badge-django"><SiDjango /> Django</span>
          <span className="home-tech-badge badge-react"><FaReact /> React</span>
          <span className="home-tech-badge badge-javascript"><SiJavascript /> JavaScript</span>
        </div>

      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span></span>
      </div>
    </div>
  );
}

export default Home;
