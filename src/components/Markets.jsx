import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineSquares2X2,
  HiOutlineTruck,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import commercialImage from "../assets/Commercial.png";
import constructionImage from "../assets/Construction.png";
import healthcareImage from "../assets/Healthcare.png";
import industryImage from "../assets/Industry.png";
import itImage from "../assets/IT.png";
import logisticsImage from "../assets/Logistics.png";

const marketsData = [
  {
    title: "Industrial & Manufacturing",
    description: "Operational support, supplies, and maintenance for high-output environments.",
    image: industryImage,
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    title: "Construction & Infrastructure",
    description: "Reliable contracting and project support for built-environment delivery.",
    image: constructionImage,
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Healthcare & Medical",
    description: "Dependable medical supply and service support for critical care operations.",
    image: healthcareImage,
    icon: HiOutlineHeart,
  },
  {
    title: "Commercial & Retail",
    description: "Flexible service coverage for business facilities, retail, and commercial teams.",
    image: commercialImage,
    icon: HiOutlineSquares2X2,
  },
  {
    title: "Logistics & Supply Chain",
    description: "Efficient movement, handling, and coordination for time-sensitive requirements.",
    image: logisticsImage,
    icon: HiOutlineTruck,
  },
  {
    title: "Corporate & IT Sector",
    description: "Modern IT, media, and support services for connected business operations.",
    image: itImage,
    icon: HiOutlineCpuChip,
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
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Markets() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMarket = marketsData[currentIndex];
  const CurrentIcon = currentMarket.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % marketsData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="markets"
      aria-labelledby="markets-heading"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.04),_transparent_42%,_rgba(30,58,138,0.08))]"
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
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur"
          >
            <HiOutlineGlobeAlt className="text-lg text-blue-700" aria-hidden="true" />
            Markets
          </motion.div>
          <motion.h2
            id="markets-heading"
            variants={fadeUpVariants}
            className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl"
          >
            Markets We Serve
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Pentex supports essential industries with practical services,
            dependable resources, and coordinated execution.
          </motion.p>
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-900 via-slate-400 to-[#0F172A]"
            aria-hidden="true"
          />
        </div>

        <motion.div
          variants={fadeUpVariants}
          className="mt-12 overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-2xl shadow-slate-950/10 backdrop-blur"
        >
          <div className="grid min-h-[560px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-slate-900 lg:min-h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentMarket.title}
                  src={currentMarket.image}
                  alt={currentMarket.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMarket.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-xl bg-white text-[#0F172A] shadow-xl shadow-black/20">
                      <CurrentIcon className="text-2xl" aria-hidden="true" />
                    </div>
                    <h3 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                      {currentMarket.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-slate-200">
                      {currentMarket.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative bg-slate-50 p-5 sm:p-7 lg:p-8">
              <div
                className="absolute -right-20 -top-20 h-52 w-52 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl"
                aria-hidden="true"
              />
              <div className="relative z-10 grid gap-3">
                {marketsData.map((market, index) => {
                  const Icon = market.icon;
                  const isActive = index === currentIndex;

                  return (
                    <button
                      key={market.title}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`group flex min-h-20 items-center gap-4 rounded-xl border p-4 text-left transition duration-300 ${
                        isActive
                          ? "border-blue-200 bg-white shadow-lg shadow-slate-950/8"
                          : "border-slate-200 bg-white/55 hover:-translate-y-1 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition duration-300 ${
                          isActive
                            ? "bg-blue-900 text-white"
                            : "bg-slate-100 text-[#0F172A] group-hover:bg-blue-900 group-hover:text-white"
                        }`}
                      >
                        <Icon className="text-xl" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold text-[#0F172A]">
                          {market.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {market.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
