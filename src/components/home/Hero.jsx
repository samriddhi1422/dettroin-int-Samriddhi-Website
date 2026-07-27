import { useEffect, useState } from "react";
import { ArrowRight, Play, ArrowDown } from "lucide-react";
import hero from '../../assets/images/vasant-valley-hero.jpeg'

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7F4EF] pb-10 sm:pb-10">

      {/* 
          DECORATIVE BACKGROUND TEXT
       */}

      <div
        aria-hidden="true"
        className="
          hero-bg-word
          pointer-events-none
          absolute left-1/2 top-[140px]
          -translate-x-1/2
          whitespace-nowrap
          font-serif
          text-[100px]
          font-semibold
          tracking-[-0.06em]
          text-[#8E1731]/[0.025]
          sm:text-[150px]
          lg:text-[220px]
        "
      >
        VASANT
      </div>

      <div
        className="
          relative mx-auto flex
          min-h-screen
          max-w-[1440px]
          flex-col
          px-4
          pb-0
          pt-[135px]

          sm:px-6
          sm:pt-[150px]

          lg:px-8
        "
      >

        {/* 
            HERO CONTENT
         */}

        <div className="mx-auto max-w-[1050px] text-center">

          {/* EYEBROW */}

          <div className="overflow-hidden">
            <p
              className={`
                mb-5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#8E1731]
                transition-all
                duration-700
                ease-out
                sm:text-xs

                ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              Vasant Valley School
            </p>
          </div>


          {/* 
              MAIN HEADING
           */}

          <h1
            className="
              font-serif
              text-[48px]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#211B1C]

              sm:text-[65px]
              md:text-[78px]
              lg:text-[94px]
            "
          >

            {/* LINE 1 */}

            <span className="block overflow-hidden pb-[0.06em]">
              <span
                className={`
                  block
                  transition-all
                  duration-[1000ms]
                  [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                  ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }
                `}
              >
                Where curiosity
              </span>
            </span>


            {/* LINE 2 */}

            <span className="block overflow-hidden pb-[0.12em]">
              <span
                className={`
                  block
                  italic
                  text-[#8E1731]
                  transition-all
                  delay-150
                  duration-[1100ms]
                  [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                  ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }
                `}
              >
                shapes the future.
              </span>
            </span>

          </h1>


          {/* 
              DESCRIPTION
           */}

          <p
            className={`
              mx-auto
              mt-7
              max-w-[620px]
              text-[15px]
              leading-7
              text-[#665D5E]
              transition-all
              delay-300
              duration-[900ms]
              [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

              sm:text-base

              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            An environment where students question, discover, create and grow
            into thoughtful individuals prepared for the world beyond the
            classroom.
          </p>


          {/* 
              CTA BUTTONS
           */}

          <div
            className={`
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              transition-all
              delay-500
              duration-[900ms]
              [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

              sm:flex-row

              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >

            {/* DISCOVER */}

            <a
              href="#discover"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-[#8E1731]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#741127]
                hover:shadow-[0_12px_30px_rgba(142,23,49,0.18)]
              "
            >
              Discover Vasant Valley

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>


            {/* STORY */}

            <a
              href="#story"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#CFC5C3]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#332C2D]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#8E1731]
                hover:text-[#8E1731]
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8E1731]/10
                  transition-transform
                  duration-500
                  group-hover:rotate-[360deg]
                "
              >
                <Play size={10} fill="currentColor" />
              </span>

              Our Story
            </a>

          </div>

        </div>


        {/* 
            MAIN HERO IMAGE
         */}

        <div
          className={`
            relative
            mx-auto
            mt-12
            w-full
            max-w-[1280px]
            transition-all
            delay-700
            duration-[1200ms]
            [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

            sm:mt-14

            ${
              loaded
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-16 scale-[0.96] opacity-0"
            }
          `}
        >

          {/* BLUSH DECORATION */}

          <div
            aria-hidden="true"
            className="
              hero-blush
              absolute
              -left-3
              -top-3
              h-[55%]
              w-[35%]
              rounded-[30px]
              bg-[#EBCDD2]

              sm:-left-5
              sm:-top-5
            "
          />


          {/* IMAGE */}

          <div
            className="
              group
              relative
              h-[310px]
              overflow-hidden
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
                hero-main-image
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1400ms]
                [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                group-hover:scale-[1.035]
              "
            />


            {/* IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/25
                via-transparent
                to-transparent
              "
            />


            {/* 
                FLOATING CAPTION
             */}

            <div
              className={`
                hero-caption
                absolute
                bottom-4
                left-4
                right-4

                flex
                flex-col
                gap-3

                rounded-2xl
                border
                border-white/20
                bg-white/90
                p-4
                backdrop-blur-md

                transition-all
                delay-[1100ms]
                duration-[900ms]
                [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                sm:bottom-6
                sm:left-6
                sm:right-auto
                sm:max-w-[320px]
                sm:p-5

                ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#8E1731]
                "
              >
                Learning beyond classrooms
              </span>

              <p
                className="
                  font-serif
                  text-lg
                  leading-snug
                  text-[#211B1C]

                  sm:text-xl
                "
              >
                Education that inspires students to think independently.
              </p>

            </div>

          </div>

        </div>


        {/* 
            BOTTOM MICRO CONTENT
         */}

        <div
          className={`
            mx-auto
            mt-6
            flex
            w-full
            max-w-[1280px]
            flex-col
            justify-between
            gap-3
            border-t
            border-[#DCD3CF]
            pt-5
            text-xs
            text-[#776D6E]

            transition-all
            delay-[1200ms]
            duration-[900ms]

            sm:flex-row

            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <p>
            Learning · Creativity · Character · Community
          </p>

          <p className="flex items-center gap-2">
            <span className="hero-location-dot h-1.5 w-1.5 rounded-full bg-[#8E1731]" />

            New Delhi, India
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;