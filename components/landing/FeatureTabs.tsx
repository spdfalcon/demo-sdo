"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Zap,
  TrendingUp,
  MessageCircle,
  Trophy,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { FEATURE_CATEGORIES } from "@/lib/demo-data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  Layers,
  Zap,
  TrendingUp,
  MessageCircle,
  Trophy,
  Plug,
};

const colorClasses: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
  violet: "text-violet-400 border-violet-400/20 bg-violet-400/5",
  emerald: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  blue: "text-blue-400 border-blue-400/20 bg-blue-400/5",
  amber: "text-amber-400 border-amber-400/20 bg-amber-400/5",
  rose: "text-rose-400 border-rose-400/20 bg-rose-400/5",
};

export function FeatureTabs() {
  const [active, setActive] = useState(FEATURE_CATEGORIES[0].id);
  const category = FEATURE_CATEGORIES.find((c) => c.id === active)!;
  const Icon = ICONS[category.icon];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="۶ حوزه کاری"
          title="همه‌ی امکانات SDO در یک نگاه"
          subtitle="از عملیات روزانه تا بینش هوشمند — هر قابلیت را انتخاب کنید و جزئیات آن را ببینید."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {FEATURE_CATEGORIES.map((cat) => {
            const CIcon = ICONS[cat.icon];
            const isActive = active === cat.id;
            return (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`feature-pill flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm shadow-sm transition-all ${
                  isActive
                    ? colorClasses[cat.color]
                    : "border-border text-muted hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground"
                }`}
                data-active={isActive}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <CIcon className="h-4 w-4" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 lg:grid-cols-3"
            >
              <div className={`glass-strong rounded-3xl border p-8 lg:col-span-1 ${colorClasses[category.color]}`}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-current bg-current/10">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{category.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {category.features.length} قابلیت کلیدی در حوزه {category.label} برای سازمان‌های فارسی‌زبان.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.features.map((f) => (
                    <span
                      key={f.title}
                      className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs text-foreground/80"
                    >
                      {f.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {category.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <SpotlightCard className="h-full p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-current bg-current/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{feature.desc}</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
