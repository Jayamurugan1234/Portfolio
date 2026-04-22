import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { useNavigate } from "react-router-dom";


function Projects() {
  const navigate = useNavigate();

  const projectData = [
    {
      title: "Dressora",
      desc: "Dressora is a responsive clothing website that offers a seamless shopping experience with modern UI, smooth navigation, product listings, image galleries, and interactive features across all devices.",
      img: "/dressora_1.png",
      code: "https://github.com/Jayamurugan1234/E-commerce",
      live: "https://e-commerce-nine-jet-67.vercel.app"
    },
    {
      title: "Petal Palace",
      desc: "Petal Palace is a beautifully designed floral e-commerce website that offers a wide variety of fresh flowers, bouquets for every occasion. It provides a smooth and user-friendly experience and category-based selection.",
      img: "/petal_1.png",
      code: "https://github.com/Jayamurugan1234/Flower-Boutique",
      live: "https://the-petal-palacee.netlify.app/"
    },
    {
      title: "Contact Manager",
      desc: "Contact Manager is a user-friendly web application designed to store and manage personal or professional contact details efficiently using React and Firebase. The application allows users to add, view, update, and delete contact information such as names, phone numbers, email addresses.",
      img: "/contact_2.png",
      code: "https://github.com/Jayamurugan1234/Contact-Page",
      live: "https://google-contact-project.netlify.app/dashboard"
    },
    {
      title: "Programming-Quizzz",
      desc: "The project is built using HTML, CSS, and JavaScript, focusing on dynamic content handling, event-driven programming, and an engaging user experience. It helps users learn and evaluate their understanding in a fun and interactive way.",
      img: "/quiz_1.png",
      code: "https://github.com/Jayamurugan1234/Programming-Quizz",
      live: "https://programming-quizzzz.netlify.app/"
    },

     {
      title: "Weather API",
      desc: "This is a responsive Weather Dashboard application built using React and OpenWeather API. It allows users to search for any city and view real-time weather information in a simple and interactive interface. The app displays key weather details such as temperature, weather condition, humidity, and wind speed.",
      img: "/weather_1.png",
      code: "https://github.com/Jayamurugan1234/Weather-api",
      live: "https://smart-weather-dashboard-rouge.vercel.app"
    }
  ];

  return (
    <div className="projects">

      <h1 className="projects-title">PROJECTS</h1>

      <p className="projects-intro">
        Here are some of my recent projects showcasing my skills in frontend and backend development.
      </p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <div className="card-content">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="card-buttons">

                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  <SiNetlify /> Live
                </a>

              </div>
            </div>

          </div>
        ))}
      </div>

<button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>
    </div>
  );
}

export default Projects;
