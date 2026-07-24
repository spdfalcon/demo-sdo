"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, ArrowLeft } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { WORKFLOW_STEPS } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

function StepIcon({ status }: { status: string }) {
  if (status === "done") return <CheckCircle2 className="h-5 w-5 text-emerald-400" />;
  if (status === "active") return (
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
      <Clock className="h-5 w-5 text-cyan-400" />
    </motion.div>
  );
  return <Circle className="h-5 w-5 text-foreground/20" />;
}

export function WorkflowSection() {
  return (
    <AnimatedSection id="workflow" className="relative py-24 sm:py-32" stagger>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="گردش کار روزانه"
            title="از ثبت وظیفه تا گزارش مالی"
            subtitle="هر کار با تأیید چندمرحله‌ای عبور می‌کند — سپس در گزارش‌ها و حساب‌های مالی ثبت می‌شود."
          />
        </AnimatedItem>

        <div className="mt-16 relative">
          <div className="absolute right-[27px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-emerald-400/50 via-cyan-400/30 to-transparent md:block" />

          <div className="space-y-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <AnimatedItem key={step.id}>
                <motion.div
                  className={cn(
                    "glass flex items-start gap-4 rounded-2xl p-5 md:pr-8",
                    step.status === "active" && "border-cyan-400/30 bg-cyan-400/5",
                    step.status === "done" && "border-emerald-400/10"
                  )}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: -4 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
                    <StepIcon status={step.status} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-foreground">{step.title}</h3>
                      <span className="rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] text-muted">
                        {step.role}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted">{step.desc}</p>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <ArrowLeft className="hidden h-4 w-4 text-foreground/20 md:block" />
                  )}
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        <AnimatedItem>
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { label: "گزارش خودکار", items: "گزارش عملکرد · ثبت هزینه" },
              { label: "انگیزش تیم", items: "امتیاز و پاداش · یادآوری معوق‌ها" },
              { label: "اتصال به ابزارها", items: "تقویم گوگل · پیامک یادآور" },
            ].map((box) => (
              <div key={box.label} className="rounded-xl border border-border bg-foreground/[0.02] p-4 text-center">
                <p className="text-xs font-medium text-violet-300">{box.label}</p>
                <p className="mt-1 text-sm text-muted">{box.items}</p>
              </div>
            ))}
          </motion.div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
