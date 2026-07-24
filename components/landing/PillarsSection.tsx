"use client";

import { motion } from "framer-motion";
import { Eye, Shield, Database, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const PILLARS = [
  {
    id: "visibility",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-400/20",
    icon: Eye,
    iconColor: "text-cyan-400",
    title: "شفافیت مدیریتی",
    desc: "داشبورد واحد، مرکز اقدام، گزارش‌های هفتگی و هزینه هر پروژه — همه چیز در یک نگاه.",
    points: ["مرکز اقدام مدیر", "سلامت و انرژی تیم", "گزارش عملکرد"],
  },
  {
    id: "control",
    gradient: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-400/20",
    icon: Shield,
    iconColor: "text-violet-400",
    title: "کنترل عملیاتی",
    desc: "چرخه تأیید مدیر پروژه و مدیر ارشد، اهداف پروژه، سقف بودجه و سطح دسترسی دقیق هر سازمان.",
    points: ["تأیید چندمرحله‌ای", "اهداف و بودجه", "مجوزهای دقیق"],
  },
  {
    id: "data",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-400/20",
    icon: Database,
    iconColor: "text-emerald-400",
    title: "داده از دل تیم",
    desc: "کارمندان و مدیران اطلاعات را وارد می‌کنند — سیستم تجمیع، تأیید و گزارش می‌دهد.",
    points: ["ثبت کار روزانه", "روحیه و حضور", "گزارش از بله"],
  },
  {
    id: "ai",
    gradient: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-400/20",
    icon: Sparkles,
    iconColor: "text-amber-400",
    title: "هوش مصنوعی",
    desc: "دستیار هوشمند از کار واقعی تیم یاد می‌گیرد. پاسخ منابع انسانی و بینش خودکار برای مدیریت.",
    points: ["پروفایل هوشمند", "دستیار منابع انسانی", "رونویسی جلسات"],
  },
];

export function PillarsSection() {
  return (
    <AnimatedSection id="pillars" className="relative py-24 sm:py-32" stagger>
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="ارزش پیشنهادی"
            title="چهار ستون مدیریت هوشمند"
            subtitle="نه فقط ابزار وظیفه — یک پلتفرم کامل برای مدیریت سازمان شما."
          />
        </AnimatedItem>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <AnimatedItem key={pillar.id}>
              <motion.article
                className={`glass rounded-3xl border ${pillar.border} bg-gradient-to-bl ${pillar.gradient} p-8`}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 ${pillar.iconColor}`}
                >
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs text-foreground/80"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
