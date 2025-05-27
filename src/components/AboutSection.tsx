import Image from "next/image";
import Link from "next/link";
import { CircleHelp, Code, Settings } from "lucide-react";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import {
  SiAdobephotoshop,
  SiLucide,
  SiRadixui,
  SiShadcnui,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiVercelFill,
} from "react-icons/ri";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="2xl:px-24 px-4 2xl:py-24 py-18 dark:bg-[#191a1f]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <CircleHelp className="h-10 w-10 lg:h-20 lg:w-20" />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              Why We Built Career Compass
            </p>
          </div>
          <p className="lg:text-lg 2xl:text-xl">
            Choosing a career path can feel overwhelming. <br /> That’s exactly
            why we created Career Compass for STI students like you.
          </p>
          <p className="lg:text-lg 2xl:text-xl">
            Whether you're just starting to explore your interests, want to
            experience real careers through Career Camp, <br /> or need
            inspiration from STI alumni, this platform is your guide.
          </p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Link href="https://alumni.sti.edu/" target="_blank">
              <Image
                src="/images/about/about_banner.webp"
                height="100"
                width="800"
                loading="eager"
                alt="About Banner"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2 lg:text-lg 2xl:text-xl">
            <p className="font-semibold">Career Compass helps you:</p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-xs lg:text-xl">●</p>
              <p>Discover your strengths and preferences through SCOPE</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-xs lg:text-xl">●</p>
              <p>
                Explore real-world careers with hands-on Career Camp experiences
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-xs lg:text-xl">●</p>
              <p>Get inspired by successful STI graduates</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-xs lg:text-xl">●</p>
              <p>Take confident steps toward your future</p>
            </div>
          </div>
          <p className="lg:text-lg 2xl:text-xl font-semibold">
            Your journey doesn't start after college. It starts today.
          </p>
          <div className="flex flex-row items-center gap-2">
            <Code className="h-10 w-10 lg:h-20 lg:w-20" />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              Meet the Developers
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center py-3 lg:py-12 gap-16 text-center lg:text-lg 2xl:text-xl">
            <div className="flex flex-col items-center px-6">
              <Image
                src="/images/about/jhustin_euan_cortez_chua.webp"
                height={250}
                width={250}
                loading="eager"
                alt="Picture of Jhustin Euan C. Chua"
                className="rounded-full object-cover shadow-xl w-[150px] md:[200px] 2xl:w-[250px]"
              />
              <p className="font-semibold mt-4">Front-End Developer</p>
              <p>Jhustin Euan C. Chua</p>
              <p>Senior High School (Grade 12)</p>
              <p>Mobile App and Web Development</p>
              <p>STI College Tagaytay</p>
            </div>
            <div className="flex flex-col items-center px-6">
              <Image
                src="/images/about/sean_geniel_dinglasan_garcia.webp"
                height={250}
                width={250}
                loading="eager"
                alt="Picture of Sean Geniel D. Garcia"
                className="rounded-full object-cover shadow-xl w-[150px] md:[200px] 2xl:w-[250px]"
              />
              <p className="font-semibold mt-4">Back-End Developer</p>
              <p>Sean Geniel D. Garcia</p>
              <p>Senior High School (Grade 12)</p>
              <p>Mobile App and Web Development</p>
              <p>STI College Tagaytay</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Settings className="h-10 w-10 lg:h-20 lg:w-20" />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              Technologies Used
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {/* React */}
            <div className="flex flex-col gap-2 items-center">
              <RiReactjsFill className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">React.js</p>
            </div>

            {/* Next.js */}
            <div className="flex flex-col gap-2 items-center">
              <RiNextjsFill className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Next.js</p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col gap-2 items-center">
              <BiLogoTypescript className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">TypeScript</p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col gap-2 items-center">
              <RiTailwindCssFill className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Tailwind CSS</p>
            </div>

            {/* VS Code */}
            <div className="flex flex-col gap-2 items-center">
              <BiLogoVisualStudio className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">VS Code</p>
            </div>

            {/* Vercel */}
            <div className="flex flex-col gap-2 items-center">
              <RiVercelFill className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Vercel</p>
            </div>

            {/* Photoshop (optional) */}
            <div className="flex flex-col gap-2 items-center">
              <SiAdobephotoshop className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Photoshop</p>
            </div>

            {/* Shadcn UI */}
            <div className="flex flex-col gap-2 items-center">
              <SiShadcnui className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Shadcn UI</p>
            </div>

            {/* Radix UI */}
            <div className="flex flex-col gap-2 items-center">
              <SiRadixui className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Radix UI</p>
            </div>

            {/* Lucide Icons */}
            <div className="flex flex-col gap-2 items-center">
              <SiLucide className="h-8 w-8 2xl:h-16 2xl:w-16" />
              <p className="lg:text-lg 2xl:text-xl">Lucide</p>
            </div>
          </div>
          <p className="lg:text-lg 2xl:text-xl">
            <i>
              Thank you for exploring Career Compass. <br />
              We hope it helps you move forward with confidence.
            </i>
            💙💛
          </p>
        </div>
      </div>
    </section>
  );
}
