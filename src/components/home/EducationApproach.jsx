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
  return (
    <section className="bg-[#F7F4EF] px-4 py-16 sm:px-6 sm:py-20 lg:pt-0 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <div className="mb-8 flex items-center gap-4">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E1731] sm:text-[11px]">
            02 / Our Approach
          </span>

          <div className="h-px flex-1 bg-[#DCD3CF]" />
        </div>

        {/* Main feature card */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#8E1731] p-5 sm:p-8 md:p-10 lg:rounded-[36px] lg:p-12">

          {/* Background decorative text */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-5 font-serif text-[100px] font-semibold leading-none text-white/[0.025] sm:text-[160px] lg:text-[230px]"
          >
            VVS
          </span>

          {/* Top heading */}
          <div className="relative mx-auto max-w-[800px] text-center">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#EBCDD2] sm:text-[11px]">
              The Vasant Valley Experience
            </p>

            <h2 className="font-serif text-[38px] font-medium leading-[1.05] tracking-[-0.035em] text-[#F7F4EF] sm:text-[48px] md:text-[58px] lg:text-[68px]">
              What shapes a
              <span className="block italic text-[#EBCDD2]">
                Vasant Valley education?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[590px] text-sm leading-6 text-[#F7F4EF]/70 sm:text-[15px] sm:leading-7">
              Learning here is shaped by curiosity, creativity, character and
              the freedom to explore ideas beyond the classroom.
            </p>
          </div>

          {/* Pills */}
          <div className="relative mx-auto mt-10 flex max-w-[900px] flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4">
            {values.map((value) => (
              <div
                key={value.label}
                className={`
                  ${value.style}
                  cursor-default rounded-full
                  px-4 py-2.5
                  text-[11px] font-semibold
                  shadow-[0_5px_15px_rgba(30,10,15,0.08)]
                  transition-all duration-300
                  hover:rotate-0 hover:-translate-y-1
                  sm:px-5 sm:py-3 sm:text-xs
                  md:px-6 md:text-[13px]
                `}
              >
                {value.label}
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative mt-12 sm:mt-14">

            {/* Decorative image layer */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[24px] border border-[#EBCDD2]/30 sm:-right-4 sm:-top-4"
            />

            <div className="relative h-[280px] overflow-hidden rounded-[22px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
              <img
                src="/src/assets/images/educationapproach.jpeg"
                alt="Students learning together at Vasant Valley School"
                className="h-full w-full object-cover transition-transform duration-[1000ms] hover:scale-[1.025]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211B1C]/60 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[430px]">
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

          {/* Bottom */}
          <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
            <p>Curiosity · Character · Creativity</p>
            <p>Learning beyond boundaries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationApproach;