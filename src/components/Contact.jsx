import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineSparkles,
} from "react-icons/hi2";

const contactItems = [
  {
    title: "Phone Number",
    value: "+966 500595123",
    href: "tel:+966500595123",
    action: "Call Now",
    icon: HiOutlinePhone,
  },
  {
    title: "Email",
    value: "info@pentex.com",
    href: "mailto:info@pentex.com",
    action: "Send Email",
    icon: HiOutlineEnvelope,
  },
  {
    title: "Address",
    value: "Building No. 6821, King Faisal Ibn Abdulaziz Branch, Postal - 35514, Al jubail, Saudi Arabia",
    icon: HiOutlineMapPin,
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
    transition: { duration: 0.62, ease: [0.45, 1, 0.36, 1] },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-white py-20 text-[#0F172A] sm:py-24 lg:py-28"
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
        className="container relative z-10 mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <motion.div
              variants={fadeUpVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur"
            >
              <HiOutlineSparkles className="text-lg text-blue-700" aria-hidden="true" />
              Get In Touch
            </motion.div>
            <motion.h2
              id="contact-heading"
              variants={fadeUpVariants}
              className="text-4xl font-extrabold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl"
            >
              Contact Us
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Connect with Pentex for service inquiries, project support, or
              operational requirements across our business divisions.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-900 via-slate-400 to-[#0F172A]"
              aria-hidden="true"
            />
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-lg shadow-slate-950/5 backdrop-blur sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {["Reliable response", "Clear coordination", "Client-focused support"].map(
                (item) => (
                  <div key={item} className="rounded-xl bg-white px-4 py-4 shadow-sm shadow-slate-950/5">
                    <p className="text-sm font-bold text-[#0F172A]">{item}</p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUpVariants}
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-7 text-left shadow-lg shadow-slate-950/8 backdrop-blur transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/12"
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
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-[#0F172A] transition duration-300 group-hover:bg-blue-900 group-hover:text-white">
                    <Icon className="text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.value}
                  </p>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    className="relative z-10 mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition duration-300 hover:bg-blue-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-900/20"
                  >
                    {item.action}
                    <HiOutlineArrowRight
                      className="text-lg transition duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="relative z-10 mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-600">
                    Visit Office
                  </span>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
