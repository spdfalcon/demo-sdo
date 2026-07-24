"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/demo-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhySDO() {
  return (
    <AnimatedSection id="why" className="relative py-24 sm:py-32" stagger>
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="چرا SDO؟"
            title="پایان دوران Excel و ابزارهای پراکنده"
            subtitle="مقایسه روش سنتی با SDO — همان داده‌ها، اما با سرعت و بینش بیشتر."
          />
        </AnimatedItem>

        <AnimatedItem>
          <div className="glass-strong mt-16 overflow-hidden rounded-3xl">
            <div className="grid grid-cols-3 border-b border-border bg-foreground/[0.02] px-6 py-4 text-sm font-semibold">
              <div className="text-foreground">مقایسه</div>
              <div className="text-center text-muted">بدون SDO</div>
              <div className="text-center text-cyan-400">با SDO</div>
            </div>
            <div className="divide-y divide-border">
              {COMPARISON_ROWS.map((row, i) => (
                <motion.div
                  key={row.label}
                  className="grid grid-cols-3 items-center px-6 py-4 transition-colors hover:bg-foreground/[0.02]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="text-sm font-medium text-foreground">{row.label}</div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted">
                    <X className="h-4 w-4 text-rose-400" />
                    {row.without}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-400">
                    <Check className="h-4 w-4" />
                    {row.with}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
