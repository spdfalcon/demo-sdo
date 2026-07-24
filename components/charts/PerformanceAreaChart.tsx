"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WEEKLY_PERFORMANCE, CHART_COLORS } from "@/lib/demo-data";
import { useChartColors } from "@/hooks/use-chart-colors";
import { ChartTooltip } from "./ChartTooltip";

export function PerformanceAreaChart() {
  const { tick, grid } = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={WEEKLY_PERFORMANCE} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="gradTasks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_COLORS.cyan} stopOpacity={0.4} />
            <stop offset="100%" stopColor={CHART_COLORS.cyan} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradApproved" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_COLORS.emerald} stopOpacity={0.35} />
            <stop offset="100%" stopColor={CHART_COLORS.emerald} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="day" tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<ChartTooltip />} />
        <Area type="monotone" dataKey="tasks" name="وظایف ثبت‌شده" stroke={CHART_COLORS.cyan} strokeWidth={2} fill="url(#gradTasks)" />
        <Area type="monotone" dataKey="approved" name="تأییدشده" stroke={CHART_COLORS.emerald} strokeWidth={2} fill="url(#gradApproved)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
