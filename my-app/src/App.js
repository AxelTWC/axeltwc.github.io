import React, { useEffect, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import './App.css';
import { Briefcase, BookOpen, GraduationCap, Code, Laptop, User } from "lucide-react";
import ClickMatrixRain from "./ClickMatrixRain";
import { Brain, Activity, Shield } from "lucide-react";
import ResumeSection from "./ResumeSection";
import Lottie from "lottie-react";
import robotAnim from "./assests/robot.json";

export default function App() {
   const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const bounceLoop = () => {
      const delay = Math.random() * 5000 + 2000; // 2–7s random
      setTimeout(() => {
        setIsBouncing(true);

        setTimeout(() => {
          setIsBouncing(false);
          bounceLoop(); // repeat
        }, 800); // bounce duration
      }, delay);
    };

    bounceLoop();
  }, []);

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
        <a href="#statement" className="nav-link">Statement</a>
        <a href="#resume" className="nav-link">Resume</a>   
        <a href="#ai-insight" className="nav-link">AI Insight</a> 
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
          <br></br>--------------------------------------------------
          <br></br><b> To employers: I am currently looking for ML/DL internships. <br></br>Projects will for now be lightweight and limited on this field as I am switching fields. This is why I am willing to take on challenges, I'ma be honest and blunt, I may apply for roles without prior knowledge but would love to use an opportunity to grow with the team too.</b>
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn slide-in">Drop A Message</a>
        </div>
      <div className={`robot-container ${isBouncing ? "bouncing" : ""}`}>
        <div className="robot">
          <Lottie animationData={robotAnim} loop={true} />
        </div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="about reveal">
        <div className="about-card">
          <div className="about-text">
            <h3>About Me</h3>
            <p>
              I’m Axel Tang, building business and projects since 14. 
              <br></br><br></br>I’ve contributed to projects like UMPLE serving millions of NA students and was the main force behind <br></br>HumblexMC serving tens of thousands of players globally meanwhile tried to sustain a 8 year eco-system. 
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
            <p>
            <a 
              href="https://humblex.net" 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
            >
              Visit HumblexMC
            </a>
          </p>
          </div>
          <div className="card">
            <h4>UMPLE Contributions</h4>
            <p>Resolved UML language issues with Java, implemented new features, and maintained CI/CD pipelines.</p>
            <p>
            <a 
              href="https://github.com/umple/umple/issues?q=involves%3AAxelTWC+sort%3Acreated-asc+" 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
            >
              Visit My UMPLE Contributions
            </a>
          </p>
          </div>
          <div className="card">
            <h4>ML/DL Project Coming Soon</h4>
            <p>Waiting for a new GPU to run this project and hopefully can create my own dataset from scratch. For now , trying to create a RPS project while applying for internships. Final Project should be able to fight the computer's RPS.</p>
          <p>
            <a 
              href="https://github.com/AxelTWC/RPS-PJ" 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
            >
              Visit RPS Project
            </a>
          </p>
          </div>
          <div className="card">
            <h4>Others</h4>
            <p>All my previous software background projects are viewable in my github.</p>
            <p>
            <a 
              href="https://github.com/AxelTWC" 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
            >
              Visit My Github
            </a>
          </p>
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
            <p>Took a long break from graduation , privileged to meet industrial leaders of big tech , fixed myself and move on. Got lucky to be admitted and currently ongoing | Also loves to chit chat :P </p>
          </div>
        </div>
      </div>
    </section>

    {/* Statement Section */}
      <section id="statement" className="statement reveal">
        <h3>Personal Statement</h3>
        <p>
          I am born with no technological background, only a PC and a game which led me to open a “studio/service” running for 8 years during my childhood, through it, <b>I learnt that technology is the key to improve the world in a vast ways unimaginable.</b> On top of that, with my medical/nursing background from my parents, I always strive to take care and be concerned about others over myself. 
          <br></br><br></br>
          During my Bachelors Years, I got introduced to AI chatbots, the year which OpenAI publicly released their first model. <b>At that time, I did not have a clue about the topics of artificial intelligence as I was focusing on how to get my family out of financial pressure and doing the "right" thing</b>. Therefore, I wanted to build a career through software, I wasn’t particularly interested in developing websites or front-end related but rather liked working on lower levels such as the source to make a programming language work (Honors Project) or something exciting which could be also seen out of the software spectrum such as robotics or other sorts of engineering tied to SWE (internal tools and much more).
          <br></br><br></br>
          Over the years with one of my relatives working in cutting edge tech and after reading and watching the possibilities of where I could reach myself for, <b>I found out the excitement and imminent advancement of AI aiding the world</b>. Since my emphasis on my Master’s Degree is under Data Analyst and Machine Learning, I view myself as a <b>engineer-doctor-nurse for AI/Machines and hope to either take on roles in training (nurturing machines) or AGI robotics.</b> 
          <br></br><br></br>
          My stance is that I love helping and seeing things work regardless of what they are or who they are. The thrill of success after a long run just excites me a lot. <b>I hope to see more nurses around the world taking care of people in need; and I want to do my part to leverage machines to be able to take care of people who may seem out of reach to me.</b>
          <br></br>
        </p>
      </section>

      {/* Resume Section */}
        <ResumeSection />


      {/* AI Insight Section */}
      <section id="ai-insight" className="ai-insight reveal">
        <h3>AI Insight</h3>
        <p>
          Artificial Intelligence is the next frontier of technology, same as the invention of the internet, smartphone and vehicles. It is transforming industries, enhancing productivity, and reshaping the way we live and work.
          <br></br><br></br>
          Here are some areas I find particularly that I like to discuss on:
          <br></br><br></br>
          (**Also I love you AI companions..hope we can work together xD, yall are my teachers**)
        </p>
        <div className="insight-grid">
          <div className="card">
            <Brain size={40} className="insight-icon" />
            <h4>Healthcare AI</h4>
            <p>
              Coming with a family medical background, although I am not a medical professional, I see the potential of AI in revolutionizing healthcare. From diagnostics to personalized treatment, AI can enhance patient care and outcomes.
            </p>
          </div>
          <div className="card">
            <Activity size={40} className="insight-icon" />
            <h4>AGI & Robotics</h4>
            <p>
              The topic of AGI and Robotics is similar to how cars, internet and smartphones revolutionized the world. It is true that AI adoption could take time, however the current pace of AI is exponentially increasing unlike the development of others; With how it shaped the software industry, I expect that over short periods of time, it will affect other industires too.
              </p>
          </div>
          <div className="card">
            <Shield size={40} className="insight-icon" />
            <h4>Responsible AI</h4>
            <p>
              Although inevitable, ethical implications cannot be ignored. Through attending live talks from Geoffrey Hinton in Toronto, I see the importance of responsible AI development to ensure safety and fairness.
            </p>
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
      <footer className="footer">© {new Date().getFullYear()} Axel Tang. All rights reserved. Credits to LLMs for designing</footer>
    </div>
  );
}
