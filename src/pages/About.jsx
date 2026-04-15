import { useEffect, useRef, useState } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const skillsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsRef.current) return;

      const rect = skillsRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;


      if (rect.top < screenHeight - 100 && rect.bottom > 100) {
        setVisible(true);
      } else {

        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about">

      <h1 className="about-title">ABOUT</h1>

      <p className="about-intro">
        Hi, I’m Jayamurugan V-a Python Full-Stack Developer with a passion for building scalable, efficient, and user-centered web applications. I love transforming ideas into clean, functional systems using modern backend technologies and intuitive frontend design.
      </p>

      <div className="about-container">


        <div className="about-image">
          <img src="/profile.png" alt="profile" />
        </div>


        <div className="about-content">

          <h2>Python Full-Stack Developer</h2>

          <p className="job-explain">
            I am a dedicated Python Full-Stack Developer with a strong focus on building scalable backend systems and modern, intuitive user interfaces. I enjoy transforming ideas into fully functional applications using clean architecture, efficient code, and reliable development practices. My work spans backend APIs, database design, frontend development, and deployment pipelines.
          </p>


          <div className="bio-data">

            <div className="bio-item">
              <strong>Birthday:</strong> <span>27/11/2003</span>
            </div>

            <div className="bio-item">
              <strong>Phone:</strong> <span>+91 9360959559</span>
            </div>

            <div className="bio-item">
              <strong>City:</strong> <span>Erode, India</span>
            </div>

            <div className="bio-item">
              <strong>Degree:</strong> <span>BE, Computer Science and Engineering</span>
            </div>

            <div className="bio-item">
              <strong>Email:</strong> <span>jayamuruganvenkatachalam27@gmail.com</span>
            </div>

            <div className="bio-item">
              <strong>Paased Out:</strong> <span>2025</span>
            </div>

          </div>


          <h2 className="skills-title">SKILLS</h2>

          <p className="skills-desc">
            I specialize in building scalable backend applications using Python frameworks like Django. I create clean, responsive frontends with HTML, CSS, JavaScript, and React. I create clean, responsive backends with Python. I follow best coding practices, write tests, and ensure smooth integration across the full development lifecycle.
          </p>

          <div className="skills-container" ref={skillsRef}>


            {/* <div className="skills-column">

              <div className="skill">
                <div className="skill-header">
                  <span>HTML</span>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${visible ? "html" : ""}`}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-header">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${visible ? "css" : ""}`}></div>
                </div>
              </div>

            </div>


            <div className="skills-column">

              <div className="skill">
                <div className="skill-header">
                  <span>Bootstrap</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${visible ? "bootstrap" : ""}`}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-header">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${visible ? "js" : ""}`}></div>
                </div>
              </div>




            </div>


            <div className="skills-column">
              <div className="skill">
                <div className="skill-header">
                  <span>React</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${visible ? "js" : ""}`}></div>
                </div>
              </div>


              <div className="skill">
                <div className="skill-header">
                  <span>Python</span>
                  <span>83%</span>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${visible ? "js" : ""}`}></div>
                </div>
              </div>
            </div>

          </div> */}






            <div className="skill">
              <div className="skill-header">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${visible ? "html" : ""}`}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${visible ? "css" : ""}`}></div>
              </div>
            </div>






            <div className="skill">
              <div className="skill-header">
                <span>Bootstrap</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${visible ? "bootstrap" : ""}`}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${visible ? "js" : ""}`}></div>
              </div>
            </div>








            <div className="skill">
              <div className="skill-header">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${visible ? "js" : ""}`}></div>
              </div>
            </div>


            <div className="skill">
              <div className="skill-header">
                <span>Python</span>
                <span>83%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${visible ? "js" : ""}`}></div>
              </div>
            </div>
          </div>




        </div>
      </div>

      <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>


    </div>

  );
}

export default About;