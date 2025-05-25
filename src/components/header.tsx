"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ToggleTheme } from "@/components/ToggleTheme";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "SCOPE", id: "scope" },
    { label: "Pathways", id: "pathways" },
    { label: "Alumni", id: "alumni" },
    { label: "About", id: "about" },
  ];

  const HeaderContent = (
    <div
      className="flex justify-between items-center w-full transition-all duration-300"
      ref={menuRef}
    >
      <Link href="/" className="flex flex-row items-center gap-4">
        <Image
          src="/sti_logo.svg"
          alt="Header Logo"
          width={80}
          height={80}
          priority
        />
        <p className="text-gray-500 dark:text-gray-400 text-3xl font-semibold">
          Career Compass
        </p>
      </Link>

      <div
        className="relative inline-flex justify-center gap-6 text-base font-bold"
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
                dimOthers
                  ? "text-gray-500/50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {item.label}
            </button>
          );
        })}
        <Link
          href="https://sti.edu/admissions_registration.asp"
          target="_blank"
          onMouseEnter={handleMouseLeave}
          className="flex items-center bg-red-600 text-white py-1 px-3 rounded-sm transition-all duration-300 hover:bg-red-700 hover:text-[#0072bc]"
        >
          Apply Now
        </Link>

        <ToggleTheme />
      </div>
    </div>
  );

  return (
    <>
      {/* Spacer to prevent layout shift caused by fixed header */}
      <div className="h-[88px]" />

      {/* Fixed Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 px-96 transition-all duration-100 ease-in-out shadow-md bg-background dark:bg-[#191a1f] ${
          isScrolled ? "py-2" : "py-5"
        }`}
      >
        {HeaderContent}
      </div>
    </>
  );
}
