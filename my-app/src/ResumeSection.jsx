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

  const pdfPath = `/resumes/SW_Intern_Resume.pdf`;

  return (
    <section id="resume" className={`section-shell reveal ${visible ? "fade-in-up" : ""}`}>
      <div className="section-heading">
        <p className="eyebrow">Credentials</p>
        <h2>Resume</h2>
      </div>
      <div className="resume-card">
        {!unlocked ? (
          <div className="resume-lock">
            <p>Enter password to view/download my resume: (ResumeAxel)</p>
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
            <div className="resume-ml-message" style={{ textAlign: "center", marginBottom: "1.5rem", padding: "1rem", borderRadius: "10px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                📋 <strong style={{ color: "var(--text-primary)" }}>AI/ML Resume:</strong> I'd love to share my AI-specific resume in person — feel free to ask me directly!
              </p>
            </div>
            <div className="resume-actions" style={{ flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>⬇️ SW Resume (2023)</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={pdfPath} target="_blank" rel="noreferrer" className="button button-primary">
                  View SW Resume
                </a>
                <a
                  href={pdfPath}
                  download="SW_Intern_Resume.pdf"
                  className="button button-secondary"
                >
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
