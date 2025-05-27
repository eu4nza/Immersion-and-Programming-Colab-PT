import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, Compass, Sparkles, Wrench } from "lucide-react";

export default function ScopeSection() {
  return (
    <section
      id="scope"
      className="w-full 2xl:px-24 px-4 2xl:py-24 py-18 h-auto dark:bg-[#191a1f] dark:bg-[url('/images/scope/scope_background_black.svg')] bg-[url('/images/scope/scope_background_white.svg')] bg-top bg-repeat bg-[length:500px_500px]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/scope/scope_icon.svg"
              width="64"
              height="32"
              alt="SCOPE Icon"
              className="w-[32px] lg:w-[48px] 2xl:w-[64px]"
            />
            <p className="text-3xl lg:text-5xl 2xl:text-6xl font-fredoka font-semibold">
              Let’s Start with SCOPE
            </p>
          </div>
          <p className="lg:text-lg 2xl:text-xl">
            Before diving into possible career pathways, it’s important to first
            understand yourself, your interests, strengths, and personality.{" "}
            <br /> That’s where{" "}
            <b>STI Student's Career Opportunity and Personality Evaluator</b> or{" "}
            <b>SCOPE</b> by <b>STI College</b> comes in.
          </p>
          <p className="lg:text-lg 2xl:text-xl">
            <b>SCOPE</b> is a quick and engaging online assessment that helps
            you discover careers and academic tracks that match your
            personality. <br />
            Based on the Holland Code framework, SCOPE provides a personalized
            career planning worksheet in under 15 minutes.
          </p>
          <div className="w-full h-[250px] lg:h-[500px]">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/voFj1NGd1_8"
              title="SCOPE Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/scope/scope_magnify_icon.webp"
              width="64"
              height="32"
              alt="SCOPE Magnify logo"
              className="w-[32px] lg:w-[48px] 2xl:w-[64px]"
            />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-fredoka font-semibold">
              What You Can Do with SCOPE:
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:text-lg 2xl:text-xl">
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
                Philippines, along with the academic programs that lead to them.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Wrench />
              <p>
                <b>Career Toolbox:</b> Access helpful resources such as learning
                style quizzes, life-balance tips, and preparation guides.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Sparkles />
              <p>
                <b>Be Inspired:</b> Read real success stories from STI graduates
                working in various industries.
              </p>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <Link
              href="https://scope.sti.edu"
              target="_blank"
              className="py-3 px-6 rounded-4xl w-max bg-sky-500 font-fredoka font-bold text-lg lg:text-xl 2xl:text-2xl text-white hover:scale-120 transition-all duration-300"
            >
              Start with SCOPE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
