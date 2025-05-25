"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ClipboardCheck, Compass, Wrench, Sparkles } from "lucide-react";

export default function Home() {
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
    <main>
      <section
        id="home"
        className="w-full bg-[url('/images/background/home.webp')] bg-no-repeat bg-top bg-cover px-24 py-48"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-4 text-[#0072bc]">
          <p className="text-6xl font-bold">
            Welcome to the STI Career Compass
          </p>
          <p className="text-2xl font-semibold text-black">
            Your guide to discovering the right path for your future.
          </p>
          <p className="text-lg max-w-2xl text-black">
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
      <section
        id="scope"
        className="w-full px-24 py-24 h-auto dark:bg-[url('/images/background/scope_dark.svg')] bg-[url('/images/background/scope.svg')] bg-top bg-repeat bg-[length:500px_500px]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2 text-6xl font-fredoka font-semibold">
              <Image
                src="/images/logo/scope_icon.svg"
                width="64"
                height="32"
                alt="scope logo"
              />
              <p>Let’s Start with</p>
              <p>SCOPE</p>
            </div>
            <p className="text-xl">
              Before diving into possible career pathways, it’s important to
              first understand yourself, your interests, strengths, and
              personality. <br /> That’s where{" "}
              <b>STI Student's Career Opportunity and Personality Evaluator</b>{" "}
              or <b>SCOPE</b> by <b>STI College</b> comes in.
            </p>
            <p className="text-xl">
              <b>SCOPE</b> is a quick and engaging online assessment that helps
              you discover careers and academic tracks that match your
              personality. <br />
              Based on the Holland Code framework, SCOPE provides a personalized
              career planning worksheet in under 15 minutes.
            </p>
            <div className="w-full h-[500]">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/voFj1NGd1_8"
                title="SCOPE Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Should this have a top padding of 24 (pt-24) or not? Ask if it is better or not. */}
            <div className="flex flex-row items-center gap-2 text-6xl font-fredoka font-semibold">
              <Image
                src="/images/logo/scope_magnify_icon.webp"
                width="64"
                height="32"
                alt="scope magnify logo"
              />
              <p>What You Can Do with SCOPE:</p>
            </div>
            <div className="flex flex-col gap-3 text-xl">
              <div className="flex flex-row gap-2">
                <ClipboardCheck />
                <p>
                  <b>Take the Assessment:</b> Answer a few simple questions to
                  find out which career paths align with your personality type.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Compass />
                <p>
                  <b>Explore Careers:</b> Learn about in-demand in the
                  Philippines, along with the academic programs that lead to
                  them.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Wrench />
                <p>
                  <b>Career Toolbox:</b> Access helpful resources such as
                  learning style quizzes, life-balance tips, and preparation
                  guides.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Sparkles />
                <p>
                  <b>Be Inspired:</b> Read real success stories from STI
                  graduates working in various industries.
                </p>
              </div>
            </div>
            <div className="flex justify-center py-6">
              <Link
                href="https://scope.sti.edu"
                target="_blank"
                className="py-3 px-6 rounded-4xl w-max bg-sky-500 font-fredoka font-bold text-2xl text-white hover:scale-120 transition-all duration-300"
              >
                Visit SCOPE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[1080]"></section>
    </main>
  );
}
