import "./Resume.css";
import { useNavigate } from "react-router-dom";

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="resume">

      <h1 className="resume-title">RESUME</h1>

      <p className="resume-intro">
        Hi, I’m Jayamurugan V-a Python Full-Stack Developer with a passion for Motivated and detail-oriented Full-Stack Developer with strong skills forntend in HTML, CSS, JavaScript, and backend in Python Passionate about creating responsive, user-friendly web interfaces and writing clean, efficient code. Eager to learn, grow, and contribute to a dynamic team while delivering high-quality digital experiences.
      </p>

      <div className="timeline">


        <div className="timeline-column">

          <div className="timeline-item">
            <h2>SUMMARY</h2>
            <h3>JAYAMURUGAN V</h3>
            <p>
              Motivated and detail-oriented Python Full-Stack Developer with strong foundations in Python, Django, HTML, CSS, JavaScript, and React. Skilled in building responsive web applications, developing backend logic, and integrating databases.
            </p>
          </div>

          <div className="timeline-item">
            <h2>CONTACT</h2>
            <ul className="timeline-list">
              <li> 9360959559</li>
              <li> jayamuruganvenkatachalam27@gmail.com</li>
              <li> Erode, India</li>
              <li> www.linkedin.com/in/jayamurugan-v-7a3571269</li>
              <li> https://github.com/Jayamurugan1234</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h2>EDUCATION</h2>
            <ul>
              <li>B.E CSE (2021–2025), KSR College of Engineering 2025,CGPA: 7.96%</li>
              <li>HSC (2021), Vani Vidyalaya Matric Higher Secondary School, Percenatge:88%</li>
              <li>SSLC (2019), Vani Vidyalaya Matric Higher Secondary School, Percenatge:89%</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h2>SKILLS</h2>
            <ul>
              <li> Forntend: HTML, CSS, Bootstrap, JavaScript</li>
              <li> Backend: Python</li>
              <li> Libraries: React.js</li>

            </ul>
          </div>

        </div>


        <div className="timeline-column">

          <div className="timeline-item">
            <h2>PROJECT</h2>
            <ul>
              <li>Dressora (E-commerce)</li>
              <p>Dressora is a responsive clothing website built using React, HTML, and CSS, offering a user-friendly shopping experience with product listings and category navigation. It uses Firebase API for data storage and includes interactive features to enhance user engagement.
              </p>

              <li>The Petal Palace (E-commerce)</li>
              <p>Petal Palace is a responsive flower shop web application built with HTML, CSS, and JavaScript. It features organized product categories, an elegant design, and uses a Mock API for data storage, ensuring a smooth and user-friendly experience across devices.</p>

              <li>Contact Manager App</li>
              <p>A user-friendly contact management application built with React, HTML, and CSS that allows users to add, view, edit, and delete contact details with a simple, responsive, and organized interface.
              </p>

              <li>Quiz Hub </li>
              <p>An interactive quiz application built with HTML, CSS, and JavaScript that lets users answer multiple-choice questions and view their final score.</p>
            </ul>
          </div>

          <div className="timeline-item">
            <h2>CO-CURRICULAR</h2>
            <ul>
              <li>Complete the EduSkills Internship in online.</li>
              <li>Complete the ICT Academy Learnathon courses in online.</li>
              <li>Complete the Cloud Computing in NPTEL with the 65%, Introduction to Internet of Things in NPTEL with the 78% and Complete the Compiler Design in NPTEL with the 62%.</li>
            </ul>
          </div>

          {/* <div className="timeline-item">
            <h2>EXTRA-CURRICULAR</h2>
            <ul>
              <li>Mobile Photography Event</li>
            </ul>
          </div> */}

        </div>

      </div>

      <a href="/resume.pdf" download className="download-btn">
        Download Resume
      </a>


      <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>

    </div>
  );
}

export default Resume;
