"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#hero", label: "خانه" },
  { href: "#analytics", label: "تحلیل" },
  { href: "#workflow", label: "گردش‌کار" },
  { href: "#dashboard", label: "داشبورد" },
  { href: "#modules", label: "ماژول‌ها" },
  { href: "#ai", label: "هوش مصنوعی" },
  { href: "#contact", label: "تماس" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        scrolled ? "header-bar shadow-lg" : "border-border bg-background/60"
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <motion.a
          href="#hero"
          className="group flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-border">
            <span className="text-lg font-bold text-gradient">S</span>
          </div>
          <div>
            <span className="block text-sm font-bold text-foreground">SDO</span>
            <span className="block text-[10px] text-muted">اس‌داده</span>
          </div>
        </motion.a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link rounded-lg px-3 py-2 text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <motion.a
            href="#contact"
            className="hidden rounded-xl border border-border px-4 py-2.5 text-sm text-foreground md:block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            درخواست مشاوره
          </motion.a>
          <motion.a
            href="#dashboard"
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-l from-cyan-500 to-violet-600 text-white px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 md:flex"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            مشاهده امکانات
            <ArrowLeft className="h-3.5 w-3.5" />
          </motion.a>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="منو"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-border bg-background/98 px-4 py-4 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="nav-link block rounded-lg px-3 py-2.5 text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl border border-border px-4 py-3 text-center text-sm text-foreground"
              >
                درخواست مشاوره
              </a>
              <a
                href="#dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gradient-to-l from-cyan-500 to-violet-600 text-white px-4 py-3 text-center text-sm font-medium text-foreground"
              >
                مشاهده امکانات
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
