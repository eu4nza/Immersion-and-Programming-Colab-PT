import Image from "next/image";
import Link from "next/link";

export default function CareerCampSection() {
  return (
    <section
      id="career_camp"
      className="w-full 2xl:px-24 px-4 2xl:py-24 py-16 min-h-screen bg-[url('/images/career_camp/career_camp_background.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto bg-background dark:bg-[#191a1f] py-6 px-6 2xl:py-12 2xl:px-12 rounded-xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/career_camp/career_camp_logo.webp"
              width="128"
              height="32"
              loading="eager"
              alt="Career Camp Logo"
              className="w-[64px] lg:w-[96px] 2xl:w-[128px]"
            />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              Next Stop: Career Camp
            </p>
          </div>
          <p className="lg:text-lg 2xl:text-xl">
            You’ve explored yourself with <b>SCOPE</b>. <br /> Now it’s time to
            explore the real world.
          </p>
          <p className="lg:text-lg 2xl:text-xl">
            STI’s <b>Career Camp</b> gives you hands-on, immersive experiences
            that simulate real careers <br /> so you can make smarter, more
            confident choices for your future.
          </p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Link
              href="https://www.sti.edu/newsarticledetail1.asp?i=Mzgw&p=make_the_right_choice_with_sti_career_camp"
              target="_blank"
            >
              <Image
                src="/images/career_camp/career_camp_banner.webp"
                height="100"
                width="900"
                loading="eager"
                alt="Career Camp Banner"
              />
            </Link>
            <Link
              href="https://www.sti.edu/newsarticledetail1.asp?i=Mzgw&p=make_the_right_choice_with_sti_career_camp"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Read the Full Article Here
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/career_camp/career_camp_camps.webp"
              height="64"
              width="128"
              loading="eager"
              alt="SCOPE Magnify logo"
              className="w-[64px] lg:w-[96px] 2xl:w-[128px]"
            />
            <p className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
              What You Can Do with Career Camp:
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:text-lg 2xl:text-xl">
            <div className="flex flex-row gap-2">
              <>
                {/* Light mode icon */}
                <Image
                  src="/images/career_camp/career_camp_icon_bakers_black.webp"
                  height="24"
                  width="24"
                  loading="eager"
                  alt="Career Camp Icon Bakers (Black)"
                  className="block dark:hidden h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
                />

                {/* Dark mode icon */}
                <Image
                  src="/images/career_camp/career_camp_icon_bakers_white.webp"
                  height="24"
                  width="24"
                  loading="eager"
                  alt="Career Camp Icon Bakers (White)"
                  className="hidden dark:block h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
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
                  loading="eager"
                  alt="Career Camp Icon Game Dev (Black)"
                  className="block dark:hidden h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
                />

                {/* Dark mode icon */}
                <Image
                  src="/images/career_camp/career_camp_icon_gamedev_white.webp"
                  height="24"
                  width="24"
                  loading="eager"
                  alt="Career Camp Icon Game Dev (White)"
                  className="hidden dark:block h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
                />
              </>
              <p>
                <b>Develop a Game:</b> Try coding, game design, and storytelling
                using beginner-friendly tools and software.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <>
                {/* Light mode icon */}
                <Image
                  src="/images/career_camp/career_camp_icon_photographer_black.webp"
                  height="24"
                  width="24"
                  loading="eager"
                  alt="Career Camp Icon Game Dev (Black)"
                  className="block dark:hidden h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
                />

                {/* Dark mode icon */}
                <Image
                  src="/images/career_camp/career_camp_icon_photographer_white.webp"
                  height="24"
                  width="24"
                  loading="eager"
                  alt="Career Camp Icon Photographer (White)"
                  className="hidden dark:block h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
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
                  loading="eager"
                  alt="Career Camp Icon Entrepreneur (Black)"
                  className="block dark:hidden h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
                />

                {/* Dark mode icon */}
                <Image
                  src="/images/career_camp/career_camp_icon_entrep_white.webp"
                  height="24"
                  width="24"
                  loading="eager"
                  alt="Career Camp Icon Entrepreneur (White)"
                  className="hidden dark:block h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px]"
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
                className="py-3 px-6 rounded-4xl w-max bg-yellow-400 font-bold text-lg lg:text-xl 2xl:text-2xl text-black hover:scale-120 transition-all duration-300"
              >
                Join Career Camp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
