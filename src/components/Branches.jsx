import { motion } from "framer-motion";
import {
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from "react-icons/hi2";

const branches = [
  {
    country: "United Kingdom",
    name: "PENTEX INTEGRATED INDUSTRIAL SOLUTIONS LTD.",
    address: "61 Bridge Street, Kington, United Kingdom",
  },
  {
    country: "India",
    name: "Pentex LLP (Eplus Education)",
    address:
      "Building No. 325 Thekkil, Chanappara P.O., Kadakkal, Kollam District, Kerala - 691536, India",
  },
  {
    country: "Saudi Arabia",
    name: "PENTEX INDUSTRIAL SOLUTIONS INC.",
    address: "61 Bridge Street, Kington, United Kingdom",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Branches() {
  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.05),_transparent_38%,_rgba(30,58,138,0.08))]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 h-72 w-[120vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/10 to-slate-900/10 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="container mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur"
          >
            <HiOutlineGlobeAlt className="text-lg text-blue-700" aria-hidden="true" />
            GLOBAL PRESENCE
          </motion.div>

          <motion.h2
            id="branches-heading"
            variants={fadeUpVariants}
            className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl"
          >
            Our Branches
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-800 via-slate-400 to-[#0F172A]"
            aria-hidden="true"
          />
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {branches.map((branch) => (
            <motion.article
              key={branch.country}
              variants={fadeUpVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-950/6 backdrop-blur transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/10"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-slate-300 opacity-80"
                aria-hidden="true"
              />
              <div
                className="absolute -right-16 -top-16 h-36 w-36 bg-gradient-to-br from-blue-500/12 to-transparent blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#0F172A] transition duration-300 group-hover:bg-blue-900 group-hover:text-white">
                    <HiOutlineBuildingOffice2 className="text-2xl" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Branch
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0F172A]">
                  {branch.country}
                </h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-slate-700">
                  {branch.name}
                </p>
                <div className="mt-5 flex items-start gap-3 text-slate-600">
                  <HiOutlineMapPin
                    className="mt-1 shrink-0 text-xl text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7">{branch.address}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
