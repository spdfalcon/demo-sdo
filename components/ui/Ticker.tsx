"use client";

import { cn } from "@/lib/utils";

export function Ticker({ items, className }: { items: string[]; className?: string }) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("ticker-wrap", className)}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="mx-3 flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-5 py-2.5 text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
