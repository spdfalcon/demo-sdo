"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Clock, ArrowLeft, User, ShieldCheck, FileCheck, Coins } from "lucide-react";
import { WORKFLOW_STEPS } from "@/lib/demo-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

const ROLE_ICONS: Record<string, React.ElementType> = {
  "کارمند / مدیر پروژه": User,
  مجری: User,
  "مدیر پروژه": ShieldCheck,
  "مدیر عملیات": FileCheck,
  سیستم: Coins,
};

export function InteractiveWorkflow() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section id="workflow" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="گردش کار هوشمند"
          title="از ثبت وظیفه تا گزارش و مالی"
          subtitle="هر WorkTask مسیر تأیید چندمرحله‌ای دارد؛ سپس خودکار در گزارش‌ها، حقوق و پاداش منعکس می‌شود."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute right-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-400/50 via-cyan-400/30 to-transparent md:block" />
              <div className="space-y-4">
                {WORKFLOW_STEPS.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <motion.button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={cn(
                        "group relative flex w-full cursor-pointer items-start gap-4 rounded-2xl border p-5 text-right shadow-sm transition-all",
                        isActive
                          ? "glass-strong border-cyan-400/30 bg-cyan-400/5"
                          : "glass border-border hover:border-cyan-400/30 hover:bg-cyan-400/5"
                      )}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
                        {step.status === "done" && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                        {step.status === "active" && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            <Clock className="h-5 w-5 text-cyan-400" />
                          </motion.div>
                        )}
                        {step.status === "pending" && <Circle className="h-5 w-5 text-foreground/20" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-foreground">{step.title}</h3>
                          <span className="rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] text-muted">
                            {step.role}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted">{step.desc}</p>
                      </div>
                      {i < WORKFLOW_STEPS.length - 1 && (
                        <ArrowLeft className="hidden h-4 w-4 text-foreground/20 group-hover:text-cyan-400 md:block" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SpotlightCard className="h-full min-h-[320px] p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {(() => {
                    const step = WORKFLOW_STEPS[activeStep];
                    const RoleIcon = ROLE_ICONS[step.role] || User;
                    return (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                            <RoleIcon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                            <p className="text-xs text-muted">{step.role}</p>
                          </div>
                        </div>

                        <p className="mt-6 text-sm leading-relaxed text-muted">{step.desc}</p>

                        <div className="mt-8 space-y-3">
                          {(
                            {
                              1: [
                                "تعیین اولویت، مسئول و زمان‌بندی مشخص",
                                "تخصیص خودکار به پروژه و تیم مرتبط",
                                "ثبت توضیحات و پیوست برای شفافیت",
                              ],
                              2: [
                                "پیگیری پیشرفت روزانه به‌صورت شفاف",
                                "مشاهده وابستگی‌ها و موانع کار",
                                "به‌روزرسانی وضعیت بدون پیچیدگی",
                              ],
                              3: [
                                "آماده‌سازی خودکار برای بررسی مدیر",
                                "ثبت زمان واقعی صرف‌شده روی کار",
                                "جلوگیری از فراموشی کارهای تمام‌شده",
                              ],
                              4: [
                                "بررسی کیفیت و مطابقت با هدف پروژه",
                                "بازگشت سریع برای اصلاح در صورت نیاز",
                                "تأیید قبل از ثبت نهایی و مالی",
                              ],
                              5: [
                                "کنترل نهایی و مسئولیت‌پذیری مدیریتی",
                                "قفل ویرایش پس از تأیید برای امنیت",
                                "ورود اطلاعات به گزارش‌های سازمان",
                              ],
                              6: [
                                "محاسبه خودکار هزینه هر پروژه",
                                "تأثیر در حقوق، پاداش و امتیاز تیم",
                                "گزارش‌دهی بدون نیاز به جمع‌آوری دستی",
                              ],
                            }[step.id] || []
                          ).map((item, i) => (
                            <motion.div
                              key={item}
                              className="flex items-center gap-2 text-sm text-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              {item}
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-border bg-foreground/[0.02] p-4">
                          <p className="text-xs text-muted">وضعیت فعلی</p>
                          <div className="mt-2 flex items-center gap-2">
                            {step.status === "done" && (
                              <>
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                <span className="text-sm font-medium text-emerald-400">انجام شده</span>
                              </>
                            )}
                            {step.status === "active" && (
                              <>
                                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                <span className="text-sm font-medium text-cyan-400">در حال انجام</span>
                              </>
                            )}
                            {step.status === "pending" && (
                              <>
                                <span className="h-2 w-2 rounded-full bg-foreground/20" />
                                <span className="text-sm font-medium text-muted">در انتظار</span>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
