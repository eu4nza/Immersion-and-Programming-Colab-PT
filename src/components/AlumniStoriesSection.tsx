import Image from "next/image";
import Link from "next/link";
import { GraduationCap, UsersRound } from "lucide-react";

export default function AlumniStoriesSection() {
  return (
    <section
      id="alumni_stories"
      className="2xl:px-24 px-4 2xl:py-20 py-14 bg-[#fff200] dark:bg-[#ccc200] text-[#0072bc] dark:text-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <GraduationCap className="h-10 w-10 lg:h-20 lg:w-20" />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              Get Inspired by STI Alumni
            </p>
          </div>
          <p className="lg:text-lg 2xl:text-xl">
            Discover real stories of success from STI graduates who turned their
            dreams into reality. <br /> From tech experts to creative pros, they
            started right where you are.
          </p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Link href="https://alumni.sti.edu/" target="_blank">
              <Image
                src="/images/alumni_stories/alumni_banner.webp"
                height="100"
                width="900"
                loading="eager"
                alt="Alumni Banner"
              />
            </Link>
            <Link
              href="https://alumni.sti.edu/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Visit the Official STI Alumni Website
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <GraduationCap className="h-10 w-10 lg:h-20 lg:w-20" />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              Meet the Alumni
            </p>
          </div>
          <p className="lg:text-lg 2xl:text-xl">
            Meet the graduates who walked the same halls, faced the same
            choices, and are now shaping the world in their own ways. <br />{" "}
            Discover how STI helped them build careers in tech, business, arts,
            healthcare, and more.
          </p>
          <div className="flex justify-center py-6">
            <Link
              href="https://www.sti.edu/students_alumni_archive.asp"
              target="_blank"
              className="py-3 px-6 rounded-4xl w-max bg-[#0072bc] font-bold text-lg lg:text-xl 2xl:text-2xl text-background hover:scale-120 transition-all duration-300"
            >
              Explore Alumni Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
