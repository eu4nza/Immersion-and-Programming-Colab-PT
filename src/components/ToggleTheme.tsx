"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    // trigger scale animation
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-8 rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-in-out
        cursor-pointer
        hover:scale-120
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
