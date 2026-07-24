"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useChartColors() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";

  return {
    tick: isDark ? "#94a3b8" : "#64748b",
    grid: isDark ? "rgba(148,163,184,0.08)" : "rgba(15,23,42,0.08)",
    tooltipBg: isDark ? "rgba(15,23,42,0.95)" : "rgba(255,255,255,0.95)",
    tooltipBorder: isDark ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.1)",
    tooltipText: isDark ? "#f1f5f9" : "#0f172a",
    legend: isDark ? "#94a3b8" : "#64748b",
  };
}
