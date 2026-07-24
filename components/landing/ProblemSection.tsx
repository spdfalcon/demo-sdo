"use client";

import { motion } from "framer-motion";
import { AlertTriangle, EyeOff, BarChart3, Lock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "پراکندگی ابزارها",
    desc: "تسک در یک جا، چت در جای دیگر، مالی در Excel — هیچ تصویر واحدی از سازمان ندارید.",
    color: "text-amber-400",
  },
  {
    icon: EyeOff,
    title: "کوری مدیریتی",
    desc: "پیشرفت پروژه‌ها و عملکرد واقعی تیم در گزارش‌های دستی و جلسات طولانی گم می‌شود.",
    color: "text-rose-400",
  },
  {
    icon: BarChart3,
    title: "داده بدون بینش",
    desc: "اطلاعات زیاد دارید ولی تبدیل به تصمیم نمی‌شود — HR و مدیریت دیر متوجه می‌شوند.",
    color: "text-violet-400",
  },
  {
    icon: Lock,
    title: "پیچیدگی دسترسی",
    desc: "در تیم بزرگ، کنترل اینکه چه کسی چه چیزی ببیند تقریباً غیرممکن می‌شود.",
    color: "text-cyan-400",
  },
];

export function ProblemSection() {
  return (
    <AnimatedSection id="problem" className="relative py-24 sm:py-32" stagger>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="چالش سازمان‌های امروز"
            title="۵ ابزار جدا = ۵ حقیقت جدا"
            subtitle="مدیران ارشد وقت خود را صرف جمع‌آوری گزارش می‌کنند، نه تصمیم‌گیری. SDO این چرخه را می‌شکند."
          />
        </AnimatedItem>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((item) => (
            <AnimatedItem key={item.title}>
              <motion.article
                className="glass h-full rounded-2xl p-6"
                whileHover={{
                  y: -6,
                  borderColor: "rgba(248,113,113,0.25)",
                  backgroundColor: "rgba(248,113,113,0.03)",
                }}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </motion.article>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem>
          <motion.div
            className="mt-12 rounded-2xl border border-cyan-400/20 bg-gradient-to-l from-cyan-400/5 to-violet-500/5 p-8 text-center"
            whileInView={{ scale: [0.97, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-medium text-foreground">
              SDO جایگزین <span className="text-cyan-400">پراکندگی</span> با{" "}
              <span className="text-violet-400">یکپارچگی</span> می‌شود
            </p>
          </motion.div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
