import { useEffect, useRef } from "react";

/*
 * Arctic Dawn particle system
 * Light mode: faint drifting sky-blue mist dots on the icy white canvas
 * Dark  mode: subtle cool-blue/indigo floating particles on deep navy
 */
export function StarBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width  = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Particle config — small, slow, airy
    const COUNT = 80;
    type Particle = {
      x: number; y: number;
      r: number;
      vx: number; vy: number;
      a: number;
      // 0 sky-blue | 1 indigo | 2 pale blue
      hue: 0 | 1 | 2;
    };

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x:   Math.random() * w,
      y:   Math.random() * h,
      r:   Math.random() * 2.2 + 0.8,
      vx:  (Math.random() - 0.5) * 0.18,
      vy:  (Math.random() - 0.5) * 0.18,
      a:   Math.random() * 0.45 + 0.10,
      hue: (Math.floor(Math.random() * 3)) as 0 | 1 | 2,
    }));

    const onResize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const isDark = document.documentElement.classList.contains("light");

      // Arctic Dawn palettes
      // Light mode: barely-there mist on the bright canvas
      const lightPalette = [
        "56,189,248",   // sky-400
        "99,102,241",   // indigo-500
        "147,197,253",  // blue-300
      ];
      // Dark mode: cool luminous dots on deep navy
      const darkPalette = [
        "96,165,250",   // blue-400
        "129,140,248",  // indigo-400
        "56,189,248",   // sky-400
      ];
      const palette     = isDark ? darkPalette  : lightPalette;
      const alphaScale  = isDark ? 0.70          : 0.28;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        const col   = palette[p.hue];
        const alpha = p.a * alphaScale;

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${col}, ${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Soft diffuse halo — gives the "mist" feel
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0,   `rgba(${col}, ${alpha * 0.35})`);
        grad.addColorStop(1,   `rgba(${col}, 0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
