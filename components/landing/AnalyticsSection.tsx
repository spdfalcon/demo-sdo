"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, AlertCircle, Activity, Wallet } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { KPI_STATS } from "@/lib/demo-data";
import { PerformanceAreaChart } from "@/components/charts/PerformanceAreaChart";
import { TaskStatusChart } from "@/components/charts/TaskStatusChart";
import { ProjectFinanceChart } from "@/components/charts/ProjectFinanceChart";
import { MoodPulseChart } from "@/components/charts/MoodPulseChart";
import { OrgScoreChart } from "@/components/charts/OrgScoreChart";
import { cn } from "@/lib/utils";

const KPI_ICONS = {
  approved: TrendingUp,
  pending: AlertCircle,
  mood: Activity,
  budget: Wallet,
};

export function AnalyticsSection() {
  return (
    <AnimatedSection id="analytics" className="relative py-24 sm:py-32" stagger>
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="داشبورد تحلیلی"
            title="داده واقعی تیم، تصمیم به‌موقع"
            subtitle="عملکرد هفتگی، وضعیت وظایف، هزینه پروژه و سلامت تیم — همان چیزی که مدیر هر روز نیاز دارد."
          />
        </AnimatedItem>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPI_STATS.map((kpi) => {
            const Icon = KPI_ICONS[kpi.id as keyof typeof KPI_ICONS];
            return (
              <AnimatedItem key={kpi.id}>
                <motion.div
                  className="glass rounded-2xl p-5"
                  whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.25)" }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium",
                        kpi.trend === "up"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-amber-400/10 text-amber-400"
                      )}
                    >
                      {kpi.change}
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-bold text-foreground">
                    {typeof kpi.value === "number" && kpi.value % 1 !== 0 ? (
                      <CountUp end={kpi.value} decimals={1} duration={2} enableScrollSpy scrollSpyOnce />
                    ) : (
                      <CountUp end={kpi.value as number} duration={2} enableScrollSpy scrollSpyOnce />
                    )}
                    <span className="text-lg text-muted">{kpi.suffix}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{kpi.label}</p>
                  <p className="mt-2 text-[10px] text-cyan-400/50">{kpi.source}</p>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <AnimatedItem className="lg:col-span-2">
            <motion.div
              className="glass h-full rounded-3xl p-6"
              whileHover={{ borderColor: "rgba(34,211,238,0.15)" }}
            >
              <div className="mb-4">
                <h3 className="font-bold text-foreground">عملکرد هفتگی وظایف</h3>
                <p className="text-xs text-muted">مقایسه ثبت‌شده و تأییدشده در هفته جاری</p>
              </div>
              <PerformanceAreaChart />
            </motion.div>
          </AnimatedItem>

          <AnimatedItem>
            <motion.div className="glass h-full rounded-3xl p-6" whileHover={{ borderColor: "rgba(167,139,250,0.15)" }}>
              <div className="mb-2">
                <h3 className="font-bold text-foreground">وضعیت وظایف</h3>
                <p className="text-xs text-muted">توزیع وظایف در مراحل مختلف گردش کار</p>
              </div>
              <TaskStatusChart />
              <div className="mt-2 flex flex-wrap gap-2">
                {["تأیید نهایی", "منتظر تأیید", "معوق"].map((l) => (
                  <span key={l} className="text-[10px] text-muted">
                    ● {l}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedItem>

          <AnimatedItem className="lg:col-span-2">
            <motion.div className="glass rounded-3xl p-6" whileHover={{ borderColor: "rgba(52,211,153,0.15)" }}>
              <div className="mb-4">
                <h3 className="font-bold text-foreground">هزینه پروژه در برابر بودجه</h3>
                <p className="text-xs text-muted">مقایسه هزینه واقعی با سقف تعیین‌شده — میلیون تومان</p>
              </div>
              <ProjectFinanceChart />
            </motion.div>
          </AnimatedItem>

          <AnimatedItem>
            <motion.div className="glass rounded-3xl p-6" whileHover={{ borderColor: "rgba(251,113,133,0.15)" }}>
              <div className="mb-2">
                <h3 className="font-bold text-foreground">امتیاز هفتگی سازمان</h3>
                <p className="text-xs text-muted">روند بهبود عملکرد در چهار هفته اخیر</p>
              </div>
              <OrgScoreChart />
            </motion.div>
          </AnimatedItem>

          <AnimatedItem className="lg:col-span-3">
            <motion.div className="glass rounded-3xl p-6" whileHover={{ borderColor: "rgba(167,139,250,0.15)" }}>
              <div className="mb-4">
                <h3 className="font-bold text-foreground">روحیه و بار کاری هر واحد</h3>
                <p className="text-xs text-muted">
                  شناسایی زودهنگام خستگی تیم قبل از تبدیل شدن به بحران
                </p>
              </div>
              <MoodPulseChart />
            </motion.div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
