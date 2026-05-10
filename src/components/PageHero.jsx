import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageHero({ title, breadcrumb, backgroundImage }) {
  const parts = breadcrumb.split(" - ");

  return (
    <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#0F172A] pt-24 text-white sm:min-h-[500px]">
      <motion.div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:44px_44px] opacity-35"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 -z-10 h-56 w-[120vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav
            className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-slate-200"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="transition-colors duration-300 hover:text-white">
              {parts[0] || "Home"}
            </Link>
            <span className="h-px w-6 bg-blue-300" aria-hidden="true" />
            <span className="text-blue-200">{parts[1] || title}</span>
          </nav>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <div
            className="mt-7 h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-300 via-slate-300 to-white"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
