import { useEffect, useRef } from "react";

/**
 * Fundo corporativo fixo em camadas:
 *  1. gradiente radial dourado sutil no topo (assinatura visual da marca)
 *  2. grid técnico esmaecido com máscara radial
 *  3. rede discreta de partículas douradas em canvas
 *  4. vinheta nas bordas
 * Fica atrás de todo o conteúdo e não intercepta cliques.
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    };

    let particles: Particle[] = [];
    let animationFrameId: number;
    let visible = true;

    const GOLD = "49, 100%, 51%";
    const LINK_DISTANCE = 160;

    function getParticleCount() {
      const area = width * height;
      const count = Math.round(area / 26000);
      return Math.max(24, Math.min(count, 80));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getParticleCount();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.4 + 0.8,
      }));
    }

    function drawFrame(advance: boolean) {
      ctx.clearRect(0, 0, width, height);

      if (advance) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(${GOLD}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.shadowBlur = 5;
        ctx.shadowColor = `hsla(${GOLD}, 0.5)`;
        ctx.fillStyle = `hsla(${GOLD}, 0.55)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function step() {
      drawFrame(true);
      if (visible) {
        animationFrameId = requestAnimationFrame(step);
      }
    }

    resize();

    if (prefersReducedMotion) {
      drawFrame(false);
    } else {
      animationFrameId = requestAnimationFrame(step);
    }

    function handleResize() {
      resize();
      if (prefersReducedMotion) {
        drawFrame(false);
      }
    }

    function handleVisibilityChange() {
      visible = document.visibilityState === "visible";
      if (visible && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(step);
      }
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradiente base: preto profundo com leve elevação no topo */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(0_0%_6%)_0%,hsl(0_0%_4%)_35%,hsl(0_0%_3%)_100%)]" />

      {/* Brilho dourado difuso no topo — assinatura da marca */}
      <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[130vw] h-[80vh] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(49_100%_51%/0.10)_0%,hsl(49_100%_51%/0.04)_40%,transparent_70%)] blur-2xl" />

      {/* Brilho secundário discreto à direita, meio da página */}
      <div className="absolute top-[45%] -right-[20%] w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(49_100%_51%/0.05)_0%,transparent_65%)] blur-3xl" />

      {/* Grid técnico com máscara radial (some nas bordas) */}
      <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]" />

      {/* Rede de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 block opacity-80" />

      {/* Vinheta suave nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_60%,hsl(0_0%_2%/0.75)_100%)]" />
    </div>
  );
}
