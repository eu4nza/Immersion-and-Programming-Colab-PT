"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      history.replaceState(null, "", "/");
    }
  };

  const handleNavigation = (id: string) => {
    const isOnHomePage = pathname === "/";
    setIsOpen(false);

    if (!isOnHomePage) {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  const handleHover = (e: React.MouseEvent) => {
    const navRect = navRef.current?.getBoundingClientRect();
    const target = e.currentTarget as HTMLElement;
    const targetRect = target.getBoundingClientRect();

    if (navRect) {
      setHoverStyle({
        left: targetRect.left - navRect.left,
        top: targetRect.top - navRect.top,
        width: targetRect.width,
        height: targetRect.height,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIndex(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        scrollToSection(sectionId);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-[#0072bc] px-24 py-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md ">
      <Link href="/" className="flex flex-row gap-4">
        <Image
          src="/sti_logo.png"
          alt="Header Logo"
          width={80}
          height={80}
          priority
        />
        <p className="text-white text-4xl font-semibold">Career Compass</p>
      </Link>

      <div
        className="relative inline-flex gap-6 text-lg"
        ref={navRef}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover background */}
        <div
          className="absolute transition-all duration-300 pointer-events-none"
          style={{
            ...hoverStyle,
            position: "absolute",
            transitionProperty: "all",
          }}
        />
        {navItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const dimOthers = hoveredIndex !== null && !isHovered;

          return (
            <button
              key={index}
              onClick={() => handleNavigation(item.id)}
              onMouseEnter={(e) => {
                handleHover(e);
                setHoveredIndex(index);
              }}
              className={`relative z-10 px-3 py-2 rounded-xl transition-colors cursor-pointer ${
                dimOthers ? "text-white/50" : "text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
