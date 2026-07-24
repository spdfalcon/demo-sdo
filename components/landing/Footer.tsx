export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20">
            <span className="text-sm font-bold text-gradient">S</span>
          </div>
          <div>
            <span className="text-sm font-bold text-foreground">SDO</span>
            <span className="block text-[10px] text-muted">سامانه مدیریتی اس‌داده</span>
          </div>
        </div>

        <p className="text-center text-xs text-muted" suppressHydrationWarning>
          © {new Date().getFullYear()} sdo.ir / sdata.ir — تمامی حقوق محفوظ است
        </p>

        <div className="flex gap-4 text-xs text-muted">
          <a href="#hero" className="transition hover:text-foreground">
            خانه
          </a>
          <a href="#dashboard" className="transition hover:text-foreground">
            داشبورد
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            تماس
          </a>
        </div>
      </div>
    </footer>
  );
}
