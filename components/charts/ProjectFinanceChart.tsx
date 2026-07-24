"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PROJECT_COSTS, CHART_COLORS } from "@/lib/demo-data";
import { useChartColors } from "@/hooks/use-chart-colors";
import { ChartTooltip } from "./ChartTooltip";

export function ProjectFinanceChart() {
  const { tick, grid, legend } = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={PROJECT_COSTS} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="project" tick={{ fill: tick, fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} unit="M" />
        <Tooltip content={<ChartTooltip />} />
        <Legend wrapperStyle={{ fontSize: 11, color: legend, paddingTop: 12 }} />
        <Bar dataKey="budget" name="بودجه" fill={CHART_COLORS.violet} radius={[6, 6, 0, 0]} opacity={0.7} />
        <Bar dataKey="spent" name="هزینه شده" fill={CHART_COLORS.cyan} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
