import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full bg-[#0072bc] text-white/80 text-sm">
      <div className="px-96 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Logo + Description */}
          <div className="flex flex-col gap-6 max-w-lg">
            <Link href="/" className="flex flex-row items-center gap-4">
              <Image
                src="images/logo/sti_logo.svg"
                alt="Footer Logo"
                priority
                width={90}
                height={20}
              />
              <p className="text-white text-4xl font-semibold">
                Career Compass
              </p>
            </Link>
          </div>
        </div>

        {/* Border before copyright, full-width inside content container */}
        <div className="border-t border-white/20 mt-16"></div>

        {/* Copyright */}
        <div className="text-white/50 pt-8">
          &copy; {new Date().getFullYear()} STI College Tagaytay
        </div>
      </div>
    </div>
  );
}
