import React, { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Mail,
  Github,
  Linkedin,
  Search,
  ChevronRight,
  Briefcase,
  BookOpen,
  GraduationCap,
  Code,
  Laptop,
  User,
  Brain,
  Activity,
  Shield,
  Sparkles,
  ExternalLink,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import "./App.css";
import ResumeSection from "./ResumeSection";

const navItems = [
  ["About", "about"],
  ["Research", "research"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Statement", "statement"],
  ["Resume", "resume"],
  ["AI Insight", "ai-insight"],
  ["Contact", "contact"],
];

const searchIndex = [
  {
    id: "about",
    title: "About Me",
    keywords:
      "background journey bio story UMPLE HumblexMC Geoffrey Hinton Ilya Sutskever UofT university",
  },
  {
    id: "projects",
    title: "Projects",
    keywords:
      "HumblexMC Minecraft server UMPLE umple RAG retrieval augmented generation adaptive chunking deep learning",
  },
  {
    id: "experience",
    title: "Experience & Timeline",
    keywords:
      "school primary UofT university HKGCC internship Fujifilm APAC internship undergraduate Manitoba Ontario high school",
  },
  {
    id: "statement",
    title: "Personal Statement",
    keywords:
      "philosophy background vision story nursing medical AI AGI robotics engineer doctor nurse",
  },
  {
    id: "resume",
    title: "Resume",
    keywords: "download view ML SW resume CV password protected",
  },
  {
    id: "ai-insight",
    title: "AI Insight",
    keywords:
      "healthcare AI AGI robotics responsible ethics Geoffrey Hinton",
  },
  {
    id: "contact",
    title: "Contact",
    keywords:
      "email LinkedIn GitHub message connect axel.tang@mail.utoronto.ca",
  },
  {
    id: "research",
    title: "Research Hub",
    keywords: "papers research publications technical essays deep dives",
    href: "https://axeltang.me/research",
  },
];

const projectCards = [
  {
    title: "HumblexMC",
    desc: "Started when I was 14 years old. Serving 25k+ players, developed a community with focus on quality and performance. Learnt business and management along the way.",
    links: [["Visit HumblexMC", "https://humblex.net"]],
  },
  {
    title: "UMPLE Contributions",
    desc: "Honour Bachelor SWE Level Project. Resolved UML language issues with Java, implemented new features, and maintained CI/CD pipelines.",
    links: [
      [
        "Visit My UMPLE Contributions",
        "https://github.com/umple/umple/issues?q=involves%3AAxelTWC+sort%3Acreated-asc+",
      ],
    ],
  },
  {
    title: "Enhancing Retrieval-Augmented Generation with Adaptive Chunking",
    desc: "University graded research project on retrieval-augmented generation. Focused on implementing the baseline of the RAG system. Course: Applied Deep Learning.",
    links: [
      [
        "Visit RAG Project",
        "https://github.com/AxelTWC/Applied_DeepLearning_Project",
      ],
      [
        "Research Paper Link",
        "https://github.com/AxelTWC/Applied_DeepLearning_Project/blob/main/Group%201%20Final%20Report.pdf",
      ],
    ],
  },
  {
    title: "More Projects Coming Soon",
    desc: "Stay tuned for more projects and contributions.",
    links: [],
  },
];

const timelineItems = [
  {
    icon: BookOpen,
    title: "Top 5 HK Primary School",
    period: "Primary Years",
    status: "Foundation",
    text: "Met great people, then became very shy. Rankings were back then.",
  },
  {
    icon: Briefcase,
    title: "HumblexMC",
    period: "2015-2024",
    status: "Builder",
    text: "Built and sustained an ecosystem over multiple years while learning product, operations, and technical ownership.",
  },
  {
    icon: BookOpen,
    title: "Studying Abroad",
    period: "2017 onward",
    status: "Transition",
    text: "Moved through Manitoba and Ontario, earning provincial merit certificates in high school.",
  },
  {
    icon: GraduationCap,
    title: "Undergraduate",
    period: "Bachelor Phase",
    status: "Milestone",
    text: "Admitted to top Canadian universities and chose a path that balanced family priorities and progression.",
  },
  {
    icon: Code,
    title: "UMPLE",
    period: "Honors Project",
    status: "Engineering",
    text: "Worked on honors SWE modeling initiatives with Dr. Lethbridge, improving language and tooling quality.",
  },
  {
    icon: Laptop,
    title: "HKGCC",
    period: "Internship Phase",
    status: "IT",
    text: "Supported server-side infrastructure and internal software tooling using Python and OpenCV.",
  },
  {
    icon: User,
    title: "Student at UofT",
    period: "Current chapter",
    status: "Graduate School",
    isPartiallyActive: true,
    text: "After a long break from graduation, rebuilt momentum and moved forward with clearer goals.",
  },
  {
    icon: Briefcase,
    title: "Fujifilm BI",
    period: "Current",
    status: "AI Internship",
    isActive: true,
    text: "Currently doing AI Internship at Fujifilm BI, building practical AI solutions and research-driven workflows.",
  },
];

const insightCards = [
  {
    icon: Brain,
    title: "Healthcare AI",
    text: "With a family medical background, I see AI as a multiplier for diagnostics, triage, and personalized care at scale.",
  },
  {
    icon: Activity,
    title: "AGI & Robotics",
    text: "AGI and robotics feel like foundational shifts, similar to the arrival of the internet and smartphones.",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    text: "Ethics, safety, and fairness are first-order concerns, not afterthoughts, in practical AI deployment.",
  },
  {
    icon: Sparkles,
    title: "AI Productization",
    text: "Meaningful impact comes from bridging research ideas into dependable, usable products in real environments.",
  },
];

const exploreCards = [
  {
    icon: User,
    label: "About Me",
    description: "Learn about my background, journey, and what drives me.",
    href: "#about",
  },
  {
    icon: Code,
    label: "Projects",
    description: "Explore HumblexMC, UMPLE, RAG research, and current work.",
    href: "#projects",
  },
  {
    icon: Briefcase,
    label: "Experience & Timeline",
    description: "From early school years to UofT and AI internships.",
    href: "#experience",
  },
];

const toneCycle = ["blue", "purple", "cyan", "emerald", "amber", "pink"];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("theme") === "light");
  const searchRef = useRef(null);
  const searchBarRef = useRef(null);
  const inputRef = useRef(null);

  const toggleTheme = useCallback(() => {
    setLightMode((prev) => !prev);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", lightMode);
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  const performSearch = useCallback((query) => {
    const q = query.toLowerCase().trim();
    if (!q) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
      )
      .slice(0, 6);

    setSearchResults(results);
    setShowResults(results.length > 0);
  }, []);

  const updateDropdownPosition = useCallback(() => {
    if (searchBarRef.current) {
      const rect = searchBarRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed",
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
      });
    }
  }, []);

  useEffect(() => {
    performSearch(searchQuery);
    if (searchQuery.trim()) {
      updateDropdownPosition();
    }
  }, [searchQuery, performSearch, updateDropdownPosition]);

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!showResults) return;
    const handleMove = () => updateDropdownPosition();
    window.addEventListener("scroll", handleMove, true);
    window.addEventListener("resize", handleMove);
    return () => {
      window.removeEventListener("scroll", handleMove, true);
      window.removeEventListener("resize", handleMove);
    };
  }, [showResults, updateDropdownPosition]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (result) => {
    setShowResults(false);
    setSearchQuery("");

    if (result.href) {
      window.location.href = result.href;
      return;
    }

    const element = document.getElementById(result.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className={`app${lightMode ? " light-mode" : ""}`} id="top">
      <header className="site-header">
        <nav className="site-nav">
          <a href="#top" className="brand">Axel Tang</a>
          <div className="site-nav-actions">
            <div className="site-nav-links">
              {navItems.map(([label, target]) => (
                <a
                  key={label}
                  href={target.startsWith("/") ? target : `#${target}`}
                  className="site-nav-link"
                >
                  {label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            >
              {lightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </nav>
      </header>

      <main className="page">
        <section className="hero-panel reveal">
          <div className="hero-aura" aria-hidden="true">
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />
            <div className="hero-grid" />
          </div>
          <div className="hero-content">
          <p className="hero-eyebrow">Building durable systems, practical AI products, and research-backed workflows.</p>
          <h1>Learn about Axel</h1>
          <p className="hero-copy">
            MEng in AI <strong>@University of Toronto.</strong><br />
            Rise And Shine For Your Real Eyes To Realize The Paradise
          </p>

          <div className="search-section" ref={searchRef}>
            <div className="search-bar" ref={searchBarRef}>
              <Search size={18} className="search-icon" />
              <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search this portfolio knowledge base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="search-kbd">Ctrl/⌘ + K</kbd>
            </div>
            {showResults &&
              createPortal(
                <div className="search-dropdown" style={dropdownStyle}>
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      className="search-result"
                      onClick={() => handleSelect(result)}
                    >
                      <span>{result.title}</span>
                      <ChevronRight size={14} />
                    </button>
                  ))}
                </div>,
                document.body
              )}
          </div>

          <div className="hero-meta">
            <span>Confidence</span>
            <span>Persistence</span>
            <span>Resilience</span>
          </div>
          </div>
        </section>

        <section className="help-grid reveal" aria-label="How can I help">
          <div className="section-head">
            <h2>How can I help?</h2>
          </div>
          <div className="card-grid three-up">
            {exploreCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className={`doc-card quick-link tone-${toneCycle[index % toneCycle.length]}`}>
                  <span className="icon-pill">
                    <Icon size={20} />
                  </span>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <span className="inline-link">Open section <ChevronRight size={14} /></span>
                </a>
              );
            })}
          </div>
        </section>

        <section id="about" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Profile</p>
            <h2>About Me</h2>
          </div>
          <article className="doc-card prose-card">
            <p>
              I'm Axel Tang, <strong>building business and projects since 14</strong>.
            </p>
            <p>
              I've contributed to projects like <strong>UMPLE serving millions of NA students</strong> and was the main force behind
              <strong> HumblexMC serving tens of thousands of players globally</strong> while trying to sustain an <strong>8-year ecosystem</strong>.
            </p>
            <p>
              I came from humble beginnings, supporting my family by being selfless from a young age,
              such as saving up and disconnecting from the norm, then striving for excellence in my studies.
            </p>
            <p>
              Originally with a core foundation in computer science and a focus on software engineering,
              I was also lucky enough to be guided by industrial leaders about <strong>next-generation technology</strong>.
            </p>
            <p>
              Being privileged to be in the same school with AI pioneers such as <strong>Geoffrey Hinton</strong> and <strong>Ilya Sutskever</strong>,
              I am aiming to expand while honing my knowledge of <strong>big data, artificial intelligence, and machine learning</strong>.
              Needless to say, I foresee myself contributing to the rapid growth of the <strong>next state-of-the-art tech revolution</strong>.
            </p>
          </article>

          <section className="update-banner reveal" aria-label="Current status" style={{ marginTop: '14px' }}>
            <p>
              <Zap size={16} /> Current: AI Engineering Intern at Fujifilm APAC.
              Building the next generation of AI solutions.
            </p>
            <a href="#experience">View timeline</a>
          </section>
        </section>

        <section id="research" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Research</p>
            <h2>Research and Internship Work</h2>
          </div>
          <article className="doc-card highlight-card tone-blue research-spotlight">
            <div className="research-spotlight-grid">
              <div className="research-main">
                <p className="research-badge">Featured Spotlight</p>
                <h3>Custom RAG Pipeline at Fujifilm APAC</h3>
                <p>
                  Built a Haystack-based pipeline with parent-child chunking, adaptive
                  chunking, metadata, and hybrid reranking to outperform an internal Dify
                  baseline while preserving retrieval quality.
                </p>
                <div className="research-tags" aria-label="Research stack">
                  <span>Haystack</span>
                  <span>Hybrid Reranking</span>
                  <span>Parent-Child Chunking</span>
                </div>
                <a href="https://axeltang.me/research" className="research-link">
                  Explore full research hub <ChevronRight size={16} />
                </a>
              </div>

              <aside className="research-kpi" aria-label="Key impact">
                <p className="research-kpi-label">Measured Gain</p>
                <p className="research-kpi-value">25x</p>
                <p className="research-kpi-note">faster on GPU with comparable BGE reranker quality</p>
              </aside>
            </div>
          </article>
        </section>

        <section id="projects" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Documentation</p>
            <h2>Projects</h2>
          </div>
          <div className="card-grid two-up">
            {projectCards.map((project, index) => (
              <article key={project.title} className={`doc-card tone-${toneCycle[index % toneCycle.length]}`}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.links.length > 0 && (
                  <div className="link-list">
                    {project.links.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-link"
                      >
                        {label} <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">History</p>
            <h2>Experience Timeline</h2>
          </div>
          <div className="timeline-list">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`doc-card timeline-entry tone-${toneCycle[index % toneCycle.length]}${item.isActive ? " active" : ""}${item.isPartiallyActive ? " partial" : ""}`}
                >
                  <div className="timeline-top">
                    <span className="icon-pill">
                      <Icon size={16} />
                    </span>
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                      <span>{item.status}</span>
                      {item.isActive && <span>Active now</span>}
                      {item.isPartiallyActive && <span>In Progress</span>}
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="statement" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Personal</p>
            <h2>Personal Statement</h2>
          </div>
          <article className="doc-card prose-card tone-purple">
            <p>
              I am born with no technological background, only a PC and a game which led me to open a
              "studio/service" running for 8 years during my childhood. Through it, <strong>I learnt that
              technology is the key to improve the world in vast ways unimaginable.</strong> On top of that,
              with my medical/nursing background from my parents, I always strive to take care and be
              concerned about others over myself.
            </p>
            <p>
              During my Bachelors Years, I got introduced to AI chatbots, the year which OpenAI publicly
              released their first model. <strong>At that time, I did not have a clue about the topics of
              artificial intelligence</strong> as I was focusing on how to get my family out of financial
              pressure and doing the "right" thing. Therefore, I wanted to build a career through software;
              I wasn't particularly interested in developing websites or front-end related but rather liked
              working on lower levels such as the source to make a programming language work (Honors Project)
              or something exciting which could be also seen out of the software spectrum such as robotics
              or other sorts of engineering tied to SWE (internal tools and much more).
            </p>
            <p>
              Over the years with one of my relatives working in cutting edge tech and after reading and
              watching the possibilities of where I could reach myself for, <strong>I found out the excitement
              and imminent advancement of AI aiding the world.</strong> Since my emphasis on my Master's Degree
              is under Data Analyst and Machine Learning, I view myself as an <strong>engineer-doctor-nurse
              for AI/Machines</strong> and hope to either take on roles in training (nurturing machines)
              or AGI robotics.
            </p>
            <p>
              My stance is that I love helping and seeing things work regardless of what they are or who they
              are. The thrill of success after a long run just excites me a lot. <strong>I hope to see more
              nurses around the world taking care of people in need; and I want to do my part to leverage
              machines to be able to take care of people who may seem out of reach to me.</strong>
            </p>
          </article>
        </section>

        <ResumeSection />

        <section id="ai-insight" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Perspectives</p>
            <h2>AI Insight</h2>
          </div>
          <div className="card-grid two-up">
            {insightCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={`doc-card tone-${toneCycle[index % toneCycle.length]}`}>
                  <span className="icon-pill">
                    <Icon size={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Contact</p>
            <h2>Let's Connect</h2>
          </div>
          <article className="doc-card contact-card tone-cyan">
            <p>
              General enquiries or collaboration ideas.
              Reach out by email or connect on LinkedIn and GitHub.
            </p>
            <div className="contact-links">
              <a
                href="mailto:axel.tang@mail.utoronto.ca"
                className="contact-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/axel-tang-2b22572b6/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/axeltwc"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Axel Tang. All rights reserved.</p>
      </footer>
    </div>
  );
}
