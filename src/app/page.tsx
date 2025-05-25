import Image from "next/image";
import { Compass } from "lucide-react";
import { ToggleTheme } from "@/components/ToggleTheme";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="w-full bg-[url('/home_background.png')] bg-no-repeat bg-top bg-cover px-24 py-32"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-4 text-[#0072bc]">
          <p className="text-6xl font-bold leading-tight">
            Welcome to the STI Career Compass
          </p>
          <p className="text-2xl font-semibold text-black">
            Your guide to discovering the right path for your future.
          </p>
          <p className="text-lg max-w-3xl text-black">
            Whether you’re exploring career options, preparing for your
            internship, or getting ready for your first job, this site will help
            you take the next step with confidence.
          </p>
          <button className="bg-[#fff200] text-[#0072bc] py-3 px-6 rounded-sm w-max hover:bg-[#0072bc] hover:text-[#fff200] font-semibold transition-all duration-300 shadow-lg cursor-pointer">
            Start Now
          </button>
        </div>
      </section>
      <section className="h-[1080]"></section>
    </main>
  );
}
