import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/const5.jpeg";
import industryImage from "../assets/IFA.png";
import qualityImage from "../assets/Quality.png";
import timelyImage from "../assets/Timely.png";

const slides = [
  {
    title: (
      <>
        Excellence in{" "}
        <span className="text-brand-red">Multi-Service</span> Solutions
      </>
    ),
    label: "TRUSTED MULTI-INDUSTRY SOLUTIONS",
    description:
      "Pentex delivers high-quality, reliable, and industry-focused solutions across Logistics, Medical Supply, Electrical, IT, and more. Your trusted partner for efficient execution and total customer satisfaction.",
    image: heroImage,
  },
  {
    title: "Quality & Reliability",
    label: "CONSISTENT PROFESSIONAL STANDARDS",
    description:
      "We maintain strict quality standards and dependable service practices so every project is handled with consistency, care, and professional accountability.",
    image: qualityImage,
  },
  {
    title: "Industry-Focused Approach",
    label: "TAILORED BUSINESS SOLUTIONS",
    description:
      "Our solutions are shaped around the real demands of each sector, helping clients get practical support that fits their operations and business goals.",
    image: industryImage,
  },
  {
    title: "Timely Execution",
    label: "EFFICIENT PROJECT DELIVERY",
    description:
      "From planning to delivery, we coordinate resources efficiently to keep projects moving on schedule without compromising quality or service standards.",
    image: timelyImage,
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.description}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1400ms] ${
            activeSlide === index
              ? "scale-105 opacity-100"
              : "scale-100 opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
          aria-hidden={activeSlide !== index}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/70" />

      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* Glow Effects */}
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto mt-20 max-w-7xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 md:text-sm"
            >
              {currentSlide.label}
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mx-auto max-w-5xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-lg md:text-7xl"
            >
              {currentSlide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/85 md:text-xl"
            >
              {currentSlide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                to="/services"
                className="group rounded-full bg-brand-red px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-2xl shadow-red-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-900/40"
              >
                <span className="flex items-center gap-2">
                  Our Services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0F172A]"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.description}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "h-2 w-14 bg-brand-red shadow-lg shadow-red-500/40"
                : "h-2 w-8 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to hero slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-10 right-8 z-20 hidden items-center gap-2 text-sm font-medium tracking-[0.2em] text-white/70 md:flex">
        <span>{String(activeSlide + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-white/40" />
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
      
    </section>
  );
}