import Image from "next/image";
import { Compass } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen py-24 px-24"
      >
        <div className="flex flex-col gap-2 text-[#0072bc]">
          <p className="text-6xl font-bold">
            Welcome to the STI Career Compass
          </p>
          <p className="text-2xl">
            Your guide to discovering the right path for your future.
          </p>
          <p className="text-lg">
            Whether you’re exploring career options, preparing for your
            internship, or getting ready for your first job, this site will help
            you take the next step with confidence.
          </p>
          <button className="bg-[#fff200] text-[#0072bc] py-3 px-4 rounded-lg flex items-start justify-start w-max hover:bg-[#0072bc] hover:text-[#fff200] cursor-pointer transition-all duration-300 shadow-sm">
            Start Now
          </button>
        </div>
      </section>
    </main>
  );
}
