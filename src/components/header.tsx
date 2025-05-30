"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = id === "home" ? -100 : 0; // Adjust -100 as needed
      const top = section.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top, behavior: "smooth" });
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

      // Automatically close the mobile menu when scrolling
      if (isOpen) {
        // Trigger animate effect before closing
        setAnimate(true);
        setTimeout(() => setAnimate(false), 100);

        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // include isOpen

  const navItems = [
    { label: "Home", id: "home" },
    { label: "SCOPE", id: "scope" },
    { label: "Career Camp", id: "career_camp" },
    { label: "Alumni Stories", id: "alumni_stories" },
    { label: "About", id: "about" },
  ];

  const HeaderContent = (
    <div
      className="flex justify-between items-center max-w-7xl mx-auto"
      ref={menuRef}
    >
      <Link href="/" className="flex items-center">
        <div
          className={`flex flex-row items-center gap-4 transition-all duration-100 origin-left ${
            isScrolled ? "scale-80" : "scale-100"
          }`}
        >
          <Image
            src="images/logo/sti_logo.svg"
            alt="Header Logo"
            width={80}
            height={80}
            priority
            loading="eager"
            className="sm:w-[80px] w-[60px]"
          />
          <p className="text-gray-500 dark:text-gray-400 sm:text-3xl text-xl font-semibold">
            Career Compass
          </p>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-4">
        <div
          className="hidden lg:inline-flex relative justify-center gap-6 text-base font-bold"
          ref={navRef}
          onMouseLeave={handleMouseLeave}
        >
          {/* Hover background */}
          <div
            className="absolute transition-color duration-300 pointer-events-none"
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
        </div>
        <button
          onClick={() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 100);
            setIsOpen(!isOpen);
          }}
          className="lg:hidden flex items-center"
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              animate ? "scale-50" : "scale-100"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </button>

        <ToggleTheme />
      </div>
    </div>
  );

  return (
    <>
      {/* Spacer to prevent layout shift caused by fixed header */}
      <div className="2xl:h-[79px] h-[67px]" />

      {/* Fixed Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 shadow-xl bg-background dark:bg-[#191a1f] 2xl:px-0 px-4 ${
          isScrolled ? "py-1" : "py-4"
        }`}
      >
        {HeaderContent}
      </div>

      {/* Mobile Menu Popup */}
      <div
        className={`
    lg:hidden fixed w-full z-40 bg-background dark:bg-[#191a1f] border-t border-border shadow-xl
   transition-all duration-300 ease-in-out overflow-hidden
    transform
    ${
      isOpen
        ? "max-h-[500px] opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-10"
    }
  `}
        style={{ top: isScrolled ? "43px" : "67px" }}
      >
        <div className="flex flex-col px-4 py-4 space-y-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.id)}
              className="text-left text-gray-500 dark:text-gray-400 text-base font-bold px-2 py-2 rounded-md"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
