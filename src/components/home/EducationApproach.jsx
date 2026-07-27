import { useEffect, useRef, useState } from "react";
import education from '../../assets/images/educationapproach.jpeg'

const values = [
  {
    label: "Independent Thinking",
    style: "bg-[#F7E7E3] text-[#8E1731] rotate-[-2deg]",
  },
  {
    label: "Academic Excellence",
    style: "bg-[#F7F4EF] text-[#211B1C] rotate-[2deg]",
  },
  {
    label: "Creativity & Expression",
    style: "bg-[#D9A6AE] text-[#5F1023] rotate-[-1deg]",
  },
  {
    label: "Ethical Values",
    style: "bg-[#F7F4EF] text-[#211B1C] rotate-[3deg]",
  },
  {
    label: "Curiosity",
    style: "bg-[#EBCDD2] text-[#721127] rotate-[-3deg]",
  },
  {
    label: "Global Citizenship",
    style: "bg-[#F7E7E3] text-[#8E1731] rotate-[1deg]",
  },
  {
    label: "Individual Growth",
    style: "bg-[#F7F4EF] text-[#211B1C] rotate-[-2deg]",
  },
  {
    label: "Learning Beyond Classrooms",
    style: "bg-[#D9A6AE] text-[#5F1023] rotate-[2deg]",
  },
  {
    label: "Community",
    style: "bg-[#F7E7E3] text-[#8E1731] rotate-[-1deg]",
  },
];

const EducationApproach = () => {
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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F7F4EF] px-4 py-16 pt-0 pb-10 sm:px-6 sm:py-20 lg:px-8 lg:pb-24 lg:pt-15"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <div
          className={`
            mb-8 flex items-center gap-4
            transition-all duration-700 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E1731] sm:text-[11px]">
            02 / Our Approach
          </span>

          <div
            className={`
              h-px origin-left bg-[#DCD3CF]
              transition-transform duration-[1200ms] delay-200
              ${visible ? "scale-x-100" : "scale-x-0"}
              flex-1
            `}
          />
        </div>

        {/* Main card */}
        <div
          className={`
            relative overflow-hidden rounded-[28px]
            bg-[#8E1731] p-5
            transition-all duration-[1000ms]
            [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

            sm:p-8
            md:p-10
            lg:rounded-[36px]
            lg:p-12

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >

          {/* Background text */}
          <span
            aria-hidden="true"
            className="
              approach-vvs
              pointer-events-none
              absolute -right-8 top-5
              font-serif text-[100px]
              font-semibold leading-none
              text-white/[0.025]
              sm:text-[160px]
              lg:text-[230px]
            "
          >
            VVS
          </span>

          {/* Heading */}
          <div className="relative mx-auto max-w-[800px] text-center">

            <p
              className={`
                mb-4 text-[10px] font-semibold uppercase
                tracking-[0.3em] text-[#EBCDD2]
                transition-all duration-700 delay-200
                sm:text-[11px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              The Vasant Valley Experience
            </p>

            <h2
              className="
                font-serif text-[38px] font-medium
                leading-[1.05] tracking-[-0.035em]
                text-[#F7F4EF]
                sm:text-[48px]
                md:text-[58px]
                lg:text-[68px]
              "
            >
              <span className="block overflow-hidden pb-1">
                <span
                  className={`
                    block
                    transition-all duration-[900ms] delay-300
                    [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                  `}
                >
                  What shapes a
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span
                  className={`
                    block italic text-[#EBCDD2]
                    transition-all duration-[1000ms] delay-[400ms]
                    [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                  `}
                >
                  Vasant Valley education?
                </span>
              </span>
            </h2>

            <p
              className={`
                mx-auto mt-5 max-w-[590px]
                text-sm leading-6 text-[#F7F4EF]/70
                transition-all duration-700 delay-500
                sm:text-[15px] sm:leading-7

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
            >
              Learning here is shaped by curiosity, creativity, character and
              the freedom to explore ideas beyond the classroom.
            </p>
          </div>

          {/* Values */}
          <div className="relative mx-auto mt-10 flex max-w-[900px] flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4">
            {values.map((value, index) => (
              <div
                key={value.label}
                style={{
                  transitionDelay: `${550 + index * 80}ms`,
                }}
                className={`
                  ${value.style}

                  cursor-default rounded-full
                  px-4 py-2.5
                  text-[11px] font-semibold
                  shadow-[0_5px_15px_rgba(30,10,15,0.08)]

                  transition-all
                  duration-700
                  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]

                  hover:!rotate-0
                  hover:!-translate-y-1
                  hover:scale-105

                  sm:px-5
                  sm:py-3
                  sm:text-xs

                  md:px-6
                  md:text-[13px]

                  ${
                    visible
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-8 scale-75 opacity-0"
                  }
                `}
              >
                {value.label}
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className={`
              relative mt-12
              transition-all duration-[1100ms] delay-[1100ms]
              [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
              sm:mt-14

              ${
                visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-14 scale-[0.96] opacity-0"
              }
            `}
          >

            {/* Image border */}
            <div
              aria-hidden="true"
              className="
                approach-image-border
                absolute -right-3 -top-3
                h-full w-full
                rounded-[24px]
                border border-[#EBCDD2]/30
                sm:-right-4 sm:-top-4
              "
            />

            <div className="group relative h-[280px] overflow-hidden rounded-[22px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
              <img
                src={education}
                alt="Students learning together at Vasant Valley School"
                className="
                  approach-image
                  h-full w-full object-cover
                  transition-transform duration-[1200ms]
                  group-hover:scale-[1.035]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#211B1C]/60 via-transparent to-transparent" />

              {/* Caption */}
              <div
                className={`
                  absolute bottom-5 left-5 right-5
                  transition-all duration-700 delay-[1400ms]

                  sm:bottom-7
                  sm:left-7
                  sm:right-auto
                  sm:max-w-[430px]

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                <p className="font-serif text-[22px] leading-[1.2] text-white sm:text-[28px] md:text-[32px]">
                  Learning to question,
                  <span className="italic text-[#F2CDD3]">
                    {" "}
                    discover and grow.
                  </span>
                </p>

                <p className="mt-2 max-w-[360px] text-xs leading-5 text-white/70 sm:text-[13px]">
                  Creating experiences that encourage students to explore their
                  interests and develop their own perspective.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div
            className={`
              mt-6 flex flex-col gap-3
              border-t border-white/15 pt-5
              text-[10px] uppercase
              tracking-[0.18em] text-white/50

              transition-all duration-700 delay-[1500ms]

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:text-[11px]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <p>Curiosity · Character · Creativity</p>
            <p>Learning beyond boundaries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationApproach;