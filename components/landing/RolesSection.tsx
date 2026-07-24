"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const ROLES = [
  { role: "مدیرعامل", message: "یک نگاه به کل سازمان — عملیات، مالی و منابع انسانی", icon: "👔" },
  { role: "مدیر عملیات", message: "مرکز اقدام: همه تأییدها و کارهای معوق در یک جا", icon: "⚡" },
  { role: "مدیر پروژه", message: "تأیید وظایف، پیگیری اهداف و کنترل هزینه پروژه", icon: "📋" },
  { role: "منابع انسانی", message: "روحیه تیم، حضور، انگیزش و دستیار هوشمند", icon: "💚" },
  { role: "مدیر مالی", message: "درآمد و هزینه هر پروژه، حقوق و پیش‌فاکتور", icon: "💰" },
  { role: "عضو تیم", message: "وظایف، گفتگو، ثبت روحیه و امتیاز — در موبایل", icon: "🚀" },
];

const DIFFERENTIATORS = [
  { label: "طراحی بومی", desc: "راست‌به‌چپ · تقویم شمسی · بله و پیامک" },
  { label: "سامانه ماژولار", desc: "فقط آنچه نیاز دارید" },
  { label: "موبایل", desc: "نسخه وب و اپ اندروید" },
  { label: "هوش مصنوعی داخلی", desc: "از داده واقعی تیم شما" },
];

export function RolesSection() {
  return (
    <AnimatedSection id="roles" className="relative py-24 sm:py-32" stagger>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedItem>
          <SectionHeader
            badge="برای هر نقش"
            title="هر کسی ابزار درست خود را دارد"
            subtitle="از مدیرعامل تا عضو تیم — با سطح دسترسی دقیق و ماژول‌های قابل تنظیم."
          />
        </AnimatedItem>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((item) => (
            <AnimatedItem key={item.role}>
              <motion.article
                className="glass flex items-start gap-4 rounded-2xl p-6"
                whileHover={{ x: -4, borderColor: "rgba(167,139,250,0.25)" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground">{item.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.message}</p>
                </div>
              </motion.article>
            </AnimatedItem>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((d, i) => (
            <AnimatedItem key={d.label}>
              <motion.div
                className="rounded-2xl border border-border bg-gradient-to-bl from-foreground/[0.04] to-transparent p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="font-bold text-gradient">{d.label}</h4>
                <p className="mt-2 text-xs text-muted">{d.desc}</p>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
