"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MOOD_BY_DEPT, CHART_COLORS } from "@/lib/demo-data";
import { useChartColors } from "@/hooks/use-chart-colors";
import { ChartTooltip } from "./ChartTooltip";

export function MoodPulseChart() {
  const { tick, grid } = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={MOOD_BY_DEPT} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="dept" tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis domain={[0, 10]} tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<ChartTooltip />} />
        <Line type="monotone" dataKey="mood" name="روحیه" stroke={CHART_COLORS.emerald} strokeWidth={2.5} dot={{ fill: CHART_COLORS.emerald, r: 4 }} />
        <Line type="monotone" dataKey="workload" name="بار کاری ٪" stroke={CHART_COLORS.rose} strokeWidth={2} strokeDasharray="5 5" dot={{ fill: CHART_COLORS.rose, r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
