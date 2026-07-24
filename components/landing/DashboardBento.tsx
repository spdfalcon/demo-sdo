"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  HeartPulse,
  Wallet,
  Calendar,
  Users,
  Zap,
  AlertCircle,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { DASHBOARD_WIDGETS } from "@/lib/demo-data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  action: Zap,
  tasks: CheckCircle2,
  mood: HeartPulse,
  finance: Wallet,
  calendar: Calendar,
  presence: Users,
};

const colorMap: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-400/20",
  violet: "text-violet-400 border-violet-400/20",
  rose: "text-rose-400 border-rose-400/20",
  emerald: "text-emerald-400 border-emerald-400/20",
  amber: "text-amber-400 border-amber-400/20",
  blue: "text-blue-400 border-blue-400/20",
};

export function DashboardBento() {
  const [selected, setSelected] = useState(DASHBOARD_WIDGETS[0].id);
  const active = DASHBOARD_WIDGETS.find((w) => w.id === selected) || DASHBOARD_WIDGETS[0];
  const ActiveIcon = ICONS[active.id];

  return (
    <section id="dashboard" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="داشبورد یکپارچه"
          title="یک صفحه، یک حقیقت"
          subtitle="هر نقش داشبورد مختص خود را دارد: مدیر اقدامات، عضو وظایف، HR روحیه و مدیریت مالی بودجه."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-5">
            {DASHBOARD_WIDGETS.map((widget, i) => {
              const WIcon = ICONS[widget.id];
              const isActive = selected === widget.id;
              return (
                <motion.button
                  key={widget.id}
                  type="button"
                  onClick={() => setSelected(widget.id)}
                  className={cn(
                    "spotlight-card glass cursor-pointer text-right shadow-sm transition-all",
                    isActive
                      ? "ring-1 ring-current/40"
                      : "opacity-80 hover:opacity-100 hover:ring-1 hover:ring-current/20",
                    colorMap[widget.color],
                    "rounded-2xl p-4"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <WIcon className="h-5 w-5" />
                  <div className="mt-3 text-sm font-semibold text-foreground">{widget.label}</div>
                  <div className="mt-1 text-xs text-muted">{widget.rows[0]}</div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <SpotlightCard className="h-full min-h-[360px] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl border bg-current/10",
                        colorMap[active.color]
                      )}
                    >
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{active.label}</h3>
                      <p className="text-xs text-muted">به‌روزرسانی لحظه‌ای از داده‌های واقعی</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {active.rows.map((row, i) => (
                      <motion.div
                        key={row}
                        className="flex items-center gap-3 rounded-xl border border-border bg-foreground/[0.02] px-4 py-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {i === 0 ? (
                          <AlertCircle className={cn("h-4 w-4", colorMap[active.color])} />
                        ) : (
                          <TrendingUp className="h-4 w-4 text-muted" />
                        )}
                        <span className="text-sm text-foreground">{row}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex -space-x-2 space-x-reverse">
                      {["cyan", "violet", "emerald", "amber"].map((c) => (
                        <div
                          key={c}
                          className={cn(
                            "h-8 w-8 rounded-full border-2 border-background bg-current/20",
                            colorMap[c]
                          )}
                        />
                      ))}
                    </div>
                    <motion.a
                      href="#contact"
                      className={cn(
                        "flex items-center gap-1.5 text-sm font-medium",
                        colorMap[active.color]
                      )}
                      whileHover={{ x: -4 }}
                    >
                      مشاهده در دمو
                      <ArrowLeft className="h-4 w-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
