"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SLIDES = [
  {
    id: "dashboard",
    title: "داشبورد مدیریتی",
    desc: "ویجت وظایف، نمودار عملکرد، امتیاز هفتگی سازمان و دسترسی سریع به همه بخش‌ها.",
    width: 1100,
    height: 620,
    label: "داشبورد شخصی مدیر",
    hint: "وظایف، امتیاز و نمودار عملکرد در یک نگاه",
  },
  {
    id: "action-center",
    title: "مرکز اقدام و نبض تیم",
    desc: "کارهای منتظر تأیید شما. سلامت تیم، روحیه و هشدار قبل از بحران.",
    width: 1100,
    height: 620,
    label: "مرکز اقدام و سلامت تیم",
    hint: "تأییدهای معوق و وضعیت انرژی تیم",
  },
  {
    id: "finance",
    title: "مالی و گزارش پروژه",
    desc: "هزینه هر پروژه، درآمد و هزینه، حقوق نیروی انسانی و پیش‌فاکتور — شفافیت مالی واقعی.",
    width: 1100,
    height: 620,
    label: "داشبورد مالی",
    hint: "بودجه، هزینه و پیش‌بینی مالی پروژه‌ها",
  },
  {
    id: "ai-assistant",
    title: "دستیار هوشمند",
    desc: "پاسخ به سوالات منابع انسانی، بینش از کار تیم و گزارش روزانه خودکار از بله.",
    width: 1100,
    height: 620,
    label: "دستیار هوشمند سازمان",
    hint: "گفتگو با دستیار و پیشنهادهای مدیریتی",
  },
];

export function DashboardSlider() {
  const [active, setActive] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "center" },
    [Autoplay({ delay: 5500, stopOnInteraction: true })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActive(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const slide = SLIDES[active];

  return (
    <section id="dashboard" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="پیش‌نمایش محصول"
          title="داشبوردی که مدیر می‌خواهد ببیند"
          subtitle="نماهایی که هر روز با آن کار می‌کنید — ساده، شفاف و یکپارچه."
        />

        <div className="mt-16">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-xs text-cyan-400/70">
                  {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-foreground">{slide.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-muted">{slide.desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={scrollPrev}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-foreground/5 text-foreground"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="اسلاید قبلی"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={scrollNext}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-foreground/5 text-foreground"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="اسلاید بعدی"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            </div>
          </div>

          <div className="glow-ring overflow-hidden rounded-3xl p-1">
            <div ref={emblaRef} className="overflow-hidden rounded-[22px]">
              <div className="flex">
                {SLIDES.map((s) => (
                  <div key={s.id} className="min-w-0 flex-[0_0_100%]">
                    <ImagePlaceholder
                      width={s.width}
                      height={s.height}
                      label={s.label}
                      hint={s.hint}
                      className="w-full max-w-none rounded-none border-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-gradient-to-l from-cyan-400 to-violet-500"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={s.title}
                />
              ))}
            </div>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {SLIDES.map((s, i) => (
                <motion.button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(i)}
                  className={`rounded-xl border p-3 text-right transition ${
                    i === active
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-border bg-foreground/[0.02] hover:bg-foreground/5"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-[10px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-xs font-medium text-foreground">{s.title}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
