"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <>
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative flex items-center w-14 h-8 rounded-full transition-colors duration-500 ${
        isDark ? "bg-primary/75" : "bg-gray-300"
      }`}
      aria-label="Toggle dark mode"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-400 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <span className="absolute left-2 text-yellow-400">
        <Sun size={16} />
      </span>
      <span className="absolute right-2 text-purple-400">
        <Moon size={16} />
      </span>
    </button>
    </>
  );
}
