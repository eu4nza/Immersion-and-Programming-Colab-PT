import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="dark:bg-[#191a1f] h-screen pb-24 flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col items-center font-semibold">
        <p className="2xl:text-8xl text-7xl">404</p>
        <p className="2xl:text-4xl text-3xl">Not Found</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="2xl:text-base text-xs">How did you get here?</p>
        <div className="flex flex-row gap-1 2xl:text-base text-xs">
          <p>Let's go to home?</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Okay! :3
          </Link>
        </div>
      </div>
      <div className="2xl:h-[79px] h-[67px]" />
    </div>
  );
}
