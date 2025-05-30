"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIndex(null);
  };

  // Sync state with current theme
  const syncTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);
  };

  // On mount: apply theme
  useEffect(() => {
    syncTheme();

    // Listen to system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        syncTheme(); // Only sync if no user preference
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);

    // Listen to localStorage changes (e.g. in other tabs)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        syncTheme();
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // Handle manual toggle
  const toggleTheme = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);

    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  if (isDarkMode === null) return null;

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={handleMouseLeave}
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
