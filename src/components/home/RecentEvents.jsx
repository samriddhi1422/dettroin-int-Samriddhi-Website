import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import synapse from '../../assets/images/synapse_2026_5-300x200.jpeg'
import laissez from '../../assets/images/laissez_faire_2026_4-1-300x200.jpeg'
import under from '../../assets/images/Under-17-Girls-Table-Tennis--300x225.jpeg'
const events = [
  {
    id: 1,
    title: "Synapse 2026",
    date: "22–23 July 2026",
    label: "22 JUL",
    image:synapse,
    featured: true,
  },
  {
    id: 2,
    title: "The 23rd Edition of Laissez Faire",
    date: "17 July 2026",
    label: "17 JUL",
    image: laissez,
  },
  {
    id: 3,
    title: "Inter-School Tennis Zonal Tournament 2026",
    date: "13–15 July 2026",
    label: "13 JUL",
    image: under,
  },
];

const RecentEvents = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

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
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        overflow-hidden
        bg-[#F7F4EF]
        px-4 pb-0 pt-10
        sm:px-6
        lg:px-8 lg:pb-0 lg:pt-0
      "
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <div
          className={`
            flex items-center gap-4
            transition-all duration-700
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E1731] sm:text-[11px]">
            03 / Recent Events
          </span>

          <div className="relative h-px flex-1 overflow-hidden">
            <div className="absolute inset-0 bg-[#DCD3CF]/40" />

            <div
              className={`
                absolute inset-0 origin-left bg-[#DCD3CF]
                transition-transform duration-[1200ms] delay-200
                ${visible ? "scale-x-100" : "scale-x-0"}
              `}
            />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-[44px] font-medium leading-[1.02] tracking-[-0.04em] text-[#211B1C] sm:text-[56px] lg:text-[68px]">
              <span className="block overflow-hidden pb-1">
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
                  Stories from
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
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
                  Vasant Valley.
                </span>
              </span>
            </h2>

            <p
              className={`
                mt-5 max-w-[500px]
                text-[15px] leading-7 text-[#665D5E]
                transition-all duration-700 delay-[450ms]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
            >
              A glimpse into the experiences, achievements and moments that
              shape life at Vasant Valley.
            </p>
          </div>

          <Link
            to="/announcements"
            className={`
              group inline-flex w-fit items-center gap-3
              border-b border-[#8E1731]
              pb-1.5 text-sm font-semibold text-[#8E1731]
              transition-all duration-700 delay-[550ms]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            View all events

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Events */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">

          {/* Featured event */}
          <article
            className={`
              group
              transition-all duration-[1100ms] delay-[600ms]
              [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]

              ${
                visible
                  ? "translate-x-0 scale-100 opacity-100"
                  : "-translate-x-12 scale-[0.97] opacity-0"
              }
            `}
          >
            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="
                  event-featured-image
                  h-[350px] w-full object-cover
                  transition-transform duration-[1200ms]
                  group-hover:scale-[1.04]
                  sm:h-[470px]
                  lg:h-[590px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              {/* Date */}
              <div
                className={`
                  absolute left-5 top-5
                  rounded-full bg-[#F7F4EF]
                  px-4 py-2
                  text-[10px] font-semibold
                  tracking-[0.15em] text-[#8E1731]

                  transition-all duration-700 delay-[1000ms]
                  sm:left-6 sm:top-6

                  ${
                    visible
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  }
                `}
              >
                {featuredEvent.label}
              </div>

              {/* Arrow */}
              <button
                aria-label={`View ${featuredEvent.title}`}
                className={`
                  absolute right-5 top-5
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-[#F7F4EF]
                  text-[#8E1731]

                  transition-all duration-500
                  group-hover:rotate-45
                  group-hover:bg-[#8E1731]
                  group-hover:text-white

                  sm:right-6 sm:top-6

                  ${
                    visible
                      ? "scale-100 opacity-100"
                      : "scale-50 opacity-0"
                  }
                `}
              >
                <ArrowUpRight size={18} />
              </button>

              {/* Event text */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0
                  p-5
                  transition-all duration-[900ms] delay-[900ms]
                  sm:p-7

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }
                `}
              >
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Featured Event
                </p>

                <h3 className="max-w-[500px] font-serif text-[30px] leading-tight text-white sm:text-[38px] lg:text-[44px]">
                  {featuredEvent.title}
                </h3>

                <p className="mt-2 text-sm text-white/75">
                  {featuredEvent.date}
                </p>
              </div>
            </div>
          </article>

          {/* Other events */}
          <div className="flex flex-col gap-9">
            {otherEvents.map((event, index) => (
              <article
                key={event.id}
                style={{
                  transitionDelay: `${750 + index * 180}ms`,
                }}
                className={`
                  group
                  border-b border-[#DCD3CF]
                  pb-9
                  transition-all duration-[1000ms]
                  [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                  last:border-none

                  ${
                    visible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-12 opacity-0"
                  }
                `}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="
                      h-[230px] w-full object-cover
                      transition-transform duration-[900ms]
                      group-hover:scale-[1.045]
                      sm:h-[300px]
                      lg:h-[250px]
                    "
                  />

                  <div
                    className="
                      absolute left-4 top-4
                      rounded-full
                      bg-[#F7F4EF]/95
                      px-3.5 py-2
                      text-[9px] font-semibold
                      tracking-[0.15em]
                      text-[#8E1731]
                      backdrop-blur
                    "
                  >
                    {event.label}
                  </div>
                </div>

                {/* Event information */}
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <h3
                      className="
                        max-w-[360px]
                        font-serif text-[23px]
                        leading-[1.2]
                        tracking-[-0.02em]
                        text-[#211B1C]
                        transition-colors duration-300
                        group-hover:text-[#8E1731]
                        sm:text-[26px]
                      "
                    >
                      {event.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#776D6E]">
                      {event.date}
                    </p>
                  </div>

                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-[#CFC5C3]
                      text-[#8E1731]

                      transition-all duration-300

                      group-hover:rotate-45
                      group-hover:border-[#8E1731]
                      group-hover:bg-[#8E1731]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Archive links */}
        <div
          className={`
            mt-14 flex flex-col gap-5
            border-t border-[#DCD3CF]
            pt-7
            transition-all duration-[900ms] delay-[1200ms]

            sm:flex-row
            sm:items-center
            sm:justify-between

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }
          `}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#776D6E]">
            Browse Archives
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <button className="text-sm text-[#4F4748] transition-colors hover:text-[#8E1731]">
              June 2026
            </button>

            <button className="text-sm text-[#4F4748] transition-colors hover:text-[#8E1731]">
              May 2026
            </button>

            <Link
              to="/announcements"
              className="group flex items-center gap-2 text-sm font-semibold text-[#8E1731]"
            >
              View All

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;