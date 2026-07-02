import React, { useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Briefcase,
  BookOpen,
  GraduationCap,
  Code,
  Laptop,
  User,
  Brain,
  Activity,
  Shield,
  ArrowUpRight,
  Sparkles,
  FileText,
} from "lucide-react";
import "./App.css";
import ClickMatrixRain from "./ClickMatrixRain";
import ResumeSection from "./ResumeSection";
import Lottie from "lottie-react";
import robotAnim from "./assests/robot.json";

const navigationItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Experience", "experience"],
  ["Statement", "statement"],
  ["Resume", "resume"],
  ["AI Insight", "ai-insight"],
  ["Contact", "contact"],
];

const projectCards = [
  {
    title: "HumblexMC",
    copy: [
      "Started when I was 14 years old.",
      "Serving 25k+ players, developed a community with focus on quality and performance. Learnt business and management along the way.",
    ],
    links: [["Visit HumblexMC", "https://humblex.net"]],
  },
  {
    title: "UMPLE Contributions",
    copy: [
      "Honour Bachelor SWE Level Project.",
      "Resolved UML language issues with Java, implemented new features, and maintained CI/CD pipelines.",
    ],
    links: [["Visit My UMPLE Contributions", "https://github.com/umple/umple/issues?q=involves%3AAxelTWC+sort%3Acreated-asc+"]],
  },
  {
    title: "Enhancing Retrieval-Augmented Generation with Adaptive Chunking",
    copy: [
      "University Graded Research Project On Retrieval-Augmented Generation.",
      "Focused on implementing the baseline of the RAG system | Course - Applied Deep Learning",
    ],
    links: [
      ["Visit RAG Project", "https://github.com/AxelTWC/Applied_DeepLearning_Project"],
      [
        "Research Paper Link",
        "https://github.com/AxelTWC/Applied_DeepLearning_Project/blob/main/Group%201%20Final%20Report.pdf",
      ],
    ],
  },
  {
    title: "Coming Soon",
    copy: ["Coming Soon", "Coming Soon"],
    links: [["Coming Soon", "https://comingsoon.com"]],
  },
];

const timelineItems = [
  {
    icon: BookOpen,
    accent: "blue",
    title: "Top 5 HK Primary School",
    period: "Primary Years",
    status: "Foundation",
    text: "Met great people , but somehow started to be really shy :P | Rankings were back then",
  },
  {
    icon: Briefcase,
    accent: "blue",
    title: "HumblexMC",
    period: "2015-2024",
    status: "Builder",
    text: "Started from 2015-2016 when I saw an opportunity with a falling community | Learnt how to business and develop on the way | Sustained from 2016-2024 ish ",
  },
  {
    icon: BookOpen,
    accent: "violet",
    title: "Studying abroad",
    period: "2017 onward",
    status: "Transition",
    text: "2017 Onward | Manitoba and Ontario | Acquiring provincial merit certicates and more during last year in high school",
  },
  {
    icon: GraduationCap,
    accent: "violet",
    title: "Undergraduate",
    period: "Bachelor Phase",
    status: "Milestone",
    text: "Admitted to all top 8 universities of Canada, Ontario | Risked choices for family and fast track my program",
  },
  {
    icon: Code,
    accent: "violet",
    title: "UMPLE",
    period: "Honors Project",
    status: "Engineering",
    text: "Honors Project with Dr.Lethbridge | Well known SWE OOP Modelling Professor",
  },
  {
    icon: Laptop,
    accent: "rose",
    title: "HKGCC",
    period: "Internship Phase",
    status: "IT",
    text: "IT Internship including server side(HW) and internal tools(SW with Py and OpenCV)",
  },
  {
    icon: User,
    accent: "gold",
    title: "Student at UofT",
    period: "Current chapter",
    status: "Graduate School",
    isActive: true,
    text: "Took a long break from graduation , privileged to meet industrial leaders of big tech , fixed myself and move on. Got lucky to be admitted and currently ongoing | Also loves to chit chat :P ",
  },
  {
    icon: Briefcase,
    accent: "rose",
    title: "Fujifilm APAC",
    period: "Current role",
    status: "AI Internship",
    isActive: true,
    text: "Current AI Engineering Internship | Working on AI initiatives while contributing to applied research and engineering efforts.",
  },
];

const insightCards = [
  {
    icon: Brain,
    title: "Healthcare AI",
    text: "Coming with a family medical background, although I am not a medical professional, I see the potential of AI in revolutionizing healthcare. From diagnostics to personalized treatment, AI can enhance patient care and outcomes.",
  },
  {
    icon: Activity,
    title: "AGI & Robotics",
    text: "The topic of AGI and Robotics is similar to how cars, internet and smartphones revolutionized the world. It is true that AI adoption could take time, however the current pace of AI is exponentially increasing unlike the development of others; With how it shaped the software industry, I expect that over short periods of time, it will affect other industires too.",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    text: "Although inevitable, ethical implications cannot be ignored. Through attending live talks from Geoffrey Hinton in Toronto, I see the importance of responsible AI development to ensure safety and fairness.",
  },
  {
    icon: Sparkles,
    title: "AI Productization",
    text: "Beyond capability alone, I am interested in how AI becomes dependable, usable, and truly valuable in real environments. The bridge between research, iteration, and production delivery is where a lot of meaningful engineering happens.",
  },
];

