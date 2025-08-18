import React, { useEffect, useRef, useState } from "react";

const symbols = ["🤖", "🧠", "📊", "💻", "📈", "🔍", "0", "1"];

export default function ClickMatrixRain() {
  const canvasRef = useRef(null);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 24;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      streams.forEach((stream) => {
        stream.chars.forEach((char, i) => {
          if (i === 0) {
            // glowing head (white)
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
          } else {
            // fading tail (green w/ opacity)
            const opacity = 1 - i / stream.chars.length;
            ctx.fillStyle = `rgba(0, 255, 157, ${opacity})`;
          }

          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(char, stream.x, stream.y + i * fontSize);
        });

        stream.y += stream.speed;

        // remove if off screen
        if (stream.y > canvas.height + stream.chars.length * fontSize) {
          stream.dead = true;
        }
      });

      // clean up finished streams
      setStreams((prev) => prev.filter((s) => !s.dead));
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [streams]);

  useEffect(() => {
    const handleClick = (e) => {
      const newStream = {
        x: e.clientX,
        y: e.clientY,
        chars: Array.from({ length: 15 }, () => symbols[Math.floor(Math.random() * symbols.length)]),
        speed: 5 + Math.random() * 3,
      };
      setStreams((prev) => [...prev, newStream]);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
}
