import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineBuildingOffice2,
  HiOutlineCog6Tooth,
  HiOutlineComputerDesktop,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import cctvImage from "../assets/CCTV.png";
import contractingImage from "../assets/Contracting.png";
import electricalImage from "../assets/Electrical.png";
import industrySupplyImage from "../assets/IndustrySupply.png";
import itSupportImage from "../assets/ITsupport.png";
import logisticsServiceImage from "../assets/LogisticsService.png";
import maintenanceImage from "../assets/Maintenance.png";
import medicalImage from "../assets/Medical.png";
import tradingImage from "../assets/Trading.png";

const services = [
  {
    id: "01",
    title: "Trading",
    icon: HiOutlineShoppingCart,
    image: tradingImage,
    description: "Supplying high-quality industrial products, materials, and tools for diverse needs.",
  },
  {
    id: "02",
    title: "Contracting",
    icon: HiOutlineBuildingOffice2,
    image: contractingImage,
    description: "Undertaking a wide range of contracting projects with quality workmanship and safety.",
  },
  {
    id: "03",
    title: "Maintenance Services",
    icon: HiOutlineWrenchScrewdriver,
    image: maintenanceImage,
    description: "Comprehensive maintenance solutions to ensure smooth operations for facilities.",
  },
  {
    id: "04",
    title: "Industrial Supply & Services",
    icon: HiOutlineCog6Tooth,
    image: industrySupplyImage,
    description: "Complete range of materials, tools, and on-site services tailored to operational demands.",
  },
  {
    id: "05",
    title: "Medical Supply & Support Services",
    icon: HiOutlineHeart,
    image: medicalImage,
    description: "Dependable support solutions for the healthcare sector, ensuring availability of essential supplies.",
  },
  {
    id: "06",
    title: "Logistics",
    icon: HiOutlineTruck,
    image: logisticsServiceImage,
    description: "Efficient and flexible logistics solutions for the smooth movement and handling of goods.",
  },
  {
    id: "07",
    title: "Electrical & Instrumentation Division",
    icon: HiOutlineBolt,
    image: electricalImage,
    description: "Comprehensive solutions in electrical, instrumentation, automation, and control systems.",
  },
  {
    id: "08",
    title: "CCTV & Access Control Support",
    icon: HiOutlineEye,
    image: cctvImage,
    description: "Integrated security solutions including system design, installation, and maintenance.",
  },
  {
    id: "09",
    title: "IT Support & Media Services",
    icon: HiOutlineComputerDesktop,
    image: itSupportImage,
    description: "Reliable IT solutions and complete event planning/media support for your business.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
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

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.05),_transparent_40%,_rgba(30,58,138,0.08))]"
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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUpVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur"
            >
              <HiOutlineSparkles className="text-lg text-blue-700" aria-hidden="true" />
              Our Services
            </motion.div>
            <motion.h2
              id="services-heading"
              variants={fadeUpVariants}
              className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl"
            >
              Explore Our Solutions
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              A diversified service portfolio built for reliable execution,
              operational continuity, and industry-specific support.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-900 via-slate-400 to-[#0F172A]"
              aria-hidden="true"
            />
          </div>

          <motion.div variants={fadeUpVariants}>
            <Link
              to="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-1 hover:bg-blue-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-900/20"
            >
              Talk to Pentex
              <HiOutlineArrowRight className="text-lg transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                variants={fadeUpVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-lg shadow-slate-950/8 backdrop-blur transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/12"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {service.id}
                  </div>
                  <div className="absolute bottom-5 left-5 flex h-13 w-13 items-center justify-center rounded-xl bg-white text-[#0F172A] shadow-xl shadow-black/20 transition duration-300 group-hover:bg-blue-900 group-hover:text-white">
                    <Icon className="text-2xl" aria-hidden="true" />
                  </div>
                </div>

                <div className="relative p-6">
                  <div
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-extrabold text-[#0F172A] transition duration-300 group-hover:text-blue-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
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
