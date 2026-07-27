import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Plus,
  Minus,
} from "lucide-react";

const founders = [
  {
    name: "Rekha Purie",
    role: "Chairperson",
    image: "/src/assets/images/Rekha-Purie-1.jpg",
  },
  {
    name: "Aroon Purie",
    role: "Founder",
    image: "/src/assets/images/Aroon-Purie-2.jpg",
  },
];

const legacyLeaders = [
  {
    name: "Ranu Dattagupta",
    roles: ["Principal · 1998 — 1999", "Head of Senior School · 1997 — 1999"],
  },
  {
    name: "Paramjit Kaur Narang",
    roles: [
      "Head of School · 2001 — 2002",
      "Head of Senior School · 2000 — 2001",
      "Head of Junior School · 1993 — 2000",
    ],
  },
  {
    name: "Peilu Oberoi",
    roles: ["Principal · 2000 — 2006", "Head of Junior School · 2000 — 2006"],
  },
  {
    name: "Rekha Bakshi",
    roles: ["Head of Junior School · 2006 — 2019"],
  },
  {
    name: "Abha Ranjan",
    roles: ["Head of Special Section · 1997 — 2002"],
  },
  {
    name: "Shalini Dave",
    roles: ["Head of Special Section · 2002 — 2012"],
  },
  {
    name: "Sushmita Mitra",
    roles: ["Head of Special Section · 2012 — 2022"],
  },
  {
    name: "Rekha Krishnan",
    roles: ["Principal · 2006 — March 2025"],
  },
];

const currentLeadership = [
  {
    name: "Vijay Trivedi",
    role: "Head of Senior School",
    image: "/src/assets/images/vijay_trivedi_2-scaled.jpeg",
  },
  {
    name: "Mona Datta",
    role: "Head of Junior School",
    image: "/src/assets/images/mona-dutta.jpg",
  },
  {
    name: "A. P. John",
    role: "Administrative Head",
    image: "/src/assets/images/john.jpg",
  },
];

const developmentAreas = [
  ["01", "Cerebral"],
  ["02", "Creative"],
  ["03", "Physical"],
  ["04", "Social-Emotional"],
  ["05", "Spiritual"],
];

