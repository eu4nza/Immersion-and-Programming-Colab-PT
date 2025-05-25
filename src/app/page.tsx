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
        className="w-full px-24 py-24 h-auto dark:bg-[url('/images/scope/scope_background_black.svg')] bg-[url('/images/scope/scope_background_white.svg')] bg-top bg-repeat bg-[length:500px_500px]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2 text-6xl font-fredoka font-semibold">
              <Image
                src="/images/scope/scope_icon.svg"
                width="64"
                height="32"
                alt="SCOPE Icon"
              />
              <p>Let’s Start with SCOPE</p>
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
                src="/images/scope/scope_magnify_icon.webp"
                width="64"
                height="32"
                alt="SCOPE Magnify logo"
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
                Visit SCOPE Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="career_camp"
        className="w-full px-24 py-24 min-h-screen bg-[url('/images/career_camp/career_camp_background.webp')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto bg-background px-12 py-12 rounded-xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2 text-6xl font-fredoka font-semibold">
              <Image
                src="/images/career_camp/career_camp_logo.webp"
                width="128"
                height="32"
                alt="Career Camp logo"
              />
              <p>Next Stop: Career Camp</p>
            </div>
            <p className="text-xl">
              You’ve explored yourself with <b>SCOPE</b>. <br /> Now it’s time
              to explore the real world.
            </p>
            <p className="text-xl">
              STI’s <b>Career Camp</b> gives you hands-on, immersive experiences
              that simulate real careers <br /> so you can make smarter, more
              confident choices for your future.
            </p>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Link
                href="https://www.sti.edu/newsarticledetail1.asp?i=Mzgw&p=bWFrZV90aGVfcmlnaHRfY2hvaWNlX3dpdGhfc3RpX2NhcmVlcl9jYW1w"
                target="_blank"
              >
                <Image
                  src="/images/career_camp/career_camp_header.jpg"
                  height="100"
                  width="900"
                  alt="Career Camp Header"
                />
              </Link>
              <Link
                href="https://www.sti.edu/newsarticledetail1.asp?i=Mzgw&p=bWFrZV90aGVfcmlnaHRfY2hvaWNlX3dpdGhfc3RpX2NhcmVlcl9jYW1w"
                target="_blank"
                className="underline"
              >
                Visit the Article
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2 text-6xl font-fredoka font-semibold">
              <Image
                src="/images/career_camp/career_camp_camps.webp"
                height="64"
                width="128"
                alt="SCOPE Magnify logo"
              />
              <p>What You Can Do with Career Camp:</p>
            </div>
            <div className="flex flex-col gap-3 text-xl">
              <div className="flex flex-row gap-2">
                <>
                  {/* Light mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_bakers_black.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Bakers (Black)"
                    className="block dark:hidden"
                  />

                  {/* Dark mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_bakers_white.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Bakers (White)"
                    className="hidden dark:block"
                  />
                </>
                <p>
                  <b>Bake and Decorate:</b> Create delicious pastries while
                  exploring basic baking techniques and design.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <>
                  {/* Light mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_gamedev_black.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Game Dev (Black)"
                    className="block dark:hidden"
                  />

                  {/* Dark mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_gamedev_white.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Game Dev (White)"
                    className="hidden dark:block"
                  />
                </>
                <p>
                  <b>Develop a Game:</b> Try coding, game design, and
                  storytelling using beginner-friendly tools and software.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <>
                  {/* Light mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_photographer_black.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Game Dev (Black)"
                    className="block dark:hidden"
                  />

                  {/* Dark mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_photographer_white.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Photographer (White)"
                    className="hidden dark:block"
                  />
                </>
                <p>
                  <b>Shoot with Your Phone:</b> Capture and edit eye-catching
                  photos using your mobile device and creative techniques.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <>
                  {/* Light mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_entrep_black.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Entrepreneur (Black)"
                    className="block dark:hidden"
                  />

                  {/* Dark mode icon */}
                  <Image
                    src="/images/career_camp/career_camp_icon_entrep_white.webp"
                    height="24"
                    width="24"
                    alt="Career Camp Icon Entrepreneur (White)"
                    className="hidden dark:block"
                  />
                </>
                <p>
                  <b>Start a Business:</b> Build a business idea, create a basic
                  plan, and pitch it like a young entrepreneur.
                </p>
              </div>
              <div className="flex justify-center py-6">
                <Link
                  href="https://scope.sti.edu/careercamp23.asp"
                  target="_blank"
                  className="py-3 px-6 rounded-4xl w-max bg-yellow-400 font-fredoka font-bold text-2xl text-black hover:scale-120 transition-all duration-300"
                >
                  Visit Career Camp Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alumni_stories" className="h-[1080] py-24 px-24">
        {" "}
        Alumni Stories Section (Unfinished){" "}
      </section>
      <section id="about" className="h-[1080] py-24 px-24">
        {" "}
        About Section (Unfinished){" "}
      </section>
    </main>
  );
}
