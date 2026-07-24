/** داده‌های نمونه برای نمودارها و بخش‌های لندینگ */

export const CHART_COLORS = {
  cyan: "#22d3ee",
  violet: "#a78bfa",
  emerald: "#34d399",
  amber: "#fbbf24",
  rose: "#fb7185",
  blue: "#60a5fa",
  muted: "#64748b",
};

export const KPI_STATS = [
  {
    id: "approved",
    label: "وظایف تأییدشده",
    value: 128,
    suffix: "",
    change: "+۱۲٪",
    trend: "up" as const,
    source: "ثبت وظایف",
  },
  {
    id: "pending",
    label: "منتظر تأیید مدیر",
    value: 14,
    suffix: "",
    change: "۳ فوری",
    trend: "warn" as const,
    source: "مرکز اقدام",
  },
  {
    id: "mood",
    label: "میانگین روحیه تیم",
    value: 7.4,
    suffix: "/۱۰",
    change: "+۰.۸",
    trend: "up" as const,
    source: "نبض تیم",
  },
  {
    id: "budget",
    label: "مصرف بودجه پروژه‌ها",
    value: 78,
    suffix: "٪",
    change: "۲ هشدار",
    trend: "warn" as const,
    source: "مدیریت مالی",
  },
];

export const WEEKLY_PERFORMANCE = [
  { day: "شنبه", tasks: 18, hours: 42, approved: 15 },
  { day: "یکشنبه", tasks: 22, hours: 48, approved: 19 },
  { day: "دوشنبه", tasks: 25, hours: 52, approved: 22 },
  { day: "سه‌شنبه", tasks: 20, hours: 45, approved: 18 },
  { day: "چهارشنبه", tasks: 28, hours: 56, approved: 24 },
  { day: "پنجشنبه", tasks: 24, hours: 50, approved: 21 },
  { day: "جمعه", tasks: 12, hours: 28, approved: 10 },
];

export const TASK_STATUS = [
  { name: "تأیید نهایی", value: 45, color: CHART_COLORS.emerald },
  { name: "منتظر تأیید", value: 22, color: CHART_COLORS.cyan },
  { name: "در حال انجام", value: 18, color: CHART_COLORS.violet },
  { name: "معوق", value: 8, color: CHART_COLORS.rose },
  { name: "جدید", value: 7, color: CHART_COLORS.amber },
];

export const PROJECT_COSTS = [
  { project: "پروژه توسعه", budget: 100, spent: 72, color: CHART_COLORS.cyan },
  { project: "پروژه بازطراحی", budget: 80, spent: 85, color: CHART_COLORS.rose },
  { project: "پروژه CRM", budget: 60, spent: 45, color: CHART_COLORS.emerald },
  { project: "پروژه منابع انسانی", budget: 40, spent: 38, color: CHART_COLORS.violet },
  { project: "پروژه فروش", budget: 90, spent: 68, color: CHART_COLORS.amber },
];

export const MOOD_BY_DEPT = [
  { dept: "فروش", mood: 6.2, workload: 85 },
  { dept: "فنی", mood: 7.8, workload: 72 },
  { dept: "HR", mood: 8.1, workload: 55 },
  { dept: "مالی", mood: 7.4, workload: 60 },
  { dept: "پشتیبانی", mood: 6.9, workload: 78 },
];

export const ORG_WEEKLY_SCORE = [
  { week: "هفته ۱", score: 6.8 },
  { week: "هفته ۲", score: 7.2 },
  { week: "هفته ۳", score: 7.5 },
  { week: "هفته ۴", score: 8.1 },
];

export const WORKFLOW_STEPS = [
  { id: 1, title: "ثبت وظیفه", role: "کارمند / مدیر پروژه", desc: "ثبت عنوان، توضیح و زمان انجام", status: "done" },
  { id: 2, title: "در حال انجام", role: "مجری", desc: "پیگیری و انجام کار روزانه", status: "done" },
  { id: 3, title: "انجام شده", role: "مجری", desc: "آماده بررسی و تأیید مدیر پروژه", status: "active" },
  { id: 4, title: "تأیید مدیر پروژه", role: "مدیر پروژه", desc: "بررسی کیفیت و تأیید انجام کار", status: "pending" },
  { id: 5, title: "تأیید مدیر ارشد", role: "مدیر عملیات", desc: "تأیید نهایی قبل از ثبت رسمی", status: "pending" },
  { id: 6, title: "گزارش و مالی", role: "سیستم", desc: "ثبت در گزارش‌ها، هزینه و پاداش", status: "pending" },
];

export const INTEGRATIONS = [
  { name: "بله", desc: "گزارش روزانه و ربات سازمانی", tag: "bale_daily_report" },
  { name: "کاوه‌نگار", desc: "رمز یک‌بارمصرف، یادآور وظیفه و پیامک", tag: "SMS" },
  { name: "تقویم گوگل", desc: "همگام‌سازی وظایف با تقویم شخصی", tag: "calendar" },
  { name: "پروفایل هوشمند", desc: "یادگیری از الگوی کار هر نفر در تیم", tag: "AI" },
  { name: "دستیار منابع انسانی", desc: "پاسخ به سوالات پرتکرار از پایگاه دانش", tag: "hr_assistant" },
  { name: "رونویسی جلسات", desc: "خلاصه‌سازی خودکار مذاکرات تیمی", tag: "transcribe" },
];
