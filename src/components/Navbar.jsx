import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "MARKETS", href: "/markets" },
  { label: "WHY CHOOSE US", href: "/why-choose-us" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/pentexlogo.png"
            alt="Pentex"
            className="h-10 w-auto"
          />
          <img
            src="/fontlogo.png"
            alt="Pentex Text Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `group relative text-[13px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "text-[#0F172A]"
                      : "text-slate-600 hover:text-[#0F172A]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 transition-all duration-300 group-hover:opacity-100">
                      {link.label}
                    </span>

                    {/* Underline Animation */}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-900 transition-all duration-300 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />

                    {/* Subtle Glow */}
                    <span
                      className={`absolute inset-0 rounded-md blur-md transition-opacity duration-300 ${
                        isActive
                          ? "bg-blue-100/40 opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl text-slate-700 transition-colors duration-300 hover:text-blue-900 focus:outline-none md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200/80 bg-white/92 shadow-2xl shadow-slate-950/10 backdrop-blur-xl md:hidden"
          >
            <div className="mx-4 mb-4 overflow-hidden rounded-b-2xl border-x border-b border-slate-200/80 bg-white/85">
              <ul className="flex flex-col divide-y divide-slate-100 px-3 py-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    transition={{
                      duration: 0.18,
                      delay: index * 0.025,
                    }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === "/"}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition duration-200 ${
                          isActive
                            ? "bg-blue-50 text-[#0F172A]"
                            : "text-slate-700 hover:bg-blue-50/80 hover:text-[#0F172A]"
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="transition duration-200 group-hover:translate-x-1">
                        {link.label}
                      </span>

                      <span
                        className="h-1.5 w-1.5 rounded-full bg-slate-300 opacity-0 transition duration-200 group-hover:bg-blue-700 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}