const About = () => {
  const [openLeader, setOpenLeader] = useState(null);

  return (
    <main className="overflow-hidden bg-[#F7F4EF] text-[#211B1C]">

      {/* 
          HERO
       */}

      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8E1731]">
            01 / About Vasant Valley
          </span>

          <div className="h-px flex-1 bg-[#DCD3CF]" />
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="relative z-10">
            <h1 className="font-sans text-[clamp(5.5rem,12vw,11rem)] font-semibold leading-[0.72] tracking-[-0.08em] mr-15">
              ABOUT
              <span className="block">US</span>
            </h1>

            <p className="mt-10 max-w-[340px] text-[14px] leading-7 text-[#665D5E] sm:text-[15px]">
              A school built around curiosity, character, creativity and the
              belief that education reaches far beyond the classroom.
            </p>
          </div>

          <div className="relative lg:-ml-12">
            <div className="h-[350px] overflow-hidden rounded-[28px] sm:h-[480px] lg:h-[570px] lg:rounded-[40px]">
              <img
                src="/src/assets/images/staff.jpg"
                alt="Vasant Valley School"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 rounded-full bg-[#F7F4EF]/90 px-5 py-3 backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8E1731]">
                New Delhi · India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#8E1731]">
            Discover our story
            <ArrowDown size={14} />
          </div>
        </div>
      </section>

      {/*
          OUR BEGINNING
       */}

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel number="02" title="Our Beginning" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <h2 className="font-serif text-[46px] leading-[0.98] tracking-[-0.04em] sm:text-[60px] lg:text-[76px]">
            Built around a
            <span className="block italic text-[#8E1731]">
              different idea
            </span>
            of education.
          </h2>

          <div className="max-w-[540px] space-y-6 self-end text-[15px] leading-8 text-[#665D5E]">
            <p>
              Run by the Education Today Trust, Vasant Valley School is the
              realisation of Mr. Aroon Purie and Mrs. Rekha Purie&apos;s vision
              of the ideal school experience for children.
            </p>

            <p>
              They envisioned a learning experience in which the Arts and
              Sports are as important as academic learning — a place where
              being a good citizen was more important than simply being a good
              student.
            </p>

            <p>
              Vasant Valley School aims to nurture independent minds and create
              a space where students are encouraged to actualise their innate
              and unique potential.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] lg:mt-24 lg:rounded-[40px]">
          <img
            src="/src/assets/images/educationapproach.jpeg"
            alt="Students learning at Vasant Valley School"
            className="h-[320px] w-full object-cover sm:h-[480px] lg:h-[620px]"
          />
        </div>
      </section>

      {/* 
          STATEMENT
       */}

      <section className="bg-[#8E1731]">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
            What matters
          </p>

          <div className="mt-10">
            <h2 className="font-serif text-[55px] leading-[0.95] tracking-[-0.04em] text-[#F7F4EF] sm:text-[75px] lg:text-[105px]">
              Not simply
              <br />
              good students.
            </h2>

            <h2 className="mt-5 text-right font-serif text-[60px] italic leading-none tracking-[-0.04em] text-[#EBCDD2] sm:text-[85px] lg:text-[120px]">
              Good citizens.
            </h2>
          </div>
        </div>
      </section>

      {/*
          FOUNDERS
      */}

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <SectionLabel number="03" title="The Founders" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="max-w-[600px] font-serif text-[48px] leading-[1] tracking-[-0.04em] sm:text-[64px] lg:text-[76px]">
              The vision behind
              <span className="block italic text-[#8E1731]">
                Vasant Valley.
              </span>
            </h2>
          </div>

          <p className="max-w-[500px] self-end text-[15px] leading-8 text-[#665D5E]">
            Vasant Valley grew from a belief that academic excellence should
            exist alongside creativity, sport, character and responsible
            citizenship.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-20">
          {founders.map((person, index) => (
            <div
              key={person.name}
              className={index === 1 ? "md:mt-28" : ""}
            >
              <div className="group overflow-hidden rounded-[28px] bg-[#E7E0DC]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[580px]"
                />
              </div>

              <div className="mt-6 flex items-end justify-between border-b border-[#DCD3CF] pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8E1731]">
                    {person.role}
                  </p>

                  <h3 className="mt-2 font-serif text-[30px]">
                    {person.name}
                  </h3>
                </div>

                <ArrowRight size={18} className="text-[#8E1731]" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-[620px] text-[15px] leading-8 text-[#665D5E] lg:ml-auto">
          Mrs. Rekha Purie is the Chairperson of Vasant Valley School. Together,
          Mr. and Mrs. Purie envisioned an environment that would give children
          the freedom and opportunity to discover their individual potential.
        </p>
      </section>

      {/*
          THE SCHOOL
      */}

      <section className="bg-[#211B1C] text-[#F7F4EF]">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#EBCDD2]">
              04 / Shaping a School
            </span>

            <div className="h-px flex-1 bg-white/15" />
          </div>

          <h2 className="mt-12 max-w-[750px] font-serif text-[50px] leading-none tracking-[-0.04em] sm:text-[68px] lg:text-[82px]">
            A vision shaped
            <span className="block italic text-[#EBCDD2]">by people.</span>
          </h2>

          <div className="relative mt-20 lg:mt-28">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/20 lg:left-1/2" />

           {/* Ved Vyas */}
<div className="relative grid gap-8 pb-20 pl-10 lg:grid-cols-2 lg:gap-24 lg:pl-0">

  {/* Image */}
  <div className="lg:pr-16">
    <div className="max-w-[420px] overflow-hidden rounded-[24px] sm:rounded-[28px] lg:ml-auto">
      <img
        src="/src/assets/images/Ved-Vyas-1-1.jpg"
        alt="Ved Vyas"
        className="
          h-[360px] w-full object-cover
          sm:h-[430px]
          lg:h-[480px]
        "
      />
    </div>
  </div>

  {/* Content */}
  <div className="lg:pl-16">
    <span
      className="
        absolute left-0 top-1
        h-[15px] w-[15px]
        rounded-full border-4
        border-[#211B1C]
        bg-[#EBCDD2]
        lg:left-1/2
        lg:-translate-x-1/2
      "
    />

    <p className="text-[10px] uppercase tracking-[0.25em] text-[#EBCDD2]">
      The early years
    </p>

    <h3 className="mt-4 font-serif text-[40px] sm:text-[50px]">
      Mr. Ved Vyas
    </h3>

    <div className="mt-6 max-w-[480px] space-y-5 text-[14px] leading-7 text-white/65">
      <p>
        Founder-Principal of Modern School, Vasant Vihar, Mr. Vyas
        worked closely with Mr. and Mrs. Purie during the initial
        years to establish Vasant Valley&apos;s vision and philosophy.
      </p>

      <p>
        His love for Arts and Literature is reflected in the core
        curriculum of the School. He also wrote the lyrics of the
        School Song, &ldquo;Shreshtha Tamaya Karmane&rdquo; —
        Excellence in Deed.
      </p>
    </div>
  </div>
</div>

            {/* Arun Kapur */}
            <div className="relative grid pl-10 lg:grid-cols-2 lg:gap-24 lg:pl-0">
              <div className="lg:pr-16 lg:text-right">
                <span className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-4 border-[#211B1C] bg-[#EBCDD2] lg:left-1/2 lg:-translate-x-1/2" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#EBCDD2]">
                  1990 — 2020
                </p>

                <h3 className="mt-4 font-serif text-[40px] sm:text-[50px]">
                  Mr. Arun Kapur
                </h3>

                <div className="mt-6 max-w-[480px] space-y-5 text-[14px] leading-7 text-white/65 lg:ml-auto">
                  <p>
                    Mr. Arun Kapur was appointed the first Headmaster of Vasant
                    Valley School in 1990.
                  </p>

                  <p>
                    Along with the initial group of 16 teachers, he ensured the
                    implementation of the School&apos;s vision and continued to
                    head the School for the next 30 years, until his retirement
                    in 2020.
                  </p>

                  <p>
                    Under his leadership, Vasant Valley grew from strength to
                    strength and gained recognition as one of India&apos;s foremost
                    coeducational day schools.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 lg:pl-16">
                <div className="max-w-[420px] overflow-hidden rounded-[28px]">
                  <img
                    src="/src/assets/images/Arun-Kapur-1.jpg"
                    alt="Arun Kapur"
                    className="h-[480px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
          LEGACY LEADERSHIP
     */}

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <SectionLabel number="05" title="Our Legacy" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <h2 className="font-serif text-[48px] leading-none tracking-[-0.04em] sm:text-[65px] lg:text-[76px]">
            The people who
            <span className="block italic text-[#8E1731]">
              carried it forward.
            </span>
          </h2>

          <p className="max-w-[500px] self-end text-[15px] leading-8 text-[#665D5E]">
            The School stands proud and tall on the shoulders of those who have
            strengthened the motto of Excellence in Deed over the years.
          </p>
        </div>

        <div className="mt-16 border-t border-[#D4CCCA]">
          {legacyLeaders.map((leader, index) => {
            const isOpen = openLeader === index;

            return (
              <div
                key={leader.name}
                className="border-b border-[#D4CCCA]"
              >
                <button
                  type="button"
                  onClick={() => setOpenLeader(isOpen ? null : index)}
                  className="group flex w-full items-center gap-4 py-6 text-left sm:py-8"
                >
                  <span className="w-8 text-[10px] tracking-[0.2em] text-[#8E1731]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="flex-1 font-serif text-[25px] transition-transform duration-300 group-hover:translate-x-2 sm:text-[34px]">
                    {leader.name}
                  </h3>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CFC5C2]">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-12 sm:pb-9">
                      {leader.roles.map((role) => (
                        <p
                          key={role}
                          className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[#756B6C]"
                        >
                          {role}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 
          CURRENT LEADERSHIP
      */}

      <section className="bg-[#EAE4DF]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <SectionLabel number="06" title="Leadership Today" />

          <h2 className="mt-12 max-w-[800px] font-serif text-[48px] leading-none tracking-[-0.04em] sm:text-[65px] lg:text-[78px]">
            Guiding the school,
            <span className="block italic text-[#8E1731]">today.</span>
          </h2>

          {/* Principal */}
          <div className="mt-16 grid overflow-hidden rounded-[30px] bg-[#F7F4EF] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-h-[450px] lg:min-h-[600px]">
              <img
                src="/src/assets/images/sharmila.jpg"
                alt="Sharmila Bakshi"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8E1731]">
                Principal
              </p>

              <div className="mt-20 lg:mt-0">
                <h3 className="font-serif text-[45px] leading-none sm:text-[60px]">
                  Sharmila
                  <span className="block italic text-[#8E1731]">
                    Bakshi
                  </span>
                </h3>

                <p className="mt-6 max-w-[390px] text-[14px] leading-7 text-[#665D5E]">
                  Leading Vasant Valley School and its community of students,
                  educators and staff.
                </p>
              </div>
            </div>
          </div>

          {/* Other leaders */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {currentLeadership.map((person) => (
              <div key={person.name} className="group">
                <div className="overflow-hidden rounded-[24px] bg-[#DCD4CF]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-[390px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#8E1731]">
                    {person.role}
                  </p>

                  <h3 className="mt-2 font-serif text-[26px]">
                    {person.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-[780px] text-[14px] leading-7 text-[#665D5E]">
            Each domain area has a Head of Department and the ten Heads of
            Department work closely with the Leadership Team to ensure an
            optimal school experience. Coordinators across year groups help
            execute the School&apos;s plans and processes.
          </p>
        </div>
      </section>

      {/* 
          DEVELOPMENT AREAS
      */}

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <SectionLabel number="07" title="How We Work" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-[50px] leading-none tracking-[-0.04em] sm:text-[68px]">
              One school.
              <span className="block italic text-[#8E1731]">
                Five dimensions.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[14px] leading-7 text-[#665D5E]">
              The curriculum, both academic and non-academic, is structured
              around the Areas of Development, helping nurture the whole child.
            </p>
          </div>

          <div className="border-t border-[#D4CCCA]">
            {developmentAreas.map(([number, title]) => (
              <div
                key={number}
                className="group flex items-center border-b border-[#D4CCCA] py-6 sm:py-7"
              >
                <span className="w-14 text-[10px] tracking-[0.2em] text-[#8E1731]">
                  {number}
                </span>

                <h3 className="flex-1 font-serif text-[27px] transition-transform duration-300 group-hover:translate-x-2 sm:text-[35px]">
                  {title}
                </h3>

                <ArrowRight
                  size={17}
                  className="text-[#8E1731] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid border-y border-[#D4CCCA] sm:grid-cols-3">
          <Stat value="150+" label="Teachers" />
          <Stat value="10" label="Heads of Department" />
          <Stat value="5" label="Development Areas" />
        </div>
      </section>

      {/*
          STAFF
       */}

      <section className="bg-[#211B1C] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#EBCDD2]">
              08 / Our Staff
            </span>

            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <h2 className="font-serif text-[60px] leading-[0.95] tracking-[-0.04em] sm:text-[80px] lg:text-[100px]">
              Learning
              <span className="block italic text-[#EBCDD2]">
                never stops.
              </span>
            </h2>

            <p className="max-w-[470px] self-end text-[14px] leading-7 text-white/60">
              Our staff is a diverse group of individuals with a strong sense
              of commitment and a passion for learning. More than 150 teachers
              bring expertise as educators, writers, musicians, theatre
              artists, sportspersons, professionals and mentors.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-[28px]">
            <img
              src="/src/assets/images/staff.jpg"
              alt="Vasant Valley School staff"
              className="h-[350px] w-full object-cover sm:h-[500px] lg:h-[620px]"
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#EBCDD2]">
                Teacher Enrichment Programme
              </p>

              <h3 className="mt-5 font-serif text-[35px] leading-tight sm:text-[45px]">
                Growth for those who help others grow.
              </h3>
            </div>

            <div className="space-y-5 text-[14px] leading-7 text-white/60">
              <p>
                The Teacher Enrichment Programme helps teachers access a vast
                storehouse of skills and knowledge to enhance both their
                professional and personal growth.
              </p>

              <p>
                Teachers are encouraged to attend courses and workshops across
                the world to understand global best practices and share their
                learning with colleagues and students.
              </p>

              <p>
                Training ranges from classroom practices, learning styles,
                pedagogy and counselling to Art and Literature, Yoga and
                Mindfulness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
          ALUMNI
       */}

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <SectionLabel number="09" title="Alumni" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="font-serif text-[110px] leading-none tracking-[-0.06em] text-[#8E1731] sm:text-[150px] lg:text-[190px]">
              2000+
            </p>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#665D5E]">
              Graduates since 1999
            </p>
          </div>

          <div className="self-end">
            <h2 className="font-serif text-[45px] leading-none tracking-[-0.04em] sm:text-[60px]">
              From Vasant Valley
              <span className="block italic text-[#8E1731]">
                to the world.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[14px] leading-7 text-[#665D5E]">
              Since 1999, over 2000 students have graduated from the school and
              found their calling across the world. Their school experience
              has created bonds that have remained strong, and some alumni are
              now parents whose children form the next generation of the
              Vasant Valley community.
            </p>

            <a
              href="mailto:alumni@vasantvalley.edu.in"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#8E1731] px-6 py-3.5 text-[12px] font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <Mail size={15} />

              Connect with Alumni

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E1731]">
            1999
          </span>

          <div className="relative h-px flex-1 bg-[#D4CCCA]">
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8E1731]" />
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8E1731]" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E1731]">
            Today
          </span>
        </div>
      </section>
    </main>
  );
};

/* 
   REUSABLE PIECES
 */

const SectionLabel = ({ number, title }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E1731]">
        {number} / {title}
      </span>

      <div className="h-px flex-1 bg-[#DCD3CF]" />
    </div>
  );
};

const Stat = ({ value, label }) => {
  return (
    <div className="border-b border-[#D4CCCA] py-10 sm:border-b-0 sm:border-r sm:px-8 sm:py-12 sm:last:border-r-0 lg:px-12">
      <p className="font-serif text-[65px] leading-none tracking-[-0.05em] text-[#8E1731] lg:text-[82px]">
        {value}
      </p>

      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#665D5E]">
        {label}
      </p>
    </div>
  );
};

export default About;