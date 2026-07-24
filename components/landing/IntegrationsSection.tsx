"use client";

import { motion } from "framer-motion";
import { MessageSquare, Smartphone, Calendar, Brain, Bot, Mic } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { INTEGRATIONS } from "@/lib/demo-data";

const ICONS: Record<string, React.ElementType> = {
  bale_daily_report: MessageSquare,
  SMS: Smartphone,
  calendar: Calendar,
  AI: Brain,
  hr_assistant: Bot,
  transcribe: Mic,
};

export function IntegrationsSection() {
  return (
    <AnimatedSection id="integrations" className="relative py-24 sm:py-32" stagger>
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="یکپارچه‌سازی بومی"
            title="متصل به ابزارهایی که تیم شما استفاده می‌کند"
            subtitle="بله، SMS کاوه‌نگار، تقویم گوگل و مدل‌های زبانی — همه در یک پلتفرم فارسی."
          />
        </AnimatedItem>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((item, i) => {
            const Icon = ICONS[item.tag] ?? MessageSquare;
            return (
              <AnimatedItem key={item.name}>
                <motion.article
                  className="glass flex items-start gap-4 rounded-2xl p-5"
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(34,211,238,0.2)",
                    boxShadow: "0 16px 32px -12px rgba(34,211,238,0.12)",
                  }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                </motion.article>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
