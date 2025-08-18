import React, { useEffect, useState } from "react";

const EMOJIS = ["🤖","📊","🧠","💻","🔍","📈"]; // Machine Learning themed

export default function ClickFallingEffect() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        speed: 1 + Math.random() * 3,
      };
      setParticles((prev) => [...prev, newParticle]);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, y: p.y + p.speed }))
          .filter((p) => p.y < window.innerHeight + 50)
      );
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            fontSize: "24px",
            pointerEvents: "none",
            userSelect: "none",
            transition: "top 0.016s linear",
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