const researchCards = [
  {
    icon: FileText,
    badge: "Featured Paper",
    title: "Enhancing Retrieval-Augmented Generation with Adaptive Chunking",
    text: "A premium spotlight for your graded research work, implementation notes, and future paper releases.",
    links: [
      ["Enter Research Studio", "/research/"],
      ["Open Research Paper", "https://github.com/AxelTWC/Applied_DeepLearning_Project/blob/main/Group%201%20Final%20Report.pdf"],
      ["View Project Repo", "https://github.com/AxelTWC/Applied_DeepLearning_Project"],
    ],
    featured: true,
  },
  {
    icon: Briefcase,
    badge: "Internship Track",
    title: "Fujifilm APAC Research Notes",
    text: "Reserved for internship research papers, deep-dives, and polished technical findings as they become shareable.",
    links: [["Open Internship Track", "/research/#track"]],
  },
  {
    icon: Sparkles,
    badge: "Editorial Space",
    title: "New Horizons Essays",
    text: "A long-form shelf for technical blog posts, experiments, and reflective essays across AI engineering, data systems, and responsible innovation.",
    links: [["Browse Field Journal", "/research/#journal"]],
  },
];

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <ClickMatrixRain />
      <div className="ambient ambient-sun" aria-hidden="true" />
      <div className="ambient ambient-glow" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-container">
          <a href="#top" className="brand-mark" aria-label="Axel Tang home">
            <span className="brand-monogram">AT</span>
            <span className="brand-copy">
              <strong>Axel Tang</strong>
              <span>Master @ University of Toronto </span>
            </span>
          </a>
          <div className="nav-links">
            {navigationItems.map(([label, target]) => (
              <a key={target} href={`#${target}`} className="nav-link">
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top" className="page-shell">
        <section className="hero-section">
          <div className="hero-copy-panel reveal fade-in-up">
            <p className="eyebrow">Personal Site</p>
            <h1 className="hero-title">
              Hi, I’m Axel <span className="wave">👋🏻</span>
            </h1>
            <div className="hero-text">
              <p>
                Master of Engineering in Data Analytics and Machine Learning at <span className="highlight">University of Toronto</span>.
                <br />
                --------------------------------------------------
                <br />
                <b>Current AI Engineering Intern in Fujifilm APAC.</b>
              </p>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Drop A Message
              </a>
              <a href="/research/" className="button button-secondary">
                Explore New Horizons
              </a>
            </div>
          </div>

          <aside className="hero-presence-card reveal">
            <div className="presence-badge">
              <span className="presence-dot" />
              Building across AI, research, and software systems
            </div>
            <div className="robot-stage">
              <Lottie animationData={robotAnim} loop />
            </div>
            <div className="presence-notes">
              <div className="presence-note">
                <span>Current Focus</span>
                <strong>AI Engineering + Applied Research</strong>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section-shell reveal">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>About Me</h2>
          </div>
          <div className="statement-card about-card">
            <p>
              I’m Axel Tang, building business and projects since 14.
              <br />
              <br />I’ve contributed to projects like UMPLE serving millions of NA students and was the main force behind <br />HumblexMC serving tens of thousands of players globally meanwhile tried to sustain a 8 year eco-system.
              <br />
              <br />I came from humble beginnings, supporting my family by being selfless from a young age <br />such as saving up and disconnect from the norm then striving for excellence in my studies.
              <br />
              <br />Originally with a core foundation in computer science and a focus of software engineering, <br />I was also lucky enough to be guided by industrial leaders about next generation technology.
              <br />
              <br />Being privilleged to be in the same school with AI Pioneers such as Geoffrey Hinton and Ilya Sutskever. <br />I am aiming to expand while honing my knowledge of big data, artifical intelligence and machine learning.<br />Needless to say, I foresee myself contributing to the rapid growth of the next state-of-the-art tech revolution.
            </p>
          </div>
        </section>

        <section id="projects" className="section-shell reveal">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>Projects</h2>
            </div>
            <p className="section-caption">Major Contributed Projects.</p>
          </div>
          <div className="projects-grid">
            {projectCards.map((project) => (
              <article key={project.title} className="content-card project-card">
                <h3>{project.title}</h3>
                {project.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="card-links">
                  {project.links.map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="text-link">
                      <span>{label}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="section-shell reveal research-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Research & Insights</p>
              <h2>New Horizons</h2>
            </div>
            <p className="section-caption">A dedicated spotlight for research papers, internship deep-dives, and technical writing.</p>
          </div>
          <div className="research-grid">
            {researchCards.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={`content-card research-card${item.featured ? " featured" : ""}`}>
                  <div className="card-badge-row">
                    <span className="card-badge">{item.badge}</span>
                    <Icon size={20} className="card-symbol" />
                  </div>
                  {item.featured ? <p className="research-feature-kicker">Lead Spotlight</p> : null}
                  {item.featured ? (
                    <div className="research-feature-metric" aria-label="Featured publication metric">
                      <span className="research-feature-metric-label">Featured Publication</span>
                      <strong className="research-feature-metric-value">1 flagship paper</strong>
                    </div>
                  ) : null}
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="card-links">
                    {item.links.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-link"
                      >
                        <span>{label}</span>
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section-shell reveal">
          <div className="section-heading">
            <p className="eyebrow">Timeline</p>
            <h2>Experience and Timeline</h2>
          </div>
          <div className="timeline-grid">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`timeline-card timeline-side-${index % 2 === 0 ? "left" : "right"} accent-${item.accent}${item.isActive ? " is-active" : ""}`}
                >
                  <div className="timeline-card-top">
                    <span className="timeline-accent" aria-hidden="true" />
                    <Icon size={20} className="timeline-icon" />
                  </div>
                  <div className="timeline-meta-row">
                    <span className="timeline-chip timeline-chip-period">{item.period}</span>
                    <span className="timeline-chip timeline-chip-status">{item.status}</span>
                    {item.isActive ? <span className="timeline-chip timeline-chip-active">Active now</span> : null}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="statement" className="section-shell reveal">
          <div className="section-heading">
            <p className="eyebrow">Editorial Note</p>
            <h2>Personal Statement</h2>
          </div>
          <div className="statement-card">
            <p>
              I am born with no technological background, only a PC and a game which led me to open a “studio/service” running for 8 years during my childhood, through it, <b>I learnt that technology is the key to improve the world in a vast ways unimaginable.</b> On top of that, with my medical/nursing background from my parents, I always strive to take care and be concerned about others over myself.
              <br />
              <br />
              During my Bachelors Years, I got introduced to AI chatbots, the year which OpenAI publicly released their first model. <b>At that time, I did not have a clue about the topics of artificial intelligence as I was focusing on how to get my family out of financial pressure and doing the "right" thing</b>. Therefore, I wanted to build a career through software, I wasn’t particularly interested in developing websites or front-end related but rather liked working on lower levels such as the source to make a programming language work (Honors Project) or something exciting which could be also seen out of the software spectrum such as robotics or other sorts of engineering tied to SWE (internal tools and much more).
              <br />
              <br />
              Over the years with one of my relatives working in cutting edge tech and after reading and watching the possibilities of where I could reach myself for, <b>I found out the excitement and imminent advancement of AI aiding the world</b>. Since my emphasis on my Master’s Degree is under Data Analyst and Machine Learning, I view myself as a <b>engineer-doctor-nurse for AI/Machines and hope to either take on roles in training (nurturing machines) or AGI robotics.</b>
              <br />
              <br />
              My stance is that I love helping and seeing things work regardless of what they are or who they are. The thrill of success after a long run just excites me a lot. <b>I hope to see more nurses around the world taking care of people in need; and I want to do my part to leverage machines to be able to take care of people who may seem out of reach to me.</b>
              <br />
            </p>
          </div>
        </section>

        <ResumeSection />

        <section id="ai-insight" className="section-shell reveal">
          <div className="section-heading">
            <p className="eyebrow">Perspective</p>
            <h2>AI Insight</h2>
          </div>
          <div className="insight-intro content-card">
            <p>
              Artificial Intelligence is the next frontier of technology, same as the invention of the internet, smartphone and vehicles. It is transforming industries, enhancing productivity, and reshaping the way we live and work.
              <br />
              <br />
              Here are some areas I find particularly that I like to discuss on:
              <br />
              <br />
            </p>
          </div>
          <div className="insight-grid">
            {insightCards.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="content-card insight-card">
                  <Icon size={28} className="insight-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section-shell reveal">
          <div className="contact-card">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Contact</p>
              <h2>Let’s Connect</h2>
            </div>
            <p className="contact-copy">
              General enquires or interested in my projects?
              <br />
              Email below or message on LinkedIn | Come along and say hi <span className="face-wave">🤗</span> !!!
            </p>
            <div className="contact-links">
              <a href="mailto:axel.tang@mail.utoronto.ca" className="contact-icon" aria-label="Email Axel Tang">
                <Mail />
              </a>
              <a
                href="https://www.linkedin.com/in/axel-tang-2b22572b6/"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
                aria-label="Axel Tang LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/axeltwc"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
                aria-label="Axel Tang GitHub"
              >
                <Github />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Axel Tang. All rights reserved.</footer>
    </div>
  );
}
