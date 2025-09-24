import { useRef, useEffect } from "react";

export default function GradientHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---- DevicePixelRatio scaling (sharper gradients, less banding)
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = (canvas.width = Math.round(window.innerWidth * dpr));
    let height = (canvas.height = Math.round(window.innerHeight * dpr));
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const startColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-gradient-start")
      .trim();
    const middleColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-gradient-middle")
      .trim();
    const endColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-gradient-end")
      .trim();

    let tick = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const speedDivisor = prefersReduced ? 2000 : 500;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // ---- Gradient angle drift
      const angle = Math.sin(tick / speedDivisor) * (Math.PI / 3); // subtle swing
      const x = Math.cos(angle) * width;
      const y = Math.sin(angle) * height;

      const gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, startColor);
      gradient.addColorStop(0.5, middleColor);
      gradient.addColorStop(1, endColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width / dpr, height / dpr);

      tick += 1;
      requestAnimationFrame(draw);
    };

    draw();

    // ---- Handle resize
    const handleResize = () => {
      width = canvas.width = Math.round(window.innerWidth * dpr);
      height = canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scaling
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
}