"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={cn("flex h-9 w-[88px] rounded-xl bg-foreground/5", className)} />
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex items-center rounded-xl border border-border bg-foreground/5 p-1",
        className
      )}
      role="group"
      aria-label="انتخاب تم"
    >
      <motion.button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
          !isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-muted hover:text-foreground"
        )}
        whileTap={{ scale: 0.95 }}
        aria-pressed={!isDark}
        aria-label="تم روشن"
      >
        <Sun className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">روشن</span>
      </motion.button>
      <motion.button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
          isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-muted hover:text-foreground"
        )}
        whileTap={{ scale: 0.95 }}
        aria-pressed={isDark}
        aria-label="تم تاریک"
      >
        <Moon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">تاریک</span>
      </motion.button>
    </div>
  );
}
