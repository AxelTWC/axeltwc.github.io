import React, { useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import './App.css';
import { Briefcase, BookOpen, GraduationCap, Code, Laptop, User } from "lucide-react";
import ClickMatrixRain from "./ClickMatrixRain";

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
      <ClickMatrixRain />
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
        <h2 className="hero-title">Hi, I’m Axel <span className="wave">👋🏻</span></h2>
        <p className="hero-text slide-up">
          Master of Engineering in Data Analytics and Machine Learning at <span className="highlight">University of Toronto</span>.
          <br></br>
          - Confidence | Persistence | Resilience -
          <br></br> Rise And Shine For Your Real Eyes To Realize The Paradise
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn slide-in">Drop A Message</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about reveal">
        <div className="about-card">
          <div className="about-text">
            <h3>About Me</h3>
            <p>
              I’m Axel Tang, building business and projects since 14. 
              <br></br><br></br>I’ve contributed to projects like UMPLE serving millions of NA students and was the main force behind <br></br>HumblexMC serving tens of thousands of players globally meanwhile tried to sustain a 4 year eco-system. 
              <br></br><br></br>I came from humble beginnings, supporting my family by being selfless from a young age <br></br>such as saving up and disconnect from the norm then striving for excellence in my studies. 
              <br></br><br></br>Originally with a core foundation in computer science and a focus of software engineering, <br></br>I was also lucky enough to be guided by industrial leaders about next generation technology.
              <br></br><br></br>Being privilleged to be in the same school with AI Pioneers such as Geoffrey Hinton and Ilya Sutskever. <br></br>I am aiming to expand while honing my knowledge of big data, artifical intelligence and machine learning.<br></br>Needless to say, I foresee myself contributing to the rapid growth of the next state-of-the-art tech revolution.
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
            <p>Serving 25k+ players, developed a community with focus on quality and performance. Learnt business and management along the way.</p>
          </div>
          <div className="card">
            <h4>UMPLE Contributions</h4>
            <p>Resolved UML language issues with Java, implemented new features, and maintained CI/CD pipelines.</p>
          </div>
          <div className="card">
            <h4>ML Project Coming Soon</h4>
            <p>Coming Soon, probably about fingers. Need GPU</p>
          </div>
          <div className="card">
            <h4>ML Project Coming Soon 2</h4>
            <p>Waiting for a new GPU to run this project. Hopefully about face recognition related or healthcare related</p>
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
            <BookOpen size={28} className="timeline-icon"/>
            <h4>Top 5 HK Primary School</h4>
            <p>Met great people , but somehow started to be really shy :P | Rankings were back then</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot blue"></span>
          <div className="timeline-content">
            <Briefcase size={28} className="timeline-icon"/>
            <h4>HumblexMC</h4>
            <p>Started from 2015-2016 when I saw an opportunity with a falling community | Learnt how to business and develop on the way | Sustained from 2016-2024 ish </p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot purple"></span>
          <div className="timeline-content">
            <BookOpen size={28} className="timeline-icon"/>
            <h4>Studying abroad</h4>
            <p>2017 Onward | Manitoba and Ontario | Acquiring provincial merit certicates and more during last year in high school</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot purple"></span>
          <div className="timeline-content">
            <GraduationCap size={28} className="timeline-icon"/>
            <h4>Undergraduate</h4>
            <p>Admitted to all top 8 universities of Canada, Ontario | Risked choices for family and fast track my program</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot purple"></span>
          <div className="timeline-content">
            <Code size={28} className="timeline-icon"/>
            <h4>UMPLE</h4>
            <p>Honors Project with Dr.Lethbridge | Well known SWE OOP Modelling Professor</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot pink"></span>
          <div className="timeline-content">
            <Laptop size={28} className="timeline-icon"/>
            <h4>HKGCC</h4>
            <p>IT Internship including server side(HW) and internal tools(SW with Py and OpenCV)</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot green"></span>
          <div className="timeline-content">
            <User size={28} className="timeline-icon"/>
            <h4>Student at UofT</h4>
            <p>Took a long break from graduation , privileged to meet industrial leaders of big tech , fixed myself and move on. Got lucky to be admitted and currently ongoing | Also loves to chit talk :P </p>
          </div>
        </div>
      </div>
    </section>




      {/* Contact Section */}
      <section id="contact" className="contact reveal">
        <h3>Let’s Connect</h3>
        <p>General enquires or interested in my projects?<br>
        </br>Email below or message on LinkedIn | Come along and say hi <span className="face-wave">🤗</span> !!!</p>
        <div className="contact-links">
          <a href="mailto:axel.tang@mail.utoronto.ca" className="contact-icon"><Mail /></a>
          <a href="https://www.linkedin.com/in/axel-tang-2b22572b6/" target="_blank" rel="noreferrer" className="contact-icon"><Linkedin /></a>
          <a href="https://github.com/axeltwc" target="_blank" rel="noreferrer" className="contact-icon"><Github /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">© {new Date().getFullYear()} Axel Tang. All rights reserved. Credits to LLMs</footer>
    </div>
  );
}
