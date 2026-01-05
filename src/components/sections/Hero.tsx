"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Cpu, Globe, Zap, Target, Rocket, Handshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-violet-50/30">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(139,92,246,0.1),transparent)]" />
        
        {/* Animated blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary/10 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
              <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">{t("badge")}</span>
            </div>
          </motion.div>

          <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight"
            >
              {t("title")}{" "}
              <span className="relative">
                <span className="gradient-text">{t("title_gradient")}</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.path
                    d="M2 10C50 4 100 4 150 6C200 8 250 4 298 8"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
          </motion.h1>

          <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t("description")}
          </motion.p>

          <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="btn-shine group" asChild>
              <Link href="/contact">
                  {t("cta_primary")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="#services">
                  {t("cta_secondary")}
                  <motion.span
                    className="inline-block"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </Link>
            </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: Target, label: t("stats.individual"), color: "from-blue-500 to-cyan-500" },
                { icon: Rocket, label: t("stats.modern"), color: "from-orange-500 to-amber-500" },
                { icon: Handshake, label: t("stats.partnership"), color: "from-emerald-500 to-teal-500" },
                { icon: ShieldCheck, label: t("stats.quality"), color: "from-violet-500 to-purple-500" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 group"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs text-muted font-medium leading-tight">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main circle */}
            <div className="relative w-[450px] h-[450px]">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                variants={orbitVariants}
                animate="animate"
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-accent/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner gradient circle */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm" />

              {/* Center content */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={floatVariants}
                animate="animate"
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              {/* Floating icons */}
              <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2"
                animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-lg shadow-primary/10 flex items-center justify-center border border-primary/10">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-lg shadow-accent/10 flex items-center justify-center border border-accent/10">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-4"
                animate={{ x: [-5, 5, -5], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-lg shadow-secondary/10 flex items-center justify-center border border-secondary/10">
                  <Zap className="w-7 h-7 text-secondary" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 right-4"
                animate={{ x: [5, -5, 5], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-lg shadow-primary/10 flex items-center justify-center border border-primary/10">
                  <Sparkles className="w-7 h-7 text-primary" />
              </div>
              </motion.div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 450 450">
                <motion.path
                  d="M225 80 L225 160"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.path
                  d="M225 290 L225 370"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M80 225 L160 225"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.path
                  d="M290 225 L370 225"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Particle dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/40"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary/50"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
