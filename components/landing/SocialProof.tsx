"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/demo-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function SocialProof() {
  return (
    <AnimatedSection id="testimonials" className="relative py-24 sm:py-32" stagger>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="بازخورد مشتریان"
            title="سازمان‌هایی که با SDO تصمیم بهتر می‌گیرند"
            subtitle="از مدیرعامل تا HR — همه یک داشبورد واحد می‌خواهند."
          />
        </AnimatedItem>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <AnimatedItem key={item.role}>
              <motion.div
                className="glass-strong relative h-full rounded-3xl p-6"
                whileHover={{ y: -6, borderColor: "rgba(167,139,250,0.25)" }}
                transition={{ delay: i * 0.05 }}
              >
                <Quote className="h-8 w-8 text-cyan-400/20" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">{item.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-xs font-bold text-foreground">
                    {item.role[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.role}</div>
                    <div className="text-xs text-muted">{item.org}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
