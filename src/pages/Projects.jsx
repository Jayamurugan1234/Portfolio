import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Projects() {
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  const projectData = [

    {
      title: "Sellora",
      desc: "Sellora is a full-stack multi-vendor accessories e-commerce platform using Django REST Framework and React  with JWT authentication and role-based access (Customer, Owner, Admin). Built product management, shopping cart, fake payment, and order tracking features stores in PostgreSQL. Integrated Celery, Redis, and Gmail SMTP for automated cart reminders and transactional emails, with a fully responsive custom UI.",
      img: "/sellora.png",
      code: "https://github.com/Jayamurugan1234/Selloraa",
      backendCode: "https://github.com/Jayamurugan1234/Sellora-backend",
      live: "https://selloraa.vercel.app/"
    },


    {
      title: "Musify",
      desc: "Musify a full-stack Spotify-inspired music streaming platform using Django, React, JWT, and PostgreSQL with role-based access for Users, Artists, and Admins. Built a music player featuring play/pause, next/previous, shuffle, repeat, and real-time progress controls. Implemented playlists, liked songs, and a personal library, while Artists manage tracks and Admins oversee content and users. Designed a responsive Spotify-style UI with seamless navigation and secure JWT-based authentication.",
      img: "/musify.png",
      code: "https://github.com/Jayamurugan1234/Musify",
      backendCode: "https://github.com/Jayamurugan1234/Musify-backend",
      live: "https://musify-lyart-ten.vercel.app/"
    },



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
      live: "https://contact-manager-alpha-seven.vercel.app/dashboard"
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className="projects">

      <h1 className="projects-title">PROJECTS</h1>

      <p className="projects-intro">
        Here are some of my recent projects showcasing my skills in frontend and backend development.
      </p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card reveal-item"
            key={index}
            ref={addCardRef}
            style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
          >
            <div className="project-img-wrap">
              <img src={project.img} alt={project.title} />
              <div className="project-img-overlay"></div>
            </div>

            <div className="card-content">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="card-buttons">
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>



                {project.backendCode && (
                  <a href={project.backendCode} target="_blank" rel="noreferrer">
                    <FaGithub /> Backend
                  </a>
                )}


                <a href={project.live} target="_blank" rel="noreferrer">
                  <SiNetlify /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="projects-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>
    </div>
  );
}

export default Projects;
