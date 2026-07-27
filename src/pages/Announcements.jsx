import { ArrowRight, ArrowDown } from "lucide-react";

const announcements = [
  {
    id: "01",
    category: "Academic",
    date: "03 June 2026",
    title: "Class 12 CBSE Marksheet",
    description:
      "CBSE Marksheets of the All India Senior School Certificate Examination for Class XII are available and can be collected from the Senior School Office on any working day between 10:00 a.m to 3:00 p.m. from Wednesday, 3rd June, 2026 onwards.",
  },
  {
    id: "02",
    category: "Education",
    date: "2026",
    title: "Vasant Valley Centre for Excellence in Education",
    description:
      "We are pleased to introduce the Vasant Valley Centre for Excellence in Education. This initiative is rooted in our school’s long-standing commitment to excellence in teaching and learning. Our work at the Centre draws on thirty-six years of experience in nurturing professional learning communities, mentoring educators, and aligning academic practices with child-centred values that define Vasant Valley School.",
  },
  {
    id: "03",
    category: "Announcement",
    date: "2026",
    title: "Announcing Vasant Valley School, Gurgaon",
    description:
      "We are very happy to announce that Vasant Valley School, founded and run by Education Today for over 36 years, is expanding. The first of the new Vasant Valley Schools will open in Gurgaon and will be led by a team of experienced educators. The ethos, standards, and commitment to holistic development that define the founding campus will remain at the heart of every new campus.",
  },
];

