import { motion } from "framer-motion";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineLockClosed,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUsers,
} from "react-icons/hi2";

const foundations = [
  {
    label: "Vision",
    headline: "A trusted leader across essential service sectors.",
    text: "To become a trusted and leading multi-service company recognized for excellence, innovation, and reliability across industries.",
    icon: HiOutlineEye,
    metric: "Future-ready",
    accent: "from-[#EF4444] via-red-400 to-white",
    layout: "lg:col-span-5",
  },
  {
    label: "Mission",
    headline: "Value-driven execution with continuous improvement.",
    text: "To provide high-quality services and solutions that add value to our clients through professionalism, efficiency, and continuous improvement.",
    icon: HiOutlineRocketLaunch,
    metric: "Client-first",
    accent: "from-white via-slate-300 to-[#EF4444]",
    layout: "lg:col-span-7",
  },
];

const values = [
  {
    label: "Integrity",
    description: "Transparent decisions and accountable service delivery.",
    icon: HiOutlineShieldCheck,
    className: "sm:col-span-2 lg:col-span-3",
  },
  {
    label: "Quality",
    description: "High standards embedded in every scope of work.",
    icon: HiOutlineCheckCircle,
    className: "lg:col-span-2",
  },
  {
    label: "Reliability",
    description: "Dependable teams, timelines, and outcomes.",
    icon: HiOutlineHeart,
    className: "lg:col-span-2",
  },
  {
    label: "Safety",
    description: "Careful execution that protects people and operations.",
    icon: HiOutlineLockClosed,
    className: "lg:col-span-2",
  },
  {
    label: "Customer Focus",
    description: "Solutions shaped around client priorities and satisfaction.",
    icon: HiOutlineUsers,
    className: "sm:col-span-2 lg:col-span-3",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function FoundationCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 ${item.layout}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 -top-24 h-52 w-52 rotate-12 bg-gradient-to-br from-[#EF4444]/20 to-white/5 blur-3xl transition duration-500 group-hover:from-[#EF4444]/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_rgba(255,255,255,0.12),_transparent_32%)] opacity-80"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-[#0F172A] shadow-xl shadow-black/20 transition duration-300 group-hover:rotate-3 group-hover:bg-[#EF4444] group-hover:text-white">
            <Icon className="text-2xl" aria-hidden="true" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-right">
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-1 block text-sm font-bold text-white">
              {item.metric}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#EF4444]">
            {item.label}
          </p>
          <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {item.headline}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            {item.text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ValueCard({ value }) {
  const Icon = value.icon;

  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group relative min-h-44 overflow-hidden rounded-lg border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-950/5 transition duration-300 hover:border-[#EF4444]/30 hover:shadow-2xl hover:shadow-slate-950/10 ${value.className}`}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0F172A] via-[#EF4444] to-red-300 opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 -top-16 h-36 w-36 bg-gradient-to-br from-[#EF4444]/14 to-transparent blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-[#0F172A] transition duration-300 group-hover:bg-[#EF4444] group-hover:text-white">
            <Icon className="text-2xl transition duration-300 group-hover:scale-110" aria-hidden="true" />
          </div>
          <HiOutlineSparkles
            className="text-xl text-slate-200 transition duration-300 group-hover:rotate-12 group-hover:text-[#EF4444]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-extrabold text-[#0F172A]">{value.label}</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {value.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function VisionMission() {
  return (
    <section
      id="foundation"
      aria-labelledby="foundation-heading"
      className="relative isolate overflow-hidden bg-[#0F172A] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.045)_1px,_transparent_1px)] bg-[size:48px_48px] opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 h-80 w-[130vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#EF4444]/20 to-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 -z-10 h-72 w-[60vw] bg-gradient-to-l from-white/10 via-[#EF4444]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="container mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase text-red-200 shadow-sm shadow-black/10 backdrop-blur"
          >
            <HiOutlineArrowTrendingUp className="text-lg text-[#EF4444]" aria-hidden="true" />
            OUR FOUNDATION
          </motion.div>

          <motion.h2
            id="foundation-heading"
            variants={fadeUpVariants}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Vision, Mission & Core Values
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            The principles that guide how Pentex serves clients, manages
            operations, and builds long-term trust across every industry we
            support.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-7 h-1.5 w-28 overflow-hidden rounded-full bg-white/10"
            aria-hidden="true"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#EF4444] via-red-300 to-white"
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="relative mt-14 grid gap-5 lg:grid-cols-12"
        >
          <div
            className="absolute left-1/2 top-1/2 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#EF4444]/50 to-transparent lg:block"
            aria-hidden="true"
          />
          {foundations.map((item, index) => (
            <FoundationCard key={item.label} item={item} index={index} />
          ))}
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#EF4444]">
                Core Values
              </p>
              <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Principles built for dependable execution.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Each value is reflected in how we plan work, communicate with
              clients, protect standards, and deliver measurable outcomes.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {values.map((value) => (
            <ValueCard key={value.label} value={value} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
