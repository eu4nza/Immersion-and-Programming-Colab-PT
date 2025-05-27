"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // null means not yet initialized
  const [animate, setAnimate] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
  }, []);

  // Apply theme to document and persist it
  useEffect(() => {
    if (isDarkMode === null) return; // Skip until initialized
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);
    setIsDarkMode((prev) => !prev);
  };

  // Avoid showing incorrect icon until theme is determined
  if (isDarkMode === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-8 rounded-full
        flex items-center justify-center
        cursor-pointer
        hover:scale-120
        transition-transform
      `}
    >
      <div
        className={`transition-transform duration-300 ease-in-out ${
          animate ? "scale-50" : "scale-100"
        }`}
      >
        {isDarkMode ? (
          <Moon className="text-white w-6 h-6" />
        ) : (
          <Sun className="text-black w-6 h-6" />
        )}
      </div>
    </button>
  );
}
