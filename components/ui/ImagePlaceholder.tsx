import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  width: number;
  height: number;
  label: string;
  hint?: string;
  className?: string;
  aspectRatio?: string;
  /** نمایش ابعاد و برچسب توسعه — فقط برای راهنمای داخلی */
  showDevMeta?: boolean;
};

export function ImagePlaceholder({
  width,
  height,
  label,
  hint,
  className = "",
  aspectRatio,
  showDevMeta = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn("placeholder-box relative overflow-hidden rounded-2xl border border-dashed", className)}
      style={{
        aspectRatio: aspectRatio ?? `${width} / ${height}`,
        maxWidth: width,
      }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-foreground/5">
          <svg className="h-6 w-6 text-cyan-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/80">{label}</p>
          {showDevMeta && (
            <p className="mt-1 font-mono text-xs text-cyan-400/70">
              {width} × {height} px
            </p>
          )}
          {hint && (
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted">{hint}</p>
          )}
        </div>
      </div>
      {showDevMeta && (
        <div className="absolute bottom-3 left-3 rounded-md bg-foreground/10 px-2 py-1 font-mono text-[10px] text-muted">
          نمای محصول
        </div>
      )}
    </div>
  );
}
