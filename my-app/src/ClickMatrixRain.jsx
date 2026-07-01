import React, { useEffect, useRef } from "react";

export default function ClickMatrixRain() {
  const canvasRef = useRef(null);
  const streamsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const fontSize = 18;
    const palette = [
      "rgba(255, 226, 168, 0.90)",
      "rgba(255, 196, 126, 0.72)",
      "rgba(255, 159, 110, 0.52)",
    ];

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      streamsRef.current.forEach((stream) => {
        stream.chars.forEach((char, index) => {
          const paletteIndex = Math.min(index, palette.length - 1);
          context.fillStyle = palette[paletteIndex];
          context.globalAlpha = Math.max(0, 1 - index / stream.chars.length);
          context.font = `${fontSize}px "Cormorant Garamond", serif`;
          context.fillText(char, stream.x, stream.y + index * fontSize);
        });

        context.globalAlpha = 1;
        stream.y += stream.speed;
      });

      streamsRef.current = streamsRef.current.filter(
        (stream) => stream.y < canvas.height + stream.chars.length * fontSize * 2
      );

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const symbols = "SUNSETGLOW0123456789....";

    const handleClick = (event) => {
      for (let index = 0; index < 4; index += 1) {
        streamsRef.current.push({
          x: event.clientX + (Math.random() * 48 - 24),
          y: event.clientY,
          chars: Array.from({ length: 18 }, () => symbols.charAt(Math.floor(Math.random() * symbols.length))),
          speed: 1.4 + Math.random() * 0.8,
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <canvas ref={canvasRef} className="matrix-overlay" aria-hidden="true" />;
}
