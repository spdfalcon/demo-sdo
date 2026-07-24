"use client";

import { useChartColors } from "@/hooks/use-chart-colors";

type ChartTooltipProps = {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number; color?: string }>;
  label?: string;
};

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  const colors = useChartColors();

  if (!active || !payload?.length) return null;

  return (
    <div
      className="rounded-xl border px-4 py-3 shadow-xl backdrop-blur-md"
      style={{
        backgroundColor: colors.tooltipBg,
        borderColor: colors.tooltipBorder,
      }}
    >
      {label && (
        <p className="mb-2 text-xs font-medium" style={{ color: colors.tooltipText }}>
          {label}
        </p>
      )}
      <div className="space-y-1">
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted">{entry.name}:</span>
            <span className="font-mono" style={{ color: colors.tooltipText }}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
