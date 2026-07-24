"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Smartphone,
  Calendar,
  Brain,
  Bot,
  Mic,
  ArrowLeftRight,
} from "lucide-react";
import { INTEGRATIONS } from "@/lib/demo-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const ICONS: Record<string, React.ElementType> = {
  bale_daily_report: MessageSquare,
  SMS: Smartphone,
  calendar: Calendar,
  AI: Brain,
  hr_assistant: Bot,
  transcribe: Mic,
};

const COLORS = [
  "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
  "text-violet-400 border-violet-400/20 bg-violet-400/5",
  "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  "text-amber-400 border-amber-400/20 bg-amber-400/5",
  "text-rose-400 border-rose-400/20 bg-rose-400/5",
  "text-blue-400 border-blue-400/20 bg-blue-400/5",
];

export function IntegrationOrbit() {
  return (
    <section id="integrations" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="یکپارچه‌سازی بومی"
          title="متصل به اکوسیستم فارسی"
          subtitle="بله، کاوه‌نگار، تقویم گوگل و مدل‌های زبانی — بدون نیاز به تیم فنی جداگانه."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((item, i) => {
            const Icon = ICONS[item.tag] ?? MessageSquare;
            const color = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <SpotlightCard className={`h-full p-6 ${color}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-current bg-current/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <motion.div
                      className="text-foreground/20"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="glass-strong mt-12 rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium text-foreground">
            API داخلی و WebSocket آماده‌اند برای اتصال به سامانه‌های بیشتر
          </p>
          <p className="mt-2 text-sm text-muted">
            ماژولار بودن SDO امکان افزودن یکپارچه‌سازی جدید را بدون تغییر هسته فراهم می‌کند.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
