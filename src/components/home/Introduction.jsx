import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="discover"
      className="
        overflow-hidden bg-[#F7F4EF]
        px-4 pb-10 pt-0
        sm:px-6 sm:pt-10
        lg:px-8 lg:pb-0 lg:pt-0
      "
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <div
          className={`
            flex items-center gap-4
            transition-all duration-700 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8E1731] sm:text-[11px] sm:tracking-[0.28em]">
            01 / About Vasant Valley
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-[#DCD3CF]/40">
            <div
              className={`
                absolute inset-0 origin-left bg-[#DCD3CF]
                transition-transform duration-[1200ms] delay-200
                ${
                  visible
                    ? "scale-x-100"
                    : "scale-x-0"
                }
              `}
            />
          </div>
        </div>

        {/* Main heading */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <h2 className="max-w-[850px] font-serif text-[42px] font-medium leading-[1.05] tracking-[-0.035em] text-[#211B1C] sm:text-[54px] md:text-[64px] lg:text-[72px]">

              <span className="block overflow-hidden pb-[0.06em]">
                <span
                  className={`
                    block
                    transition-all duration-[900ms] delay-200
                    [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                  `}
                >
                  Education that goes
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.12em]">
                <span
                  className={`
                    block italic text-[#8E1731]
                    transition-all duration-[1000ms] delay-300
                    [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                  `}
                >
                  beyond the classroom.
                </span>
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <p
              className={`
                max-w-[380px] text-sm leading-7 text-[#766C6D]
                transition-all duration-[900ms] delay-[450ms]
                sm:text-[15px]
                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >
              A learning environment built around curiosity, independent
              thinking, creativity and responsible citizenship.
            </p>
          </div>
        </div>

        {/* Image and content */}
        <div className="mt-14 grid items-center gap-10 md:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* Image */}
          <div
            className={`
              relative
              transition-all duration-[1100ms] delay-500
              [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
              ${
                visible
                  ? "translate-x-0 scale-100 opacity-100"
                  : "-translate-x-12 scale-[0.97] opacity-0"
              }
            `}
          >

            {/* Decorative block */}
            <div
              aria-hidden="true"
              className="
                intro-pink-block
                absolute -bottom-4 -left-4
                h-[55%] w-[40%]
                rounded-[24px]
                bg-[#EBCDD2]
                sm:-bottom-6 sm:-left-6
              "
            />

            <div className="group relative overflow-hidden rounded-[24px]">
              <img
                src="/src/assets/images/intoduction.png"
                alt="Students at Vasant Valley School"
                className="
                  intro-image
                  h-[360px] w-full object-cover
                  transition-transform duration-[1200ms]
                  group-hover:scale-[1.035]
                  sm:h-[450px]
                  lg:h-[560px]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211B1C]/15 via-transparent to-transparent" />

              {/* Image label */}
              <div
                className={`
                  absolute bottom-4 right-4
                  rounded-full
                  bg-[#F7F4EF]/95
                  px-4 py-2
                  text-[10px] font-semibold uppercase
                  tracking-[0.2em] text-[#8E1731]
                  backdrop-blur

                  transition-all duration-700 delay-[950ms]

                  sm:bottom-6 sm:right-6

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
              >
                Learn · Explore · Grow
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-4">

            <span
              className={`
                block font-serif text-5xl leading-none
                text-[#8E1731]/25
                transition-all duration-700 delay-600
                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              “
            </span>

            <h3
              className={`
                mt-1 max-w-[500px]
                font-serif text-[28px] font-medium
                leading-[1.25] tracking-[-0.02em]
                text-[#211B1C]

                transition-all duration-[900ms] delay-700
                [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                sm:text-[34px]

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }
              `}
            >
              Encouraging students to push the boundaries of current
              understanding.
            </h3>

            <p
              className={`
                mt-6 max-w-[500px]
                text-[15px] leading-7 text-[#665D5E]
                transition-all duration-700 delay-[850ms]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
            >
              At Vasant Valley School, learning extends beyond academic
              achievement. Students are encouraged to question, explore ideas
              and develop the confidence to think independently.
            </p>

            <p
              className={`
                mt-4 max-w-[500px]
                text-[15px] leading-7 text-[#665D5E]
                transition-all duration-700 delay-[1000ms]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
            >
              The school aims to nurture ethical values, originality and a
              strong sense of responsibility while preparing students to
              participate thoughtfully in an increasingly connected world.
            </p>

            <Link
              to="/about"
              className={`
                group mt-8 inline-flex items-center gap-3
                border-b border-[#8E1731]
                pb-1.5 text-sm font-semibold text-[#8E1731]

                transition-all duration-700 delay-[1150ms]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              Discover Our Story

              <ArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;