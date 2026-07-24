"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowLeft, Sparkles, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroMiniChart } from "@/components/charts/HeroMiniChart";
import { DASHBOARD_WIDGETS } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

const HERO_STATS = [
  { value: 27, suffix: "+", label: "ماژول یکپارچه", icon: Zap },
  { value: 100, suffix: "%", label: "RTL فارسی", icon: Users },
  { value: 0, suffix: "", label: "دستیار AI", display: "بله", icon: Sparkles },
  { value: 0, suffix: "", label: "SaaS چندسازمانی", display: "بله", icon: Shield },
];

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  violet: "bg-violet-400/10 text-violet-400 border-violet-400/20",
  rose: "bg-rose-400/10 text-rose-400 border-rose-400/20",
  emerald: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  amber: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
};

export function HeroBento() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <motion.div
        className="pointer-events-none absolute top-24 right-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ y: [0, -24, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-24 left-[10%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
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
              پلتفرم یکپارچه مدیریت سازمان — SDO
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-shimmer">یک داشبورد</span>
              <br />
              برای کل سازمان شما
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg leading-relaxed text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              SDO وظایف، پروژه، مالی، CRM، چت، روحیه تیم و دستیار هوشمند را در یک
              پلتفرم SaaS چندسازمانی فارسی‌محور جمع می‌کند.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <MagneticButton
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-l from-cyan-500 to-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                درخواست جلسه معرفی
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </MagneticButton>
              <motion.a
                href="#features"
                className="rounded-2xl border border-border bg-foreground/5 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                کشف امکانات
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
            >
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass bento-glow rounded-2xl px-4 py-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <div className="text-2xl font-bold counter-gradient">
                    {stat.display ? (
                      stat.display
                    ) : (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                    )}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TiltCard className="relative" intensity={20}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-strong bento-glow col-span-2 rounded-3xl p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20">
                        <span className="text-sm font-bold text-gradient">S</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">داشبورد SDO</span>
                    </div>
                    <span className="text-xs text-muted">۱۴۰۳/۰۵/۰۳</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-border bg-foreground/[0.02] p-3 text-center">
                      <div className="text-lg font-bold text-emerald-400">۱۲۸</div>
                      <div className="text-[10px] text-muted">تأییدشده</div>
                    </div>
                    <div className="rounded-2xl border border-border bg-foreground/[0.02] p-3 text-center">
                      <div className="text-lg font-bold text-amber-400">۱۴</div>
                      <div className="text-[10px] text-muted">منتظر تأیید</div>
                    </div>
                    <div className="rounded-2xl border border-border bg-foreground/[0.02] p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400">۷.۴</div>
                      <div className="text-[10px] text-muted">میانگین روحیه</div>
                    </div>
                  </div>
                </div>

                {DASHBOARD_WIDGETS.slice(1, 5).map((widget, i) => (
                  <motion.div
                    key={widget.id}
                    className={cn(
                      "glass bento-glow rounded-2xl border p-4",
                      colorMap[widget.color]
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="widget-dot bg-current" />
                      <span className="text-xs font-medium text-foreground">{widget.label}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {widget.rows.slice(0, 3).map((row) => (
                        <li key={row} className="text-[11px] text-muted">
                          {row}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                <motion.div
                  className="glass-strong bento-glow col-span-2 rounded-2xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      <span className="text-xs font-medium text-cyan-300">بینش لحظه‌ای AI</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400">+۱۲٪</span>
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="flex-1">
                      <HeroMiniChart />
                    </div>
                    <div className="text-[10px] leading-relaxed text-muted">
                      <p>۳ کار منتظر تأیید</p>
                      <p>روحیه تیم فروش پایین</p>
                      <p>بودجه یک پروژه نزدیک سقف</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TiltCard>

            <motion.div
              className="glass absolute -bottom-4 -right-2 max-w-[220px] rounded-2xl p-4 shadow-2xl sm:-right-6"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-semibold">روند مثبت هفتگی</span>
              </div>
              <p className="mt-2 text-[10px] text-muted">
                عملکرد سازمان ۸٪ بهبود یافته؛ تأیید وظایف و حضور در بهترین وضعیت ماه جاری.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
