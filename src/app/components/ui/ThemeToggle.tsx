"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0); // continuous rotation counter

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  function handleClick() {
    setRotation((prev) => prev + 180);
    setTimeout(() => setTheme(isDark ? "light" : "dark"), 200);
  }

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Toggle theme mode"
      className={`relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${
        isDark ? "bg-primary/75" : "bg-card"
      }`}
    >
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
        className="absolute inset-0 h-24 w-24 top-6 -left-6 flex items-center justify-center will-change-transform"
      >
        {/* Sun */}
        <div className="absolute -top-3">
          <span
            className={`absolute -inset-1 rounded-full bg-yellow-400 blur-md transition-opacity duration-500 ${
              !isDark ? "opacity-60" : "opacity-0"
            }`}
          />
          <Sun
            className={`relative w-6 h-6 text-yellow-400 transition-opacity duration-500 ${
              !isDark ? "opacity-100" : "opacity-30"
            }`}
          />
        </div>

        {/* Moon */}
        <div className="absolute top-21">
          <span
            className={`absolute -inset-1 rounded-full bg-purple-400 blur-md transition-opacity duration-500 ${
              isDark ? "opacity-60" : "opacity-0"
            }`}
          />
          <Moon
            className={`relative w-6 h-6 text-purple-400 rotate-180 transition-opacity duration-500 ${
              isDark ? "opacity-100" : "opacity-30"
            }`}
          />
        </div>
      </motion.div>
    </motion.button>
  );
}
