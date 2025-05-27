import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function HomeSection() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <section
      id="home"
      className="w-full bg-[url('/images/home/home_mobile_background.webp')] xl:bg-[url('/images/home/home_desktop_background.webp')] bg-no-repeat bg-center lg:bg-top bg-cover px-6 lg:px-24 py-16 lg:py-48 transition-all duration-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-4 text-[#0072bc]">
        <p className="text-4xl lg:text-5xl 2xl:text-6xl font-bold">
          Welcome to the STI Career Compass
        </p>
        <p className="text-xl md:text-2xl font-semibold text-black">
          Your guide to discovering the right path for your future.
        </p>
        <p className="text-base md:text-lg max-w-2xl text-black">
          Whether you’re exploring career options, preparing for your
          internship, or getting ready for your first job, this site will help
          you take the next step with confidence.
        </p>
        <button
          onClick={() => handleNavigation("scope")}
          className="bg-[#fff200] text-[#0072bc] py-3 px-6 rounded-sm w-max hover:bg-[#0072bc] hover:text-[#fff200] font-semibold transition-all duration-300 shadow-lg cursor-pointer"
        >
          Start Now
        </button>
      </div>
    </section>
  );
}
