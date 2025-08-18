import React, { useEffect, useRef } from "react";

export default function ClickMatrixRain() {
  const canvasRef = useRef(null);
  const streamsRef = useRef([]);

  // matrix-like symbols
  const symbols =
    "アカサタナハマヤラワ0123456789αβΓΔπΣΩЖБДΨψ";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 20;

    function draw() {
      // clear with transparency, not black
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      streamsRef.current.forEach((stream) => {
        stream.chars.forEach((char, i) => {
          const opacity = 1 - i / stream.chars.length;
          ctx.fillStyle =
            i === 0
              ? "rgba(140, 255, 170, 1)" // head glow
              : `rgba(0, 255, 70, ${opacity})`;
          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(char, stream.x, stream.y + i * fontSize);
        });

        stream.y += stream.speed;
      });

      // cleanup old streams
      streamsRef.current = streamsRef.current.filter(
        (s) => s.y < canvas.height + s.chars.length * fontSize * 2
      );

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      // spawn multiple streams near the click
      for (let j = 0; j < 5; j++) {
        const newStream = {
          x: e.clientX + (Math.random() * 40 - 20), // spread horizontally
          y: e.clientY,
          chars: Array.from({ length: 25 }, () =>
            symbols.charAt(Math.floor(Math.random() * symbols.length))
          ),
          speed: 2 + Math.random() * 0.7,
        };
        streamsRef.current.push(newStream);
      }
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
