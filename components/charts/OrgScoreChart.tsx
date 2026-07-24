"use client";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ORG_WEEKLY_SCORE, CHART_COLORS } from "@/lib/demo-data";
import { useChartColors } from "@/hooks/use-chart-colors";
import { ChartTooltip } from "./ChartTooltip";

export function OrgScoreChart() {
  const { tick } = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={ORG_WEEKLY_SCORE} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <XAxis dataKey="week" tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis domain={[0, 10]} tick={{ fill: tick, fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<ChartTooltip />} />
        <Bar dataKey="score" name="امتیاز سازمان" radius={[8, 8, 0, 0]}>
          {ORG_WEEKLY_SCORE.map((_, i) => (
            <Cell
              key={i}
              fill={i === ORG_WEEKLY_SCORE.length - 1 ? CHART_COLORS.cyan : CHART_COLORS.violet}
              opacity={0.6 + i * 0.1}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
