"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
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
    { label: "Career Camp", id: "career_camp" },
    { label: "Alumni Stories", id: "alumni_stories" },
    { label: "About", id: "about" },
  ];

  return (
    <div className="w-full bg-[#00306e] dark:bg-black text-white/80 text-sm">
      <div className="2xl:px-78 px-4 2xl:pt-16 pt-8 pb-8">
        <div className="flex flex-col 2xl:flex-row gap-12">
          {/* Logo + Description */}
          <div className="flex flex-col gap-6 max-w-lg">
            <Link href="/" className="flex flex-row items-center gap-4">
              <Image
                src="images/logo/sti_logo.svg"
                alt="Header Logo"
                width={80}
                height={80}
                className="sm:w-[80px] w-[60px]"
              />
              <p className="text-gray-500 dark:text-gray-400 sm:text-3xl text-xl font-semibold">
                Career Compass
              </p>
            </Link>
            <p>
              Career Compass is a simple guide that helps students explore
              fields of study, related careers, and average salaries for better
              academic and career planning.
            </p>
            <p>
              <b>Disclaimer:</b> This website is a school project and is not
              affiliated with, endorsed by, or officially connected to STI
              College in any way. All content is created solely for educational
              purposes.
            </p>
          </div>
          <div>
            <p className="py-3 text-lg font-semibold">Navigation</p>
            <div className="flex flex-col justify-start gap-2">
              {navItems.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.id)}
                    className="flex justify-start text-white/80 hover:text-white/100 cursor-pointer"
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Border before copyright, full-width inside content container */}
        <div className="border-t border-white/20 mt-16"></div>

        {/* Copyright */}
        <p className="text-white/50 pt-8">Made with ♥</p>
      </div>
    </div>
  );
}
