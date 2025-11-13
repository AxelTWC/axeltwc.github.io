import { useState, useEffect } from "react";

export default function ResumeSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedResume, setSelectedResume] = useState("ml"); // "ml" or "sw"

  function handleUnlock() {
    if (password === "ResumeAxel") {
      setUnlocked(true);
    } else {
      alert("❌ Incorrect password");
    }
  }

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    const section = document.getElementById("resume");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Root-relative path to public/resumes PDFs
  const pdfPath = `/resumes/${selectedResume === "ml" ? "ML_Intern_Resume.pdf" : "SW_Intern_Resume.pdf"}`;

  return (
    <section id="resume" className={`resume reveal ${visible ? "fade-in-up" : ""}`}>
      <h3>Resume</h3>
      {!unlocked ? (
        <div className="password-container" style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>Enter password to view/download my resume: (ResumeAxel)</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="password-input"
            style={{
              padding: "0.9rem 1rem",
              fontSize: "1rem",
              borderRadius: 50,
              border: "2px solid #8b5cf6",
              outline: "none",
              width: "80%",
              marginBottom: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
          />
          <button onClick={handleUnlock} className="hero-btn slide-in" style={{ marginTop: 0 }}>
            Unlock
          </button>
        </div>
      ) : (
        <div>
          <div className="resume-toggle" style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            <button
              onClick={() => setSelectedResume("ml")}
              className={`hero-btn ${selectedResume === "ml" ? "active" : ""}`}
              style={{ padding: "0.8rem 1.25rem" }}
            >
              AI Specific
            </button>
            <button
              onClick={() => setSelectedResume("sw")}
              className={`hero-btn ${selectedResume === "sw" ? "active" : ""}`}
              style={{ padding: "0.8rem 1.25rem" }}
            >
              SW Specific
            </button>
          </div>
          <div className="resume-buttons" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
            <a href={pdfPath} target="_blank" rel="noreferrer" className="hero-btn slide-in">
              📄 View {selectedResume === "ml" ? "ML" : "SW"} Resume
            </a>
            <a
              href={pdfPath}
              download={selectedResume === "ml" ? "ML_Intern_Resume.pdf" : "SW_Intern_Resume.pdf"}
              className="hero-btn slide-in"
            >
              ⬇️ Download {selectedResume === "ml" ? "ML" : "SW"} Resume
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
