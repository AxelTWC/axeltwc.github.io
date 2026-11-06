import { useState, useEffect } from "react";

export default function ResumeSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function handleUnlock() {
    if (password === "ResumeAxel") {
      setUnlocked(true);
    } else {
      alert("Incorrect password");
    }
  }

  useEffect(() => {
    const section = document.getElementById("resume");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const pdfPath = "/resumes/SW_Intern_Resume.pdf";

  return (
    <section id="resume" className={`section-shell reveal ${visible ? "fade-in-up" : ""}`}>
      <div className="section-heading">
        <p className="eyebrow">Credentials</p>
        <h2>Resume</h2>
      </div>
      <div className="resume-card">
        {!unlocked ? (
          <div className="resume-lock">
            <p>Enter password to view or download my resume. Hint: ResumeAxel</p>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="password-input"
            />
            <button type="button" onClick={handleUnlock} className="button button-primary">
              Unlock
            </button>
          </div>
        ) : (
          <div className="resume-content">
            <div className="resume-note">
              <p>
                AI/ML resume is shared directly in conversation. Feel free to ask me for
                it when we connect.
              </p>
            </div>

            <div className="resume-actions">
              <p className="resume-hint">Software Resume (2023)</p>
              <div className="resume-buttons">
                <a href={pdfPath} target="_blank" rel="noreferrer" className="button button-primary">
                  View SW Resume
                </a>
                <a href={pdfPath} download="SW_Intern_Resume.pdf" className="button button-secondary">
                  Download SW Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
