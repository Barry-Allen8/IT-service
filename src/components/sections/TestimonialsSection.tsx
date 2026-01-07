"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

// Demo testimonials - будуть замінені на справжні
const demoTestimonials = [
  {
    id: 1,
    name: "Anna K.",
    position: "CEO",
    company: "StartupX",
    avatar: "👩‍💼",
    rating: 5,
    content: "testimonial_1",
  },
  {
    id: 2,
    name: "Michał P.",
    position: "CTO",
    company: "TechCorp",
    avatar: "👨‍💻",
    rating: 5,
    content: "testimonial_2",
  },
  {
    id: 3,
    name: "Olena S.",
    position: "Marketing Director",
    company: "GrowthLab",
    avatar: "👩‍🎨",
    rating: 5,
    content: "testimonial_3",
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const hasTestimonials = false; // Змініть на true коли будуть справжні відгуки

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === demoTestimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? demoTestimonials.length - 1 : prev - 1;
    });
  };

  if (!hasTestimonials) {
    // Placeholder when no real testimonials
    return (
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="max-w-2xl mx-auto text-center py-16 bg-white border-2 border-dashed border-primary/20">
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageSquare className="w-12 h-12 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">{t("coming_soon_title")}</h3>
              <p className="text-muted mb-8 max-w-md mx-auto">
                {t("coming_soon_text")}
              </p>

              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Star className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  // Carousel with real testimonials
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <Card className="p-8 md:p-12 bg-white shadow-xl border-0">
                  <Quote className="w-12 h-12 text-primary/10 mb-6" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(demoTestimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                    &ldquo;{t(demoTestimonials[currentIndex].content)}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center text-3xl">
                      {demoTestimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        {demoTestimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted">
                        {demoTestimonials[currentIndex].position},{" "}
                        <span className="text-primary font-medium">
                          {demoTestimonials[currentIndex].company}
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {demoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
