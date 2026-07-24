"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Wallet,
  Users,
  HeartPulse,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const MODULES = [
  {
    fa: "وظایف و پروژه",
    desc: "ثبت، تأیید چندمرحله‌ای، اهداف پروژه و بورد کانبان",
    icon: CheckCircle2,
    color: "border-cyan-400/20 text-cyan-400 bg-cyan-400/10",
  },
  {
    fa: "مالی",
    desc: "درآمد و هزینه، حقوق، پیش‌فاکتور و هزینه هر پروژه",
    icon: Wallet,
    color: "border-emerald-400/20 text-emerald-400 bg-emerald-400/10",
  },
  {
    fa: "فروش",
    desc: "از سرنخ تا مشتری، سفارش و پروژه — در یک مسیر",
    icon: Users,
    color: "border-violet-400/20 text-violet-400 bg-violet-400/10",
  },
  {
    fa: "سلامت تیم",
    desc: "روحیه، حضور، استندآپ و هشدار خستگی تیم",
    icon: HeartPulse,
    color: "border-rose-400/20 text-rose-400 bg-rose-400/10",
  },
  {
    fa: "همکاری",
    desc: "پیام‌رسانی لحظه‌ای، مستندات تیمی و هماهنگی",
    icon: MessageCircle,
    color: "border-blue-400/20 text-blue-400 bg-blue-400/10",
  },
  {
    fa: "انگیزش و منابع انسانی",
    desc: "امتیاز، جوایز، مسیر شغلی و چالش‌های هفتگی",
    icon: Trophy,
    color: "border-amber-400/20 text-amber-400 bg-amber-400/10",
  },
];

export function ModulesSection() {
  return (
    <AnimatedSection id="modules" className="relative py-24 sm:py-32" stagger>
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="۲۷ ماژول یکپارچه"
            title="هر آنچه سازمان نیاز دارد — در یک پلتفرم"
            subtitle="ماژولار و قابل تنظیم برای هر سازمان. فقط آنچه نیاز دارید را فعال کنید."
          />
        </AnimatedItem>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => (
            <AnimatedItem key={mod.fa}>
              <motion.article
                className="glass group rounded-2xl p-6"
                whileHover={{
                  y: -6,
                  borderColor: "rgba(255,255,255,0.2)",
                  boxShadow: "0 20px 40px -20px rgba(34,211,238,0.15)",
                }}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${mod.color}`}
                >
                  <mod.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{mod.fa}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{mod.desc}</p>
              </motion.article>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem>
          <p className="mt-10 text-center text-sm text-muted">
            + گزارش‌ها · پورسانت · تقویم گوگل · رونویسی · بله · نسخه موبایل · و بیشتر
          </p>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
