"use client";

import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { WEEKLY_PERFORMANCE, CHART_COLORS } from "@/lib/demo-data";

export function HeroMiniChart() {
  return (
    <div className="h-16 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={WEEKLY_PERFORMANCE}>
          <defs>
            <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART_COLORS.cyan} stopOpacity={0.5} />
              <stop offset="100%" stopColor={CHART_COLORS.cyan} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="approved"
            stroke={CHART_COLORS.cyan}
            strokeWidth={2}
            fill="url(#heroGrad)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
