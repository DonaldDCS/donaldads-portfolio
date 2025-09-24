import { useRef, useEffect } from "react";

export default function GradientHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initial canvas size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Colors pulled from your CSS variables
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Animate the angle slowly
      const angle = Math.sin(tick / 400) * (Math.PI / 3); // oscillates between -π and π
      const x = Math.cos(angle) * width;
      const y = Math.sin(angle) * height;

      const gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, startColor);
      gradient.addColorStop(0.5, middleColor);
      gradient.addColorStop(1, endColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      tick += 1; // speed of drift
      requestAnimationFrame(draw);
    };

    draw();

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }} // keep it behind hero content
    />
  );
}
