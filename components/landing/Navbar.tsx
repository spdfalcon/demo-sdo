"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowLeft, ChevronDown, BarChart3, GitBranch, HelpCircle, Plug } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { href: "#hero", label: "خانه" },
  { href: "#features", label: "امکانات" },
  { href: "#dashboard", label: "داشبورد" },
  { href: "#modules", label: "ماژول‌ها" },
  { href: "#ai", label: "هوش مصنوعی" },
];

const MORE_LINKS = [
  { href: "#analytics", label: "تحلیل", icon: BarChart3, desc: "نمودارها و KPI" },
  { href: "#workflow", label: "گردش‌کار", icon: GitBranch, desc: "چرخه WorkTask" },
  { href: "#why", label: "چرا SDO", icon: HelpCircle, desc: "مقایسه با روش سنتی" },
  { href: "#integrations", label: "یکپارچه‌سازی", icon: Plug, desc: "بله، گوگل، کاوه‌نگار" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
          scrolled ? "header-bar shadow-lg" : "border-border bg-background/60"
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <motion.a
            href="#hero"
            className="group flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-border">
              <span className="text-lg font-bold text-gradient">S</span>
            </div>
            <div>
              <span className="block text-sm font-bold leading-none text-foreground">SDO</span>
              <span className="block text-[10px] text-muted">اس‌داده</span>
            </div>
          </motion.a>

          <ul className="hidden items-center gap-1 xl:flex">
            {MAIN_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link rounded-lg px-3 py-2 text-sm">
                  {link.label}
                </a>
              </li>
            ))}

            <li
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className={cn(
                  "nav-link flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm",
                  moreOpen && "text-foreground"
                )}
                aria-expanded={moreOpen}
              >
                بیشتر
                <motion.span
                  animate={{ rotate: moreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.span>
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    className="absolute top-full right-0 w-64 origin-top-right rounded-2xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-xl"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    {MORE_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-foreground/5"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">{item.label}</div>
                            <div className="text-[11px] text-muted">{item.desc}</div>
                          </div>
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a href="#contact" className="nav-link rounded-lg px-3 py-2 text-sm">
                تماس
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <motion.a
              href="#contact"
              className="hidden rounded-xl border border-border px-4 py-2.5 text-sm text-foreground lg:block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              درخواست مشاوره
            </motion.a>
            <motion.a
              href="#features"
              className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-l from-cyan-500 to-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 lg:flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              مشاهده امکانات
              <ArrowLeft className="h-3.5 w-3.5" />
            </motion.a>

            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-foreground xl:hidden"
              onClick={() => setOpen(!open)}
              aria-label="منو"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
