import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

/* 
   SCROLL REVEAL
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
          element.classList.add("contact-visible");
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
      className={`contact-reveal contact-${direction} ${className}`}
      style={{ "--contact-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* 
   CONTACT
 */

const Contact = () => {
  return (
    <main className="overflow-hidden bg-[#F7F4EF] text-[#211B1C]">

      {/* 
          HERO
       */}

      <section className="relative mx-auto  max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">

        {/* top label */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
              Contact / Vasant Valley
            </span>

            <div className="h-px flex-1 bg-[#DCD3CF]" />

            <span className="hidden text-[9px] uppercase tracking-[0.25em] text-[#817677] sm:block">
              New Delhi · India
            </span>
          </div>
        </Reveal>

        {/* giant heading */}
        <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24">

  {/* CONTACT */}
  <div className="overflow-hidden">
    <h1
      className="
        contact-title-one
        font-serif

        text-[3.1rem]
        leading-[0.82]
        tracking-[-0.055em]

        min-[375px]:text-[3.6rem]
        min-[430px]:text-[4.1rem]

        sm:text-[5.8rem]
        sm:leading-[0.75]
        sm:tracking-[-0.065em]

        md:text-[7.5rem]

        lg:text-[9.5rem]
        lg:leading-[0.7]
        lg:tracking-[-0.075em]

        xl:text-[11.5rem]
        2xl:text-[13rem]
      "
    >
      CONTACT
    </h1>
  </div>

  {/* PIN + US */}
  <div
    className="
      mt-2
      flex items-center justify-end

      gap-3
      min-[430px]:gap-4
      sm:mt-3 sm:gap-5
      lg:mt-4 lg:gap-10
    "
  >

    {/* LOCATION PIN */}
    <div
      className="
        contact-pin

        flex h-9 w-9
        shrink-0
        items-center justify-center
        rounded-full
        bg-[#8E1731]
        text-white

        min-[375px]:h-10
        min-[375px]:w-10

        sm:h-14
        sm:w-14

        md:h-16
        md:w-16

        lg:h-20
        lg:w-20
      "
    >
      <MapPin
        className="
          h-4 w-4
          sm:h-5 sm:w-5
          lg:h-6 lg:w-6
        "
        strokeWidth={1.5}
      />
    </div>

    {/* US */}
    <div className="overflow-hidden">
      <h1
        className="
          contact-title-two
          font-serif italic
          text-[#8E1731]

          text-[3.1rem]
          leading-[0.82]
          tracking-[-0.055em]

          min-[375px]:text-[3.6rem]
          min-[430px]:text-[4.1rem]

          sm:text-[5.8rem]
          sm:leading-[0.75]
          sm:tracking-[-0.065em]

          md:text-[7.5rem]

          lg:text-[9.5rem]
          lg:leading-[0.7]
          lg:tracking-[-0.075em]

          xl:text-[11.5rem]
          2xl:text-[13rem]
        "
      >
        US
      </h1>
    </div>

  </div>
</div>

        {/* bottom hero */}
        <div className="mt-16 grid gap-10 border-t border-[#DCD3CF] pt-7 sm:mt-20 lg:grid-cols-2 pb-0">

          <Reveal direction="left" delay={350}>
            <p className="max-w-[430px] font-serif text-[25px] leading-[1.2] sm:text-[30px]">
              Questions, directions,
              <span className="italic text-[#8E1731]"> or just a hello.</span>
            </p>
          </Reveal>

          <Reveal direction="right" delay={450}>
            <div className="flex items-center gap-4 lg:justify-end">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8E1731]">
                Find us below
              </p>

              <div className="contact-scroll flex h-10 w-10 items-center justify-center rounded-full border border-[#D4CCCA]">
                <ArrowDown size={14} />
              </div>

            </div>
          </Reveal>

        </div>

      </section>

      {/* 
          ADDRESS / MAP
       */}

      <section className="mx-auto max-w-[1280px] px-5 pb-24 pt-0 sm:px-8 lg:px-12 lg:pb-36 ">

        <Reveal>
          <div className="flex items-center gap-4">

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
              01 / Visit
            </span>

            <div className="h-px flex-1 bg-[#DCD3CF]" />

          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

          {/* ADDRESS */}

          <Reveal direction="left">

            <div>

              <div className="contact-float-icon flex h-14 w-14 items-center justify-center rounded-full bg-[#8E1731] text-white">
                <MapPin size={21} strokeWidth={1.5} />
              </div>

              <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
                Vasant Valley School
              </p>

              <h2 className="mt-5 max-w-[520px] font-serif text-[42px] leading-[1.02] tracking-[-0.035em] sm:text-[55px] lg:text-[65px]">
                Sector C,
                <br />
                Vasant Kunj,
                <span className="block italic text-[#8E1731]">
                  New Delhi.
                </span>
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#665D5E]">
                110070 · India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Vasant+Valley+School+Vasant+Kunj+New+Delhi"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#211B1C] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8E1731]"
              >
                <Navigation size={14} />

                See Map

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>

          </Reveal>

          {/* ABSTRACT MAP */}

          <Reveal direction="scale" delay={150}>

            <div className="contact-map group relative min-h-[450px] overflow-hidden rounded-[32px] bg-[#E9E2DD] sm:min-h-[540px]">

              {/* grid */}
              <div className="contact-map-grid absolute inset-0" />

              {/* decorative roads */}

              <div className="absolute -left-[10%] top-[28%] h-px w-[125%] rotate-[12deg] bg-[#CFC5C0]" />

              <div className="absolute -left-[10%] top-[62%] h-px w-[125%] -rotate-[8deg] bg-[#CFC5C0]" />

              <div className="absolute left-[28%] top-[-10%] h-[120%] w-px rotate-[15deg] bg-[#CFC5C0]" />

              <div className="absolute right-[23%] top-[-10%] h-[120%] w-px -rotate-[11deg] bg-[#CFC5C0]" />

              {/* animated route */}
              <svg
                viewBox="0 0 600 500"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M60 420 C130 350, 120 260, 230 250 C350 240, 300 130, 470 100"
                  stroke="#8E1731"
                  strokeWidth="2"
                  strokeDasharray="7 9"
                  className="contact-route"
                />
              </svg>

              {/* destination */}

              <div className="absolute left-[70%] top-[16%] -translate-x-1/2">

                <div className="contact-map-pin relative flex h-16 w-16 items-center justify-center rounded-full bg-[#8E1731] text-white shadow-[0_15px_40px_rgba(142,23,49,0.25)]">
                  <MapPin size={23} />
                </div>

                <div className="mt-4 -translate-x-[30%] whitespace-nowrap rounded-full bg-[#F7F4EF] px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] shadow-sm">
                  Vasant Valley School
                </div>

              </div>

              {/* start */}

              <div className="absolute bottom-[12%] left-[8%]">

                <div className="h-3 w-3 rounded-full bg-[#211B1C]" />

                <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-[#665D5E]">
                  You
                </p>

              </div>

              {/* corner text */}

              <div className="absolute bottom-6 right-6 text-right">

                <p className="font-serif text-[24px] italic text-[#8E1731]">
                  Come say hello.
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-[#817677]">
                  Vasant Kunj · New Delhi
                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* 
          CALL / EMAIL
       */}

      <section className="bg-[#211B1C] text-[#F7F4EF]">

        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <Reveal>
            <div className="flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#EBCDD2]">
                02 / Get in touch
              </span>

              <div className="h-px flex-1 bg-white/15" />

            </div>
          </Reveal>

          <Reveal direction="up">

            <h2 className="mt-12 font-serif text-[48px] leading-[0.95] tracking-[-0.04em] sm:text-[65px] lg:text-[80px]">
              We're just a
              <span className="block italic text-[#EBCDD2]">
                call or click away.
              </span>
            </h2>

          </Reveal>

          {/* CALL */}

          <Reveal direction="left">

            <a
              href="tel:+911141767940"
              className="contact-action group relative mt-16 flex items-center gap-5 overflow-hidden border-t border-white/15 py-9 sm:gap-8 sm:py-12"
            >

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-[-12deg] group-hover:border-[#EBCDD2] group-hover:bg-[#EBCDD2] group-hover:text-[#211B1C] sm:h-14 sm:w-14">
                <Phone size={19} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 flex-1">

                <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Give us a call
                </p>

                <h3 className="mt-2 font-serif text-[26px] transition-transform duration-500 group-hover:translate-x-2 sm:text-[38px] lg:text-[48px]">
                  +91 11 41767940
                </h3>

              </div>

              <ArrowUpRight
                size={23}
                className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
              />

            </a>

          </Reveal>

          {/* EMAIL */}

          <Reveal direction="right" delay={100}>

            <a
              href="mailto:info@vasantvalley.edu.in"
              className="contact-action group relative flex items-center gap-5 overflow-hidden border-y border-white/15 py-9 sm:gap-8 sm:py-12"
            >

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-[12deg] group-hover:border-[#EBCDD2] group-hover:bg-[#EBCDD2] group-hover:text-[#211B1C] sm:h-14 sm:w-14">
                <Mail size={19} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 min-w-0 flex-1">

                <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Send us a note
                </p>

                <h3 className="mt-2 break-all font-serif text-[22px] transition-transform duration-500 group-hover:translate-x-2 sm:text-[34px] lg:text-[46px]">
                  info@vasantvalley.edu.in
                </h3>

              </div>

              <ArrowUpRight
                size={23}
                className="relative z-10 hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 sm:block"
              />

            </a>

          </Reveal>

        </div>

      </section>

      {/* 
          FINAL MINIMAL SECTION
       */}

      <section className="relative overflow-hidden bg-[#8E1731]">

        <div className="contact-orbit absolute left-[-120px] top-[-160px] h-[400px] w-[400px] rounded-full border border-white/10" />

        <div className="contact-orbit-two absolute bottom-[-240px] right-[-180px] h-[550px] w-[550px] rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          <Reveal>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white">
              <MapPin size={20} strokeWidth={1.5} />
            </div>

          </Reveal>

          <Reveal direction="up" delay={120}>

            <h2 className="mx-auto mt-8 max-w-[900px] font-serif text-[48px] leading-[0.95] tracking-[-0.045em] text-[#F7F4EF] sm:text-[65px] lg:text-[82px]">
              See you at
              <span className="block italic text-[#EBCDD2]">
                Vasant Valley.
              </span>
            </h2>

          </Reveal>

          <Reveal delay={250}>

            <p className="mx-auto mt-7 max-w-[430px] text-[12px] leading-6 text-white/55 sm:text-[13px]">
              Sector C, Vasant Kunj
              <span className="mx-2">·</span>
              New Delhi 110070
              <span className="mx-2">·</span>
              India
            </p>

          </Reveal>

        </div>

      </section>

    </main>
  );
};

export default Contact;