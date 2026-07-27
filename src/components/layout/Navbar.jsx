import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from '../../assets/images/logo-vasant-valley.svg'
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Vision & Philosophy", path: "/vision-philosophy" },
  { name: "Announcements", path: "/announcements" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-8">
        <nav
          className="
            flex h-[76px] items-center justify-between
            rounded-2xl border border-black/5
            bg-[#F7F4EF]/95
            px-5 shadow-[0_8px_30px_rgba(30,20,20,0.06)]
            backdrop-blur-md
            lg:px-7
          "
        >
          {/* Logo */}
         <NavLink
  to="/"
  className="flex shrink-0 items-center"
  onClick={() => setMenuOpen(false)}
  aria-label="Vasant Valley School - Home"
>
  <img
    src={logo}
    alt="Vasant Valley School"
    className="h-14 w-auto object-contain sm:h-16"
  />
</NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-[13px] font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#8E1731]"
                      : "text-[#4F4748] hover:text-[#8E1731]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#8E1731] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Login */}
          <button
            to="/login"
            className="
              hidden items-center gap-2 rounded-full
              bg-[#8E1731] px-5 py-2.5
              text-[13px] font-semibold text-white
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-[#741127]
              lg:flex
            "
          >
            Login
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#211B1C] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden transition-all duration-300 lg:hidden
            ${menuOpen ? "mt-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="rounded-2xl border border-black/5 bg-[#F7F4EF] p-4 shadow-xl">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#8E1731]/10 text-[#8E1731]"
                        : "text-[#4F4748] hover:bg-black/[0.03]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#8E1731] px-5 py-3 text-sm font-semibold text-white"
            >
              Login
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;