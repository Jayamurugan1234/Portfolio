import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-container">

        <div className="home-text">

          <h2>JAYAMURUGAN V</h2>
          <p> I'm a Python FullStack Developer</p>

        </div>
        <p className="home-explain">Hi, I’m Jayamurugan V,  Python Full-Stack Developer with a passion for building scalable, efficient, and user-centered web applications. I love transforming ideas into clean, functional systems using modern backend technologies and intuitive frontend design.</p>
        <button className="about-btn" onClick={() => navigate("/about")}>
          About Me
        </button>





      </div>

       
        {/* <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> <FaArrowUp />

        </button> */}

       
      </div>
    
  );
}

export default Home;