const Announcements = () => {
  return (
    <main className="overflow-hidden bg-[#F7F4EF] text-[#211B1C]">

      {/* 
          HERO
       */}

      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20">

        <div className="flex items-center gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
            News / Notices / Updates
          </span>

          <div className="h-px flex-1 bg-[#DCD3CF]" />

          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-[#665D5E] sm:block">
            2026
          </span>
        </div>

        {/* Giant heading */}
        <div className="mt-16 lg:mt-20">

          <h1 className="announcement-left font-serif text-[clamp(4.2rem,11vw,10rem)] leading-[0.75] tracking-[-0.065em]">
            ANNOUNCE
          </h1>

          <div className="flex items-end justify-end">
            <h1 className="announcement-right font-serif text-[clamp(4.2rem,11vw,10rem)] italic leading-[0.8] tracking-[-0.065em] text-[#8E1731]">
              MENTS
            </h1>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-[#DCD3CF] pt-7 sm:flex-row sm:items-end sm:justify-between">

          <p className="max-w-[450px] text-[14px] leading-7 text-[#665D5E]">
            News, notices and important updates from the Vasant Valley
            School community.
          </p>

          <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8E1731]">
            Latest updates
            <ArrowDown size={14} />
          </div>

        </div>
      </section>

      {/* 
          MARQUEE
       */}

      <section className="rotate-[-1deg] scale-[1.02] overflow-hidden bg-[#8E1731] py-4 text-[#F7F4EF] sm:py-5">

        <div className="marquee-track flex w-max items-center whitespace-nowrap">

          {[1, 2].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
            >
              {[
                "LATEST NEWS",
                "VASANT VALLEY",
                "SCHOOL UPDATES",
                "ANNOUNCEMENTS",
                "NEW DELHI",
              ].map((text) => (
                <div
                  key={`${group}-${text}`}
                  className="flex items-center"
                >
                  <span className="px-7 font-serif text-[20px] italic sm:px-10 sm:text-[27px]">
                    {text}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#F7F4EF]" />
                </div>
              ))}
            </div>
          ))}

        </div>

      </section>

      {/* 
          ANNOUNCEMENT LIST
       */}

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mb-14 grid gap-6 lg:grid-cols-2">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
              01 / Latest
            </p>

            <h2 className="mt-5 font-serif text-[48px] leading-[0.95] tracking-[-0.04em] sm:text-[62px] lg:text-[72px]">
              What's
              <span className="block italic text-[#8E1731]">
                happening.
              </span>
            </h2>
          </div>

          <p className="max-w-[420px] self-end text-[14px] leading-7 text-[#665D5E] lg:ml-auto">
            Stay informed about academics, initiatives and developments
            across the Vasant Valley community.
          </p>

        </div>

        {/* Rows */}
        <div className="border-t border-[#CEC5C1]">

          {announcements.map((item) => (
            <article
              key={item.id}
              className="announcement-row group relative overflow-hidden border-b border-[#CEC5C1]"
            >

              {/* Giant hover number */}
              <span
                className="
                  pointer-events-none absolute
                  -right-4 top-1/2
                  -translate-y-1/2
                  font-serif
                  text-[160px]
                  leading-none
                  tracking-[-0.08em]
                  text-[#8E1731]
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:right-5
                  group-hover:opacity-[0.045]
                  sm:text-[220px]
                  lg:text-[300px]
                "
              >
                {item.id}
              </span>

              <div
                className="
                  relative z-10
                  grid gap-7
                  py-10
                  transition-all duration-500
                  group-hover:px-3
                  sm:py-12
                  lg:grid-cols-[100px_1fr_1fr_60px]
                  lg:items-start
                  lg:gap-8
                "
              >

                {/* Number */}
                <div>
                  <span className="font-serif text-[30px] italic text-[#8E1731]">
                    {item.id}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">

                    <span className="rounded-full border border-[#CFC5C2] px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8E1731]">
                      {item.category}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#817677]">
                      {item.date}
                    </span>

                  </div>

                  <h3
                    className="
                      max-w-[500px]
                      font-serif
                      text-[30px]
                      leading-[1.05]
                      tracking-[-0.025em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      sm:text-[38px]
                      lg:text-[42px]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p className="max-w-[520px] text-[13px] leading-7 text-[#665D5E] sm:text-[14px]">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    className="
                      mt-6 flex items-center gap-3
                      text-[9px] font-semibold
                      uppercase tracking-[0.22em]
                      text-[#8E1731]
                    "
                  >
                    Read More

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </button>
                </div>

                {/* Arrow desktop */}
                <div className="hidden justify-end lg:flex">

                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      border border-[#CFC5C2]
                      transition-all duration-500
                      group-hover:rotate-[-30deg]
                      group-hover:bg-[#8E1731]
                      group-hover:text-white
                    "
                  >
                    <ArrowRight size={16} />
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* 
          MOVING TYPOGRAPHY
       */}

      <section className="overflow-hidden border-y border-[#DCD3CF] py-16 lg:py-20">

        <div className="moving-word whitespace-nowrap">

          <p
            className="
              font-serif
              text-[clamp(4rem,10vw,9rem)]
              leading-none
              tracking-[-0.05em]
              text-[#211B1C]
            "
          >
            SCHOOL NEWS{" "}
            <span className="italic text-[#8E1731]">
              • STAY INFORMED •
            </span>{" "}
            SCHOOL NEWS{" "}
            <span className="italic text-[#8E1731]">
              • STAY INFORMED •
            </span>
          </p>

        </div>

      </section>

      {/* 
          FINAL CTA
       */}

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div
          className="
            relative overflow-hidden
            rounded-[30px]
            bg-[#211B1C]
            px-7 py-16
            text-[#F7F4EF]
            sm:px-12
            lg:px-16 lg:py-20
          "
        >

          {/* Background 2026 */}
          <span
            className="
              pointer-events-none
              absolute -bottom-16 right-0
              font-serif
              text-[170px]
              leading-none
              tracking-[-0.08em]
              text-white/[0.025]
              sm:text-[260px]
              lg:text-[350px]
            "
          >
            2026
          </span>

          <div className="relative z-10">

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#EBCDD2]">
              Vasant Valley School
            </p>

            <h2
              className="
                mt-6 max-w-[800px]
                font-serif
                text-[45px]
                leading-[0.98]
                tracking-[-0.04em]
                sm:text-[62px]
                lg:text-[75px]
              "
            >
              Stay connected with
              <span className="block italic text-[#EBCDD2]">
                life at Vasant Valley.
              </span>
            </h2>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Announcements;