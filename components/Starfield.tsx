"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; base: number; speed: number; phase: number };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number; max: number; len: number };

// Subtle fixed starfield with occasional shooting stars. Purely decorative.
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let shooters: Shooter[] = [];
    let raf = 0;
    let nextShooter = performance.now() + 3000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,
        base: Math.random() * 0.45 + 0.15,
        speed: Math.random() * 0.0015 + 0.0004,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShooter = () => {
      const angle = Math.PI / 5 + Math.random() * 0.25; // heading down-right
      const speed = 9 + Math.random() * 5;
      shooters.push({
        x: Math.random() * w * 0.8,
        y: Math.random() * h * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        max: 55 + Math.random() * 20,
        len: 90 + Math.random() * 70,
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const a = reduceMotion ? s.base : s.base * (0.55 + 0.45 * Math.sin(t * s.speed + s.phase));
        ctx.fillStyle = `rgba(200, 245, 245, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        if (t > nextShooter && shooters.length < 2) {
          spawnShooter();
          nextShooter = t + 3000 + Math.random() * 5000;
        }
        shooters = shooters.filter((s) => s.life < s.max);
        for (const s of shooters) {
          s.x += s.vx;
          s.y += s.vy;
          s.life++;
          const fade = Math.sin((s.life / s.max) * Math.PI);
          const mag = Math.hypot(s.vx, s.vy);
          const tx = s.x - (s.vx / mag) * s.len;
          const ty = s.y - (s.vy / mag) * s.len;
          const g = ctx.createLinearGradient(s.x, s.y, tx, ty);
          g.addColorStop(0, `rgba(0, 221, 213, ${0.85 * fade})`);
          g.addColorStop(1, "rgba(0, 221, 213, 0)");
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.4;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
