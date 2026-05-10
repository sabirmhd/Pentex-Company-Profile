import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineBolt,
  HiOutlineBuildingOffice2,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

const highlights = [
  {
    title: "Multi-service solutions",
    description:
      "Integrated support across trading, contracting, maintenance, logistics, IT, medical, and events.",
    icon: HiOutlineSquares2X2,
  },
  {
    title: "Quality & reliability",
    description:
      "Consistent delivery standards built around accountability, clear communication, and dependable service.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Industry-focused approach",
    description:
      "Practical solutions shaped around the operating needs of each client, sector, and project scope.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Timely execution",
    description:
      "Disciplined coordination helps projects move efficiently while protecting quality and cost control.",
    icon: HiOutlineBolt,
  },
];

const stats = [
  { value: "50+", label: "Clients" },
  { value: "10+", label: "Industries" },
  { value: "24/7", label: "Support" },
  { value: "99%", label: "Satisfaction" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.05)_0%,_rgba(255,255,255,0)_34%,_rgba(239,68,68,0.08)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 h-72 w-[120vw] -translate-x-1/2 -rotate-3 bg-gradient-to-r from-transparent via-[#EF4444]/10 to-[#0F172A]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,_transparent_1px),linear-gradient(90deg,_rgba(15,23,42,0.045)_1px,_transparent_1px)] bg-[size:44px_44px] opacity-60"
        aria-hidden="true"
      />

      <motion.div
        className="container mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative">
          <motion.div
            variants={fadeUpVariants}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#EF4444]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase text-[#EF4444] shadow-sm shadow-slate-900/5 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#EF4444] shadow-[0_0_0_6px_rgba(239,68,68,0.12)]" />
            ABOUT PENTEX
          </motion.div>

          <motion.h2
            id="about-heading"
            variants={fadeUpVariants}
            className="max-w-2xl text-4xl font-extrabold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl"
          >
            Reliable enterprise services for complex, fast-moving industries.
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#EF4444] via-[#EF4444] to-[#0F172A]"
            aria-hidden="true"
          />

          <motion.p
            variants={fadeUpVariants}
            className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Pentex is a diversified service provider delivering trading,
            contracting, maintenance, industrial support, medical services,
            logistics, IT solutions, and event management. We combine quality,
            reliability, and efficient execution to help clients receive
            cost-effective services without compromising professional standards.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/services"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-red-500/20 transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-red-500/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#EF4444]/30"
            >
              Explore Services
              <HiArrowRight className="text-lg transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-[#0F172A] shadow-sm shadow-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#0F172A]/30 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300/60"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.dl
            variants={containerVariants}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUpVariants}
                className="rounded-lg border border-white/70 bg-white/75 px-4 py-4 shadow-sm shadow-slate-900/5 backdrop-blur"
              >
                <dt className="text-xs font-semibold text-slate-500">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-[#0F172A]">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative grid gap-5 sm:grid-cols-2"
          variants={containerVariants}
        >
          <div
            className="absolute -left-8 top-14 -z-10 h-24 w-72 -rotate-12 bg-gradient-to-r from-[#EF4444]/16 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-10 bottom-10 -z-10 h-28 w-80 rotate-12 bg-gradient-to-l from-[#0F172A]/12 to-transparent blur-3xl"
            aria-hidden="true"
          />

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUpVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group relative overflow-hidden rounded-lg border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-900/8 backdrop-blur-xl transition duration-300 hover:border-[#EF4444]/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-900/12 ${
                  index % 2 === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EF4444] via-red-300 to-[#0F172A] opacity-80" />
                <div className="absolute right-4 top-4 text-6xl font-black leading-none text-slate-100 transition duration-300 group-hover:text-red-50">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0F172A] text-white shadow-lg shadow-slate-900/20 transition duration-300 group-hover:rotate-3 group-hover:bg-[#EF4444] group-hover:shadow-red-500/25">
                    <Icon className="text-2xl" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
