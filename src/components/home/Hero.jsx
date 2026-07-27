import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EF] pb-10 sm:pb-0">
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-[140px]
          -translate-x-1/2 whitespace-nowrap
          font-serif text-[100px] font-semibold
          tracking-[-0.06em] text-[#8E1731]/[0.025]
          sm:text-[150px] lg:text-[220px]
        "
      >
        VASANT
      </div>

      <div
        className="
          relative mx-auto flex min-h-screen max-w-[1440px]
          flex-col px-4 pb-0 pt-[135px]
          sm:px-6 sm:pt-[150px]
          lg:px-8 
        "
      >
        {/* Hero Content */}
        <div className="mx-auto max-w-[1050px] text-center">
          <p
            className="
              mb-5 text-[11px] font-semibold uppercase
              tracking-[0.3em] text-[#8E1731]
              sm:text-xs
            "
          >
            Vasant Valley School
          </p>

          <h1
            className="
              font-serif text-[48px] font-medium
              leading-[0.98] tracking-[-0.045em]
              text-[#211B1C]
              sm:text-[65px]
              md:text-[78px]
              lg:text-[94px]
            "
          >
            Where curiosity
            <br />

            <span className="italic text-[#8E1731]">
              shapes the future.
            </span>
          </h1>

          <p
            className="
              mx-auto mt-7 max-w-[620px]
              text-[15px] leading-7 text-[#665D5E]
              sm:text-base
            "
          >
            An environment where students question, discover, create and grow
            into thoughtful individuals prepared for the world beyond the
            classroom.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#discover"
              className="
                group flex items-center gap-3 rounded-full
                bg-[#8E1731] px-7 py-3.5
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#741127]
              "
            >
              Discover Vasant Valley

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#story"
              className="
                group flex items-center gap-3 rounded-full
                border border-[#CFC5C3]
                px-7 py-3.5 text-sm font-semibold
                text-[#332C2D]
                transition-all duration-300
                hover:border-[#8E1731] hover:text-[#8E1731]
              "
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8E1731]/10">
                <Play size={10} fill="currentColor" />
              </span>

              Our Story
            </a>
          </div>
        </div>

        {/* Main Hero Image */}
        <div className="relative mx-auto mt-12 w-full max-w-[1280px] sm:mt-14">
          {/* Blush background decoration */}
          <div
            aria-hidden="true"
            className="
              absolute -left-3 -top-3 h-[55%] w-[35%]
              rounded-[30px] bg-[#EBCDD2]
              sm:-left-5 sm:-top-5
            "
          />

          {/* Main photo */}
          <div
            className="
              relative h-[310px] overflow-hidden
              rounded-[22px]
              sm:h-[430px]
              md:h-[520px]
              lg:h-[590px]
            "
          >
            <img
              src="/src/assets/images/vasant-valley-hero.jpeg"
              alt="Students learning at Vasant Valley School"
              className="
                h-full w-full object-cover
                transition-transform duration-[1200ms]
                hover:scale-[1.02]
              "
            />

            {/* Subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            {/* Floating caption */}
            <div
              className="
                absolute bottom-4 left-4 right-4
                flex flex-col gap-3
                rounded-2xl border border-white/20
                bg-white/90 p-4 backdrop-blur-md
                sm:bottom-6 sm:left-6 sm:right-auto
                sm:max-w-[320px] sm:p-5
              "
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8E1731]">
                Learning beyond classrooms
              </span>

              <p className="font-serif text-lg leading-snug text-[#211B1C] sm:text-xl">
                Education that inspires students to think independently.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom micro content */}
        <div
          className="
            mx-auto mt-6 flex w-full max-w-[1280px]
            flex-col justify-between gap-3
            border-t border-[#DCD3CF] pt-5
            text-xs text-[#776D6E]
            sm:flex-row
          "
        >
          <p>Learning · Creativity · Character · Community</p>

          <p>New Delhi, India</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;