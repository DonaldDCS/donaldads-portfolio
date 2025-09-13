"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [initialTheme, setInitialTheme] = useState<string | null>(null);

  /*useEffect(() => setMounted(true), []);
  if (!mounted) return null;*/

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && initialTheme === null) {
      const resolvedTheme = theme === "system" ? systemTheme : theme;
      if (resolvedTheme) {
        setInitialTheme(resolvedTheme);
      }
    }
  }, [mounted, theme, systemTheme, initialTheme]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
    setRotated((prev) => !prev);
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        animate={{ rotateY: rotated ? "180deg" : "0deg" }}
        className={`relative grid grid-cols-1 items-center justify-items-center w-10 h-10 rounded-full transition-transform transform-3d perspective-distant ${
          isDark ? "bg-primary/75" : "bg-card"
        }`}
        aria-label="Toggle theme mode"
      >
        <Sun
          size={20}
          className={`absolute text-yellow-400 backface-hidden ${
            initialTheme === "light" ? "rotate-y-0" : "rotate-y-180"
          }`}
        />
        <Moon
          size={20}
          className={`absolute text-purple-400 backface-hidden ${
            initialTheme === "dark" ? "rotate-y-0" : "rotate-y-180"
          }`}
        />
      </motion.button>
    </>
  );
}
