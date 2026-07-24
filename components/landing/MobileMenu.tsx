"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Home, Layers, LayoutDashboard, Sparkles, BarChart3, GitBranch, HelpCircle, Plug, Phone } from "lucide-react";

const MAIN_LINKS = [
  { href: "#hero", label: "خانه", icon: Home, desc: "صفحه اصلی" },
  { href: "#features", label: "امکانات", icon: Layers, desc: "۶ حوزه کاری SDO" },
  { href: "#dashboard", label: "داشبورد", icon: LayoutDashboard, desc: "یک صفحه، یک حقیقت" },
  { href: "#modules", label: "ماژول‌ها", icon: Sparkles, desc: "۲۷ ماژول یکپارچه" },
  { href: "#ai", label: "هوش مصنوعی", icon: Sparkles, desc: "دستیار بومی" },
];

const MORE_LINKS = [
  { href: "#analytics", label: "تحلیل", icon: BarChart3, desc: "نمودارها و KPI" },
  { href: "#workflow", label: "گردش‌کار", icon: GitBranch, desc: "چرخه WorkTask" },
  { href: "#why", label: "چرا SDO", icon: HelpCircle, desc: "مقایسه با روش سنتی" },
  { href: "#integrations", label: "یکپارچه‌سازی", icon: Plug, desc: "بله، گوگل، کاوه‌نگار" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5 sm:px-6">
            <a href="#hero" onClick={onClose} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-border">
                <span className="text-base font-bold text-gradient">S</span>
              </div>
              <div>
                <span className="block text-xs font-bold leading-none text-foreground">SDO</span>
                <span className="block text-[9px] text-muted">اس‌داده</span>
              </div>
            </a>
            <button
              type="button"
              className="cursor-pointer rounded-lg p-1.5 text-foreground"
              onClick={onClose}
              aria-label="بستن منو"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="min-h-0 flex-1 overflow-y-auto px-4 py-3 sm:px-6"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="mx-auto max-w-md">
              <div className="space-y-0.5">
                <p className="mb-2 px-3 text-[11px] font-medium text-muted">بخش‌های اصلی</p>
                {MAIN_LINKS.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 transition hover:bg-foreground/5"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{link.label}</div>
                        <div className="text-[11px] text-muted">{link.desc}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-4 space-y-0.5">
                <p className="mb-2 px-3 text-[11px] font-medium text-muted">بیشتر</p>
                {MORE_LINKS.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 transition hover:bg-foreground/5"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{link.label}</div>
                        <div className="text-[11px] text-muted">{link.desc}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-4 space-y-0.5">
                <p className="mb-2 px-3 text-[11px] font-medium text-muted">تماس</p>
                <motion.a
                  href="#contact"
                  onClick={onClose}
                  className="flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 transition hover:bg-foreground/5"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">تماس با ما</div>
                    <div className="text-[11px] text-muted">درخواست مشاوره یا جلسه</div>
                  </div>
                </motion.a>
              </div>

              <div className="mt-5 grid gap-2">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="block cursor-pointer rounded-xl border border-border px-4 py-2.5 text-center text-xs font-medium text-foreground transition hover:bg-foreground/5"
                >
                  درخواست مشاوره
                </a>
                <a
                  href="#features"
                  onClick={onClose}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-cyan-500 to-violet-600 px-4 py-2.5 text-center text-xs font-medium text-white transition"
                >
                  مشاهده امکانات
                  <ArrowLeft className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
