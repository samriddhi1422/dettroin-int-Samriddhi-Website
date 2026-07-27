import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const exploreLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Vision & Philosophy", path: "/vision" },
    { name: "Announcements", path: "/announcement" },
    { name: "Contact Us", path: "/contact" },
  ];

  const schoolLinks = [
    "The Learning Experience",
    "International Curriculum",
    "Infrastructure",
    "Special Education Needs",
    "Intra-School Programmes",
    "Inter-School Programmes",
  ];

  const utilityLinks = [
    "Admissions",
    "News & Events",
    "FAQs",
    "Statutory Compliances",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-[#8E1731] text-[#F7F4EF]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="border-b border-white/15 py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20">

            {/* Brand */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#EBCDD2]">
                Vasant Valley School
              </p>

              <h2 className="mt-5 max-w-[470px] font-serif text-[38px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[52px]">
                Learning today.
                <span className="block italic text-[#EBCDD2]">
                  Shaping tomorrow.
                </span>
              </h2>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F7F4EF] px-6 py-3 text-sm font-semibold text-[#8E1731] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in touch

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">

              {/* Explore */}
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EBCDD2]">
                  Explore
                </p>

                <ul className="space-y-3">
                  {exploreLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* School */}
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EBCDD2]">
                  School
                </p>

                <ul className="space-y-3">
                  {schoolLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Information */}
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EBCDD2]">
                  Information
                </p>

                <ul className="space-y-3">
                  {utilityLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact row */}
        <div className="grid gap-8 border-b border-white/15 py-9 md:grid-cols-3">

          <div className="flex items-start gap-3">
            <MapPin
              size={18}
              className="mt-0.5 shrink-0 text-[#EBCDD2]"
            />

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Visit
              </p>

              <p className="mt-2 max-w-[300px] text-sm leading-6 text-white/75">
                Sector C, Vasant Kunj,
                <br />
                New Delhi 110070
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone
              size={18}
              className="mt-0.5 shrink-0 text-[#EBCDD2]"
            />

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Call
              </p>

              <a
                href="tel:+911141767940"
                className="mt-2 block text-sm text-white/75 transition-colors hover:text-white"
              >
                +91 11 41767940
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail
              size={18}
              className="mt-0.5 shrink-0 text-[#EBCDD2]"
            />

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Write
              </p>

              <a
                href="mailto:info@vasantvalley.edu.in"
                className="mt-2 block text-sm text-white/75 transition-colors hover:text-white"
              >
                info@vasantvalley.edu.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-white/50">
            © {new Date().getFullYear()} Vasant Valley School. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
  <a
    href="#"
    aria-label="Facebook"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#8E1731]"
  >
    <FaFacebookF size={14} />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#8E1731]"
  >
    <FaInstagram size={15} />
  </a>

  <a
    href="#"
    aria-label="LinkedIn"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#8E1731]"
  >
    <FaLinkedinIn size={14} />
  </a>

  <a
    href="#"
    aria-label="YouTube"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#8E1731]"
  >
    <FaYoutube size={16} />
  </a>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;