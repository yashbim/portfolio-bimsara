"use client";

import { useEffect, useMemo, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

type ParticlesProps = {
  className?: string;
  /** Number of particles at 1280px width; scales with viewport width */
  density?: number;
  /** Max particle size in px */
  maxSize?: number;
  /** Particle color */
  color?: string;
  /** Connect nearby particles with thin lines */
  link?: boolean;
};

export default function Particles({
  className,
  density = 80,
  maxSize = 2.2,
  color = "#94a3b8", // slate-400
  link = true,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const dpiRef = useRef<number>(1);

  const linkDistance = useMemo(() => 120, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      dpiRef.current = Math.min(devicePixelRatio || 1, 2);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      canvas.width = Math.floor(innerWidth * dpiRef.current);
      canvas.height = Math.floor(innerHeight * dpiRef.current);
      ctx.setTransform(dpiRef.current, 0, 0, dpiRef.current, 0, 0);
      seedParticles();
    };

    const seedParticles = () => {
      const width = canvas.clientWidth || window.innerWidth;
      const count = Math.max(20, Math.floor((width / 1280) * density));
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * (canvas.width / dpiRef.current),
          y: Math.random() * (canvas.height / dpiRef.current),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * (maxSize - 0.6) + 0.6,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      particlesRef.current = particles;
    };

    const step = () => {
      const width = canvas.width / dpiRef.current;
      const height = canvas.height / dpiRef.current;
      ctx.clearRect(0, 0, width, height);

      // Draw links first for proper layering
      if (link) {
        ctx.strokeStyle = color;
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const a = particlesRef.current[i];
            const b = particlesRef.current[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.hypot(dx, dy);
            if (dist < linkDistance) {
              const alpha = (1 - dist / linkDistance) * 0.35;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      // Update and draw particles
      ctx.fillStyle = color;
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(step);
    };

    setCanvasSize();
    animationRef.current = requestAnimationFrame(step);

    const resize = () => setCanvasSize();
    window.addEventListener("resize", resize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, link, maxSize, linkDistance]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={
        "pointer-events-none fixed inset-0 -z-10 opacity-60" +
        (className ? ` ${className}` : "")
      }
    />
  );
}


