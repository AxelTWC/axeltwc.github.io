import React, { useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import './App.css';
import { Briefcase, BookOpen, GraduationCap, Code, Laptop, User } from "lucide-react";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <h1 className="logo">Axel Tang</h1>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">Hi, I’m Axel 👋</h2>
        <p className="hero-text">
          Master of Engineering in Data Analytics and Machine Learning at <span className="highlight">University of Toronto</span>.
          <br></br>
          - Confidence | Resilience | Persistence -
          <br></br> Allow Real Eyes To Realize The Paradise
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about reveal">
        <div className="about-card">
          <div className="about-text">
            <h3>About Me</h3>
            <p>
              I’m Axel Tang, building business and projects since 14. 
              <br>
              </br>I’ve contributed to projects like UMPLE serving millions of NA students 
              <br></br>and was the main force behind HumblexMC serving tens of thousands of players globally. 
              <br></br>I came from humble beginnings, supporting my family and striving for excellence in my studies. 
              <br></br>Originally with a core foundation in computer science, and guided by industrial leaders, being in the same school with AI Pioneers such as Geoffrey Hinton and Ilya Sutskever, I am aiming to expand my knowledge into machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects reveal">
        <h3>Projects</h3>
        <div className="projects-grid">
          <div className="card">
            <h4>HumblexMC</h4>
            <p>Serving 25k+ players, developed a community with focus on quality and performance.</p>
          </div>
          <div className="card">
            <h4>UMPLE Contributions</h4>
            <p>Resolved Java issues, implemented new features, and maintained CI/CD pipelines.</p>
          </div>
          <div className="card">
            <h4>ML Project Coming Soon</h4>
            <p>Coming Soon.</p>
          </div>
          <div className="card">
            <h4>ML Project Coming Soon 2</h4>
            <p>Waiting for a new GPU to run this project.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience reveal">
      <h3>Experience and Timeline</h3>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot blue"></span>
          <div className="timeline-content">
            <Briefcase size={28} className="timeline-icon"/>
            <h4>HumblexMC</h4>
            <p>2015-2016</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot purple"></span>
          <div className="timeline-content">
            <BookOpen size={28} className="timeline-icon"/>
            <h4>Studying abroad</h4>
            <p>2016-2017</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot purple"></span>
          <div className="timeline-content">
            <GraduationCap size={28} className="timeline-icon"/>
            <h4>Undergraduate</h4>
            <p>Accepted to 8 universities</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot purple"></span>
          <div className="timeline-content">
            <Code size={28} className="timeline-icon"/>
            <h4>UMPLE</h4>
            <p>Honors Project with top SWE minds</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot pink"></span>
          <div className="timeline-content">
            <Laptop size={28} className="timeline-icon"/>
            <h4>HKGCC</h4>
            <p>IT Internship including server side and internal tools</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot green"></span>
          <div className="timeline-content">
            <User size={28} className="timeline-icon"/>
            <h4>Student at UofT</h4>
            <p>Currently ongoing</p>
          </div>
        </div>
      </div>
    </section>




      {/* Contact Section */}
      <section id="contact" className="contact reveal">
        <h3>Let’s Connect</h3>
        <p>Interested in collaborating or just want to say hi? Reach out below:</p>
        <div className="contact-links">
          <a href="mailto:axel.tang@mail.utoronto.ca" className="contact-icon"><Mail /></a>
          <a href="https://github.com/axeltwc" target="_blank" rel="noreferrer" className="contact-icon"><Github /></a>
          <a href="https://www.linkedin.com/in/axel-tang-2b22572b6/" target="_blank" rel="noreferrer" className="contact-icon"><Linkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">© {new Date().getFullYear()} Axel Tang. All rights reserved.</footer>
    </div>
  );
}
