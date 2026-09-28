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
  Code,
  Laptop,
  User,
  ExternalLink,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import "./App.css";

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
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
    keywords: "UMPLE contributions Java UML software engineering",
  },
  {
    id: "experience",
    title: "Experience & Timeline",
    keywords:
      "school primary UofT university HKGCC internship Fujifilm APAC internship undergraduate Manitoba Ontario high school",
  },
  {
    id: "contact",
    title: "Contact",
    keywords:
      "email LinkedIn GitHub message connect axel.tang@mail.utoronto.ca",
  },
];

const projectCards = [
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
];

const timelineItems = [
  {
    icon: Briefcase,
    title: "Fujifilm BI",
    period: "April 2026 – December 2026",
    status: "AI Engineer (Previously Intern)",
    isActive: true,
    text: "Developed an interactive showroom kiosk for browsing product information and company services. Evaluated standard open-source language models for routine internal document search, tested Haystack and Dify search accuracy, and prepared progress reports and HTML dashboards. Assisted with moving the document retrieval pipeline for commercial printers to a Docker-based stack for scanned PDFs and company information.",
  },
  {
    icon: BookOpen,
    title: "Sky Dream",
    period: "March 2025 – May 2025",
    status: "IT Instructor",
    text: "Taught introductory computer science and programming to elementary and junior school students. Delivered foundational coding lessons at Diocesan Girls' Junior School, Queen Maud, and Wong Cho Bau Elementary.",
  },
  {
    icon: Laptop,
    title: "Hong Kong General Chamber of Commerce",
    period: "July 2024 – August 2024",
    status: "Information Technology Intern – Software Development & Computer Vision",
    text: "Restored Microsoft SQL Server databases and maintained virtual machines using ESXi Host Client. Used FuzzyWuzzy text matching to clean and organize business contact records, updated employee intranet pages with ASP.NET and CSS, and tested Python OpenCV scripts for routine contour-processing automation.",
  },
  {
    icon: Briefcase,
    title: "InteractHealthPro",
    period: "March 2024 – June 2024",
    status: "Software Developer Intern",
    text: "Migrated a CRM platform and rebuilt customer data pipelines, reducing manual data-entry work for a healthcare provider.",
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
    description: "Explore UMPLE Contributions.",
    href: "#projects",
  },
  {
    icon: Briefcase,
    label: "Experience & Timeline",
    description: "View my education and work experience.",
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
          <p className="hero-eyebrow">Student at the University of Toronto</p>
          <h1>Learn about Axel</h1>
          <p className="hero-copy">
            Master of Engineering student in Artificial Intelligence.
          </p>

          <div className="search-section" ref={searchRef}>
            <div className="search-bar" ref={searchBarRef}>
              <Search size={18} className="search-icon" />
              <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search this site"
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
              I'm currently a Master of Engineering student in Artificial Intelligence at the University of Toronto. I created a Minecraft community server at 14. I currently work as an AI Engineer (previously intern) at Fujifilm BI, where I'm developing an AI kiosk to answer customer questions.
            </p>
          </article>

          <section className="update-banner reveal" aria-label="Current status" style={{ marginTop: '14px' }}>
            <p>
              <Zap size={16} /> Current: AI Engineer (Previously Intern) at Fujifilm BI.
              Developing an AI kiosk to answer customer questions.
            </p>
            <a href="#experience">View timeline</a>
          </section>
        </section>

        <section id="projects" className="content-section reveal">
          <div className="section-head">
            <p className="kicker">Documentation</p>
            <h2>Projects</h2>
          </div>
          <div className="card-grid">
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
