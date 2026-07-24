"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Brain, Bot, MessageSquare, Mic } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedSection";

const AI_FEATURES = [
  {
    title: "پروفایل هوشمند",
    desc: "درک الگوی کار هر نفر از ثبت‌های واقعی روزانه — پیشنهادهای شخصی‌سازی‌شده.",
    tag: "یادگیری عمیق",
    icon: Brain,
    color: "text-violet-400",
    bg: "bg-violet-400/10 border-violet-400/20",
  },
  {
    title: "دستیار منابع انسانی",
    desc: "پاسخ به سوالات پرتکرار، راهنمای ورود نیروی جدید و دسترسی به پایگاه دانش.",
    tag: "منابع انسانی",
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    title: "گزارش خودکار بله",
    desc: "جمع‌آوری گزارش روزانه از کار تیم و ارسال خودکار به مدیر.",
    tag: "خودکار",
    icon: MessageSquare,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    title: "رونویسی جلسات",
    desc: "رونویسی زنده و خلاصه‌سازی هوشمند از مذاکرات تیمی.",
    tag: "صوتی",
    icon: Mic,
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
  },
];

const DATA_FLOW = [
  { step: "۱", label: "کارمند و مدیر", sub: "ثبت کار · روحیه · حضور" },
  { step: "۲", label: "تأیید و تجمیع", sub: "بررسی مدیر · گزارش هفتگی" },
  { step: "۳", label: "داشبورد و بینش", sub: "هشدار · پیشنهاد · تصمیم" },
];

const TYPEWRITER_LINES = [
  "تحلیل هفتگی تیم فروش...",
  "۱۲ وظیفه تأییدشده · ۳ معوق · بار کاری ۸۵٪",
  "۲ عضو با روحیه پایین — پیشنهاد: جلسه با منابع انسانی",
  "یک پروژه: هزینه ۸۵٪ بودجه — هشدار مالی",
];

export function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="هوش مصنوعی بومی"
          title="دستیاری که از کار واقعی تیم یاد می‌گیرد"
          subtitle="نه یک چت‌بات عمومی — دستیاری که به وظایف، گزارش‌ها و رفتار تیم شما متصل است."
        />

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
          {DATA_FLOW.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.15} direction="up">
              <div className="flex items-center">
                <motion.div
                  className="glass flex flex-col items-center rounded-2xl px-8 py-6 text-center"
                  whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.3)" }}
                >
                  <span className="text-xs text-cyan-400">{item.step}</span>
                  <span className="mt-2 font-semibold text-foreground">{item.label}</span>
                  <span className="mt-1 text-xs text-muted">{item.sub}</span>
                </motion.div>
                {i < DATA_FLOW.length - 1 && (
                  <div className="hidden px-4 sm:block">
                    <motion.div
                      animate={{ x: [0, -6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-cyan-400/50"
                    >
                      ←
                    </motion.div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {AI_FEATURES.map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.1}>
                <motion.article
                  className={`glass rounded-2xl border p-5 ${feat.bg}`}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex items-center justify-between">
                    <feat.icon className={`h-5 w-5 ${feat.color}`} />
                    <span className="rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] text-foreground/60">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-semibold text-foreground">{feat.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{feat.desc}</p>
                </motion.article>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="left">
            <div className="glow-ring rounded-3xl p-1">
              <ImagePlaceholder
                width={800}
                height={600}
                label="دستیار هوشمند سازمان"
                hint="گفتگو با دستیار و پیشنهادهای مدیریتی"
                className="w-full max-w-none"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="glass mt-12 overflow-hidden rounded-2xl border border-cyan-400/20">
            <div className="flex items-center gap-3 border-b border-border bg-cyan-400/5 px-6 py-4">
              <motion.span
                className="h-2 w-2 rounded-full bg-cyan-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs text-cyan-300">
                تحلیل هوشمند SDO
              </span>
            </div>
            <div className="min-h-[120px] p-6 text-sm">
              <span className="text-cyan-400">&gt; </span>
              <Typewriter
                options={{
                  strings: TYPEWRITER_LINES,
                  autoStart: true,
                  loop: true,
                  delay: 35,
                  deleteSpeed: 20,
                  cursor: "▋",
                }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
