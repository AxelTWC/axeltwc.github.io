import React, { useEffect, useState } from "react";
import "./App.css";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const projects = [
    { title: "HumblexMC", description: "Served 50k-100k players globally for 7-8 years.", link: "https://humblex.net" },
    { title: "Coming ML Projects", description: "Resume for now.", link: "https://axeltwc.github.io/AxelTang-Resume.pdf" },
    { title: "UMPLE", description: "Under Professor for his software teaching OOP concepts to millions of NA students.", link: "https://github.com/umple/umple/issues?q=involves%3AAxelTWC+sort%3Acreated-asc+" },
  ];

  const skills = ["Java", "Python", "OpenCV", "GitHub","CI/CD"];

  return (
    <div className="app">
      {/* Floating ML Nodes */}
      <div className="ml-floating-nodes">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="ml-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translate(${mousePos.x * 0.002 * i}px, ${scrollY * 0.01 * i}px)`
            }}
          />
        ))}
      </div>

      {/* Data Stream Lines */}
      <div className="data-streams">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="data-line" style={{ left: `${i * 15 + 5}%`, animationDelay: `${i * 0.5}s` }}></div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section className="hero-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.2 }}>
          Hi, I'm Axel Tang 👋
        </motion.h1>
        <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
          MEng Student @ <span className="gradient-text">UofT</span> | Data Analytics & Machine Learning
        </motion.p>
        <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <a href="mailto:axel.tang@mail.utoronto.ca"><Mail /></a>
          <a href="https://github.com/axeltwc"><Github /></a>
          <a href="https://www.linkedin.com/in/axel-tang-2b22572b6/"><Linkedin /></a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section className="about-section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2>About Me</h2>
        <p>From <span className="highlight gradient-text">8-9 years of studying in Canada</span>, I’ve taken financial responsibility for my family while pursuing my passion for technology.</p>
        <p>Starting my career at 14, I developed a strong foundation in <span className="highlight gradient-text">Software Engineering</span> and <span className="highlight gradient-text">Business Management</span>.</p>
        <p>I fast-tracked my <span className="highlight gradient-text">Bachelor in Computer Science</span> and am now pursuing <span className="highlight gradient-text">Master of Engineering</span> in Data Analytics and Machine Learning at the <span className="highlight gradient-text">University of Toronto</span>.</p>
        <p>Experience with <span className="highlight gradient-text">UMPLE</span> prepared me to tackle large-scale projects and innovate in tech.</p>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="projects-section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.div key={i} className="project-item" whileHover={{ scale: 1.05 }}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer"><button>View Project</button></a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="skills-section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => <span key={skill} className="skill">{skill}</span>)}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="contact-section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2>Get in Touch</h2>
        <p>Looking for Winter 2026 Internship opportunities in Machine Learning.</p>
        <a href="mailto:axeltang@gmail.com"><button className="contact-button">Contact Me</button></a>
      </motion.section>
    </div>
  );
}

export default App;
