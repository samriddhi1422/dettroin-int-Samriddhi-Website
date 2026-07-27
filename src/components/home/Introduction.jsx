import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const Introduction = () => {
  return (
    <section
      id="discover"
  className="bg-[#F7F4EF] px-4 py-20 pt-0 pb-0 sm:px-6  sm-pt-10 lg:px-8 lg:py-32 lg-pt-0 lg-pb-0"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8E1731]">
            01 / About Vasant Valley
          </span>

          <div className="h-px flex-1 bg-[#DCD3CF]" />
        </div>

        {/* Main heading */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <h2 className="max-w-[850px] font-serif text-[42px] font-medium leading-[1.05] tracking-[-0.035em] text-[#211B1C] sm:text-[54px] md:text-[64px] lg:text-[72px]">
              Education that goes
              <span className="block italic text-[#8E1731]">
                beyond the classroom.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[380px] text-sm leading-7 text-[#766C6D] sm:text-[15px]">
              A learning environment built around curiosity, independent
              thinking, creativity and responsible citizenship.
            </p>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 md:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            {/* Decorative block */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-[55%] w-[40%] rounded-[24px] bg-[#EBCDD2] sm:-bottom-6 sm:-left-6"
            />

            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="/src/assets/images/intoduction.png"
                alt="Students at Vasant Valley School"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-[1.025] sm:h-[450px] lg:h-[560px]"
              />

              {/* Small label over image */}
              <div className="absolute bottom-4 right-4 rounded-full bg-[#F7F4EF]/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8E1731] backdrop-blur sm:bottom-6 sm:right-6">
                Learn · Explore · Grow
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <span className="font-serif text-5xl leading-none text-[#8E1731]/25">
              “
            </span>

            <h3 className="mt-1 max-w-[500px] font-serif text-[28px] font-medium leading-[1.25] tracking-[-0.02em] text-[#211B1C] sm:text-[34px]">
              Encouraging students to push the boundaries of current
              understanding.
            </h3>

            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-[#665D5E]">
              At Vasant Valley School, learning extends beyond academic
              achievement. Students are encouraged to question, explore ideas
              and develop the confidence to think independently.
            </p>

            <p className="mt-4 max-w-[500px] text-[15px] leading-7 text-[#665D5E]">
              The school aims to nurture ethical values, originality and a
              strong sense of responsibility while preparing students to
              participate thoughtfully in an increasingly connected world.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#8E1731] pb-1.5 text-sm font-semibold text-[#8E1731]"
            >
              Discover Our Story

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;