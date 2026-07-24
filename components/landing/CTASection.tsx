"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedSection";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="شروع کنید"
          title="آماده‌اید SDO را در عمل ببینید؟"
          subtitle="جلسه معرفی اختصاصی بگیرید — محصول را متناسب با نیاز سازمانتان نشان می‌دهیم."
        />

        <FadeIn delay={0.2}>
          <motion.div
            className="glass mt-12 rounded-3xl p-8 sm:p-10"
            whileHover={{ borderColor: "rgba(34,211,238,0.2)" }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="py-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                  >
                    <CheckCircle className="h-8 w-8 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">درخواست ثبت شد</h3>
                  <p className="mt-2 text-sm text-muted">
                    تیم SDO به زودی با شما تماس می‌گیرد.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-muted">
                        نام و نام خانوادگی
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                        placeholder="مثلاً علی محمدی"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm text-muted">
                        نام سازمان
                      </label>
                      <input
                        id="company"
                        name="company"
                        required
                        className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                        placeholder="مثلاً شرکت فناوری X"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm text-muted">
                      شماره تماس
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      dir="ltr"
                      className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                      placeholder="0912..."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted">
                      توضیحات (اختیاری)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full resize-none rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                      placeholder="تعداد کارکنان، نیازهای اصلی..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-cyan-500 to-violet-600 text-white py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(34,211,238,0.35)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-4 w-4" />
                    ثبت درخواست معرفی
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </FadeIn>

        <p className="mt-8 text-center text-xs text-muted">
          یا مستقیماً:{" "}
          <a href="https://sdo.ir" className="text-cyan-400 hover:underline">
            sdo.ir
          </a>
        </p>
      </div>
    </section>
  );
}
