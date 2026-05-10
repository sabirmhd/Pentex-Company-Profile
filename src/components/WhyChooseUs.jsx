import { motion, useInView as useMotionInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineCheckBadge,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import whyusImage from "../assets/whyus.png";

const reasons = [
  {
    title: "Reliable and professional team",
    description: "Experienced people focused on accountable delivery.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Wide range of services under one roof",
    description: "Integrated support across core business needs.",
    icon: HiOutlineSquares2X2,
  },
  {
    title: "Quality driven approach",
    description: "Standards-led execution from planning to completion.",
    icon: HiOutlineCheckBadge,
  },
  {
    title: "Timely project delivery",
    description: "Disciplined coordination that keeps work moving.",
    icon: HiOutlineClock,
  },
  {
    title: "Customer focused solutions",
    description: "Services aligned to practical client priorities.",
    icon: HiOutlineShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function useCountUp(start, end, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId;
    const startedAt = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(progress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [duration, end, start]);

  return value;
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useMotionInView(sectionRef, { once: true, amount: 0.25 });
  const serviceHours = useCountUp(isInView, 24);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      aria-labelledby="why-heading"
      className="relative isolate overflow-hidden bg-[#0F172A] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${whyusImage})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.045)_1px,_transparent_1px)] bg-[size:48px_48px] opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 h-80 w-[130vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/15 to-white/10 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="container mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeUpVariants} className="relative">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur">
            <div className="h-80 overflow-hidden rounded-xl bg-slate-900 sm:h-[520px]">
              <img
                src={whyusImage}
                alt="Pentex professional service team"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 rounded-2xl border border-white/15 bg-white/95 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white shadow-lg shadow-blue-950/25">
                  <HiOutlineClock className="text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1 text-[#0F172A]">
                    <span className="text-3xl font-extrabold leading-none">
                      {serviceHours}
                    </span>
                    <span className="text-lg font-bold">/7</span>
                  </div>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Support Mindset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            variants={fadeUpVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-200 backdrop-blur"
          >
            <HiOutlineTruck className="text-lg text-blue-300" aria-hidden="true" />
            Why Choose Us
          </motion.div>

          <motion.h2
            id="why-heading"
            variants={fadeUpVariants}
            className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Dependable execution for businesses that need work done right.
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Pentex brings reliable people, integrated services, and quality-led
            delivery together for clients who value speed, accountability, and
            practical results.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-300 via-slate-400 to-white"
            aria-hidden="true"
          />

          <motion.div
            variants={containerVariants}
            className="mt-9 grid gap-4 sm:grid-cols-2"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  variants={fadeUpVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className={`group rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-lg shadow-black/10 backdrop-blur transition duration-300 hover:border-blue-300/30 hover:bg-white/[0.12] ${
                    index === reasons.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F172A] transition duration-300 group-hover:bg-blue-300">
                      <Icon className="text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* <motion.div
            variants={fadeUpVariants}
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm font-semibold text-slate-200 backdrop-blur"
          >
            <HiOutlineSparkles className="text-xl text-blue-300" aria-hidden="true" />
            Quality, reliability, and customer satisfaction guide every engagement.
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}
