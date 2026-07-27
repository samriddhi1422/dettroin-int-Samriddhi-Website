import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

/* 
   REVEAL COMPONENT
 */

const Reveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("vision-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`vision-reveal vision-${direction} ${className}`}
      style={{ "--vision-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* 
   VISION PAGE
 */

const Vision = () => {
  return (
    <main className="overflow-hidden bg-[#F7F4EF] text-[#211B1C]">

      {/* 
          HERO — OUR VISION
       */}

      <section className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-14 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">

        {/* Top label */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
              01 / Vision & Philosophy
            </span>

            <div className="h-px flex-1 bg-[#DCD3CF]" />
          </div>
        </Reveal>

        {/* Giant Typography */}
        <div className="relative mt-14 text-center sm:mt-16 lg:mt-20">

          <Reveal delay={100}>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#8E1731]">
              Vasant Valley School
            </p>
          </Reveal>

          <div className="overflow-hidden">
            <h1
              className="
                vision-hero-our
                font-serif
                text-[clamp(5rem,14vw,13rem)]
                leading-[0.72]
                tracking-[-0.07em]
              "
            >
              OUR
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1
              className="
                vision-hero-vision
                font-serif italic
                text-[clamp(5rem,14vw,13rem)]
                leading-[0.8]
                tracking-[-0.07em]
                text-[#8E1731]
              "
            >
              VISION
            </h1>
          </div>

        </div>

        {/* Tagline */}
        <Reveal delay={400}>
          <div className="mt-14 flex justify-center sm:mt-16">

            <div className="max-w-[620px] text-center">

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8E1731]">
                Education in its finest form
              </p>

              <p className="mx-auto mt-5 max-w-[480px] text-[14px] leading-7 text-[#665D5E]">
                Every child entrusted to us deserves an education that nurtures
                the mind, strengthens the body and enriches the spirit.
              </p>

            </div>

          </div>
        </Reveal>

        <Reveal delay={550}>
          <div className="mt-12 flex justify-center">

            <ArrowDown
              size={17}
              className="vision-arrow-bounce text-[#8E1731]"
            />

          </div>
        </Reveal>

      </section>

      {/* 
          LIFELONG LEARNING
       */}

      <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">

        <Reveal>
          <div className="mb-12 flex items-center gap-4">

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
              Learning / Growth / Discovery
            </span>

            <div className="h-px flex-1 bg-[#DCD3CF]" />

          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">

          {/* IMAGE */}

          <Reveal direction="scale">

            <div className="relative">

              <div
                className="
                  group overflow-hidden
                  rounded-t-[160px]
                  rounded-b-[28px]
                  sm:rounded-t-[220px]
                "
              >

                <img
                  src="/src/assets/images/vision.jpg"
                  alt="Student at Vasant Valley School"
                  className="
                    h-[500px] w-full object-cover
                    transition-transform duration-[1600ms]
                    group-hover:scale-[1.04]
                    sm:h-[620px]
                    lg:h-[720px]
                  "
                />

              </div>

              <div
                className="
                  vision-floating-badge
                  absolute -bottom-5 right-4
                  rounded-full bg-[#8E1731]
                  px-5 py-3 text-[9px]
                  uppercase tracking-[0.22em]
                  text-white
                  sm:right-[-25px]
                "
              >
                Learning never stops
              </div>

            </div>

          </Reveal>

          {/* TEXT */}

          <Reveal direction="right" delay={150}>

            <div className="lg:pl-4">

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E1731]">
                01
              </span>

              <h2
                className="
                  mt-5 max-w-[600px]
                  font-serif
                  text-[45px]
                  leading-[0.98]
                  tracking-[-0.04em]
                  sm:text-[60px]
                  lg:text-[72px]
                "
              >
                Learning is a

                <span className="block italic text-[#8E1731]">
                  lifelong process.
                </span>

              </h2>

              <p className="mt-8 max-w-[500px] text-[15px] leading-8 text-[#665D5E]">
                We at Vasant Valley School believe that each child entrusted to
                us will receive education in its finest form.
              </p>

              <p className="mt-5 max-w-[500px] text-[15px] leading-8 text-[#665D5E]">
                All students and teachers are challenged to exceed their own
                expectations — constantly learning, questioning, discovering
                and growing.
              </p>

              <div className="mt-10 flex items-center gap-3">

                <div className="vision-line-grow h-px w-12 bg-[#8E1731]" />

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#8E1731]">
                  Beyond expectations
                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* 
          MIND BODY SPIRIT
       */}

      <section className="overflow-hidden bg-[#211B1C] text-[#F7F4EF]">

        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

          <Reveal>
            <div className="flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#EBCDD2]">
                02 / The Whole Individual
              </span>

              <div className="h-px flex-1 bg-white/15" />

            </div>
          </Reveal>

          <div className="mt-16">

            <Reveal>
              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
                A holistic experience
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>

              <h2
                className="
                  mt-7 text-center font-serif
                  text-[clamp(4rem,11vw,10rem)]
                  leading-[0.85]
                  tracking-[-0.06em]
                "
              >
                MIND
              </h2>

            </Reveal>

            <div
              className="
                mt-4 flex flex-col items-center justify-center
                gap-1
                sm:flex-row sm:gap-10
                lg:gap-20
              "
            >

              <Reveal direction="left" delay={180}>

                <span
                  className="
                    block font-serif italic
                    text-[clamp(3.5rem,9vw,8rem)]
                    leading-none text-[#EBCDD2]
                  "
                >
                  Body
                </span>

              </Reveal>

              <Reveal delay={320}>

                <span className="hidden h-px w-16 bg-white/20 sm:block" />

              </Reveal>

              <Reveal direction="right" delay={240}>

                <span
                  className="
                    block font-serif italic
                    text-[clamp(3.5rem,9vw,8rem)]
                    leading-none text-[#EBCDD2]
                  "
                >
                  Spirit
                </span>

              </Reveal>

            </div>

          </div>

          <Reveal delay={350}>

            <p
              className="
                mx-auto mt-14 max-w-[620px]
                text-center text-[14px]
                leading-7 text-white/55
              "
            >
              This is a holistic experience that synergises the growth of mind,
              body and spirit — allowing every student to grow not only
              academically, but as an individual.
            </p>

          </Reveal>

        </div>

      </section>

      {/* 
          TORCHBEARERS
       */}

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          <Reveal direction="left">

            <div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E1731]">
                03 / Tomorrow
              </span>

              <h2
                className="
                  mt-6 font-serif
                  text-[50px]
                  leading-[0.95]
                  tracking-[-0.04em]
                  sm:text-[70px]
                  lg:text-[85px]
                "
              >
                Torchbearers

                <span className="block italic text-[#8E1731]">
                  of tomorrow.
                </span>

              </h2>

            </div>

          </Reveal>

          <Reveal direction="right" delay={160}>

            <div className="self-end">

              <p className="text-[15px] leading-8 text-[#665D5E]">
                We nurture and prepare generations of individuals who believe in
                the strength of their own convictions and take pride in being
                Indian.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#665D5E]">
                They will work together in the spirit of Global Citizenship,
                carrying confidence in who they are while remaining open to the
                world around them.
              </p>

            </div>

          </Reveal>

        </div>

        {/* ROOTED / GLOBAL */}

        <div className="mt-20 border-y border-[#DCD3CF]">

          <div className="grid sm:grid-cols-2">

            <Reveal direction="left">

              <div
                className="
                  group border-b border-[#DCD3CF]
                  py-12
                  sm:border-b-0 sm:border-r
                  sm:pr-10
                  lg:py-16
                "
              >

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E1731]">
                  Identity
                </span>

                <h3
                  className="
                    mt-4 font-serif
                    text-[45px] leading-none
                    transition-transform duration-500
                    group-hover:translate-x-2
                    sm:text-[55px]
                    lg:text-[65px]
                  "
                >
                  Rooted

                  <span className="block italic text-[#8E1731]">
                    in India.
                  </span>

                </h3>

              </div>

            </Reveal>

            <Reveal direction="right" delay={140}>

              <div className="group py-12 sm:pl-10 lg:py-16">

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E1731]">
                  Citizenship
                </span>

                <h3
                  className="
                    mt-4 font-serif
                    text-[45px] leading-none
                    transition-transform duration-500
                    group-hover:translate-x-2
                    sm:text-[55px]
                    lg:text-[65px]
                  "
                >
                  Global

                  <span className="block italic text-[#8E1731]">
                    in outlook.
                  </span>

                </h3>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* 
          PHILOSOPHY
       */}

      <section className="overflow-hidden bg-[#EAE4DF]">

        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E1731]">
                04 / Our Philosophy
              </span>

              <div className="h-px flex-1 bg-[#CCC2BE]" />

            </div>

          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">

            <div>

              <Reveal direction="left">

                <h2
                  className="
                    font-serif
                    text-[clamp(4.5rem,10vw,9rem)]
                    leading-[0.78]
                    tracking-[-0.06em]
                  "
                >
                  OUR
                </h2>

              </Reveal>

              <Reveal direction="right" delay={120}>

                <h2
                  className="
                    font-serif italic
                    text-[clamp(4.5rem,10vw,9rem)]
                    leading-[0.85]
                    tracking-[-0.06em]
                    text-[#8E1731]
                  "
                >
                  PHILOSOPHY
                </h2>

              </Reveal>

            </div>

            <Reveal direction="right" delay={220}>

              <p className="max-w-[500px] text-[15px] leading-8 text-[#665D5E]">
                Our work in school shapes the future. Education gives young
                people the confidence to think independently, the courage to
                challenge themselves and the responsibility to contribute to the
                world around them.
              </p>

            </Reveal>

          </div>

          {/* IMAGE */}

          <div className="relative mt-16">

            <Reveal direction="scale">

              <div className="group overflow-hidden rounded-[28px] lg:rounded-[40px]">

                <img
                  src="/src/assets/images/phi.jpg"
                  alt="Life at Vasant Valley School"
                  className="
                    h-[380px] w-full object-cover
                    transition-transform duration-[1600ms]
                    group-hover:scale-[1.035]
                    sm:h-[520px]
                    lg:h-[650px]
                  "
                />

              </div>

            </Reveal>

            <Reveal
              direction="up"
              delay={250}
              className="
                relative mx-4 -mt-16
                sm:ml-auto sm:mr-10 sm:max-w-[520px]
                lg:-mt-24 lg:mr-16
              "
            >

              <div
                className="
                  group rounded-[24px]
                  bg-[#F7F4EF]
                  p-7
                  shadow-[0_20px_60px_rgba(33,27,28,0.08)]
                  transition-transform duration-500
                  hover:-translate-y-2
                  sm:p-10
                "
              >

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E1731]">
                  Excellence in Deed
                </span>

                <p
                  className="
                    mt-5 font-serif
                    text-[35px]
                    leading-[1.05]
                    tracking-[-0.03em]
                    sm:text-[46px]
                  "
                >
                  No constraints

                  <span className="block italic text-[#8E1731]">
                    shall daunt us.
                  </span>

                </p>

                <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#8E1731]">

                  Vasant Valley School

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* 
          FINAL STATEMENT
       */}

      <section className="relative overflow-hidden bg-[#8E1731]">

        {/* Decorative circles */}
        <div className="vision-circle absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full border border-white/10" />

        <div className="vision-circle-delayed absolute -bottom-52 -right-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div
          className="
            relative z-10
            mx-auto max-w-[1280px]
            px-5 py-24
            text-center
            sm:px-8 sm:py-28
            lg:px-12 lg:py-36
          "
        >

          <Reveal>

            <p className="text-[9px] uppercase tracking-[0.35em] text-white/55">
              Vision · Purpose · Future
            </p>

          </Reveal>

          <Reveal direction="up" delay={120}>

            <h2
              className="
                mx-auto mt-8 max-w-[1000px]
                font-serif
                text-[45px]
                leading-[0.98]
                tracking-[-0.04em]
                text-[#F7F4EF]
                sm:text-[65px]
                lg:text-[85px]
              "
            >
              What we nurture today

              <span className="block italic text-[#EBCDD2]">
                shapes tomorrow.
              </span>

            </h2>

          </Reveal>

        </div>

      </section>

    </main>
  );
};

export default Vision;