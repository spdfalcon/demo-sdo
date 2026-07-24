"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/ui/AnimatedSection";
import { HeroMiniChart } from "@/components/charts/HeroMiniChart";

const STATS = [
  { value: 27, suffix: "+", label: "ماژول یکپارچه", numeric: true },
  { value: 1, suffix: "", label: "داشبورد واحد", numeric: true },
  { value: 0, suffix: "", label: "دستیار هوشمند", display: "بله" },
  { value: 0, suffix: "", label: "طراحی بومی", display: "فارسی" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <motion.div
        className="pointer-events-none absolute top-32 right-[10%] h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 left-[5%] h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <motion.div
              className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              پلتفرم یکپارچه مدیریت سازمان
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-gradient">یک پلتفرم</span>
              <br />
              برای مدیریت کل سازمان
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg leading-relaxed text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              SDO داده‌های کارمندان، مدیران پروژه و تیم‌ها را جمع می‌کند،
              تأیید می‌کند و در یک داشبورد واحد در اختیار مدیریت و منابع انسانی قرار می‌دهد —
              با دستیار هوشمندی که از کار واقعی تیم شما یاد می‌گیرد.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-l from-cyan-500 to-violet-600 text-white px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(34,211,238,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                درخواست جلسه معرفی
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </motion.a>
              <motion.a
                href="#dashboard"
                className="rounded-2xl border border-border bg-foreground/5 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                مشاهده امکانات
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-2xl px-4 py-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.3)" }}
                >
                  <div className="text-2xl font-bold text-gradient">
                    {stat.numeric ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                    ) : (
                      stat.display
                    )}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <FadeIn direction="left" delay={0.3} className="relative">
            <motion.div
              className="glow-ring rounded-3xl p-1"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImagePlaceholder
                width={1200}
                height={700}
                label="نمای کلی داشبورد مدیریتی"
                hint="وظایف، سلامت تیم و مرکز اقدام در یک صفحه"
                className="w-full max-w-none"
              />
            </motion.div>

            <motion.div
              className="glass absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl p-4 shadow-2xl sm:-right-8"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="text-xs font-medium text-cyan-300">بینش لحظه‌ای</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">+۱۲٪</span>
                </div>
                <HeroMiniChart />
                <p className="mt-2 text-[10px] leading-relaxed text-muted">
                  ۳ کار منتظر تأیید · روحیه تیم فروش پایین · بودجه یک پروژه نزدیک سقف
                </p>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
