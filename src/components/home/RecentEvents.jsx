import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Synapse 2026",
    date: "22–23 July 2026",
    label: "22 JUL",
    image: "/src/assets/images/synapse_2026_5-300x200.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "The 23rd Edition of Laissez Faire",
    date: "17 July 2026",
    label: "17 JUL",
    image: "/src/assets/images/laissez_faire_2026_4-1-300x200.jpeg",
  },
  {
    id: 3,
    title: "Inter-School Tennis Zonal Tournament 2026",
    date: "13–15 July 2026",
    label: "13 JUL",
    image: "/src/assets/images/Under-17-Girls-Table-Tennis--300x225.jpeg",
  },
];

const RecentEvents = () => {
  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

  return (
    <section className="bg-[#F7F4EF] px-4 py-20 pt-0 sm:px-6  lg:px-8 lg:py-28 lg:pt-0 pb-0">
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E1731] sm:text-[11px]">
            03 / Recent Events
          </span>

          <div className="h-px flex-1 bg-[#DCD3CF]" />
        </div>

        {/* Heading */}
        <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-[44px] font-medium leading-[1.02] tracking-[-0.04em] text-[#211B1C] sm:text-[56px] lg:text-[68px]">
              Stories from
              <span className="block italic text-[#8E1731]">
                Vasant Valley.
              </span>
            </h2>

            <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-[#665D5E]">
              A glimpse into the experiences, achievements and moments that
              shape life at Vasant Valley.
            </p>
          </div>

          <Link
            to="/announcements"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#8E1731] pb-1.5 text-sm font-semibold text-[#8E1731]"
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

          {/* Featured Event */}
          <article className="group">
            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:h-[470px] lg:h-[590px]"
              />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

              {/* Date badge */}
              <div className="absolute left-5 top-5 rounded-full bg-[#F7F4EF] px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#8E1731] sm:left-6 sm:top-6">
                {featuredEvent.label}
              </div>

              {/* Arrow */}
              <button
                aria-label={`View ${featuredEvent.title}`}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F4EF] text-[#8E1731] transition-all duration-300 group-hover:bg-[#8E1731] group-hover:text-white sm:right-6 sm:top-6"
              >
                <ArrowUpRight size={18} />
              </button>

              {/* Image text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
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

          {/* Right events */}
          <div className="flex flex-col gap-9">
            {otherEvents.map((event) => (
              <article
                key={event.id}
                className="group border-b border-[#DCD3CF] pb-9 last:border-none"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] sm:h-[300px] lg:h-[250px]"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#F7F4EF]/95 px-3.5 py-2 text-[9px] font-semibold tracking-[0.15em] text-[#8E1731] backdrop-blur">
                    {event.label}
                  </div>
                </div>

                {/* Event information */}
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="max-w-[360px] font-serif text-[23px] leading-[1.2] tracking-[-0.02em] text-[#211B1C] transition-colors duration-300 group-hover:text-[#8E1731] sm:text-[26px]">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#776D6E]">
                      {event.date}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#CFC5C3] text-[#8E1731] transition-all duration-300 group-hover:border-[#8E1731] group-hover:bg-[#8E1731] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Archive links */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#DCD3CF] pt-7 sm:flex-row sm:items-center sm:justify-between">
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
              className="flex items-center gap-2 text-sm font-semibold text-[#8E1731]"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;