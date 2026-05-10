import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import ctaBg from "../assets/Logistics.png";
import useInView from "../hooks/useInView";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "Trading",
  "Contracting",
  "Maintenance Services",
  "Industrial Service",
  "Medical Services",
  "Logistics",
  "IT Solutions",
];

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    text: "Hamriyah Free Zone Sharjah - UAE",
  },
  {
    icon: FaPhoneAlt,
    text: "+971 56 133 2311",
    href: "tel:+971561332311",
  },
  {
    icon: FaEnvelope,
    text: "info@pentex.com",
    href: "mailto:info@pentex.com",
  },
];

export default function Footer() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="relative bg-slate-50 pt-16">
      <div
        className={`container relative z-20 mx-auto -mb-20 max-w-7xl px-6 transition-all duration-1000 ease-out ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-7 shadow-2xl shadow-slate-950/25 md:p-10 lg:p-12">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${ctaBg})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/92 to-[#0F172A]/80" />
          <div className="absolute left-1/2 top-0 h-56 w-[90vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-white/10 blur-3xl" />
          <div className="absolute inset-y-0 right-0 hidden w-1/3 skew-x-[-18deg] bg-white/[0.06] lg:block" />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Need Reliable & Fast Shipping Solutions?
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-100 md:text-lg">
                Experience seamless logistics with Pentex Group - No hidden
                fees, no cancellation charges.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-extrabold uppercase tracking-wide text-[#0F172A] shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/35"
            >
              Get A Quote
              <FaArrowRight className="text-xs" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="relative overflow-hidden bg-[#0F172A] pt-36 text-slate-300">
        <div className="absolute left-0 top-20 h-24 w-24 -translate-x-10 rotate-45 border border-white/10" />
        <div className="absolute bottom-24 right-8 h-32 w-32 rotate-12 border border-blue-400/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[120vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/10 to-white/5 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-12">
            <div
              className={`xl:col-span-3 transition-all duration-700 ease-out ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white p-2 shadow-lg shadow-black/20">
                  <img
                    src="/pentexlogo.png"
                    alt="Vajra Shipping"
                    className="h-full w-full object-contain"
                  />
                </span>
                <img
                  src="/fontlogo.png"
                  alt="Vajra Shipping"
                  className="h-11 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                Pentex is a dynamic and diversified service provider offering a wide range of solutions 
across multiple industries. With a strong commitment to quality, reliability, and 
customer satisfaction, we deliver efficient and cost-effective services tailored to meet 
client requirements.
              </p>
            </div>

            <div
              className={`xl:col-span-3 transition-all duration-700 ease-out ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-xl font-extrabold text-white">Quick Link</h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-slate-200" />
              <ul className="mt-6 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                    >
                      <HiChevronRight
                        className="text-blue-300 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`xl:col-span-2 transition-all duration-700 ease-out ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-xl font-extrabold text-white">Our Services</h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-slate-200" />
              <ul className="mt-6 space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                    >
                      <HiChevronRight
                        className="text-blue-300 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`xl:col-span-4 transition-all duration-700 ease-out ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-xl font-extrabold text-white">Contact Details</h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-slate-200" />
              <ul className="mt-6 space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:text-white">
                        <Icon className="text-lg" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-6 text-slate-300">
                        {detail.text}
                      </span>
                    </>
                  );

                  return (
                    <li key={detail.text}>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="group flex items-center gap-4 transition-colors duration-300 hover:text-white"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 py-5 text-center text-sm text-slate-400 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="font-semibold text-white transition-colors duration-300 hover:text-blue-300">
                Pentex
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
