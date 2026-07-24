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

export const FEATURE_CATEGORIES = [
  {
    id: "platform",
    label: "پلتفرم",
    icon: "Layers",
    color: "cyan",
    features: [
      { title: "داشبورد شخصی", desc: "خلاصه وظایف، روحیه و اقدامات روزانه هر کاربر" },
      { title: "مرکز اقدام مدیر", desc: "تأییدها، معوق‌ها و هشدارها در یک نگاه" },
      { title: "احراز هویت OTP", desc: "ورود با SMS کاوه‌نگار یا ایمیل یک‌بارمصرف" },
      { title: "ساختار چندسازمانی", desc: "هر سازمان داده و مجوزهای مستقل خود را دارد" },
      { title: "PWA + Android", desc: "نصب روی موبایل و استفاده آفلاین‌محور" },
    ],
  },
  {
    id: "operations",
    label: "عملیات",
    icon: "Zap",
    color: "violet",
    features: [
      { title: "WorkTask", desc: "وظایف با گردش کار تأیید PM → Admin" },
      { title: "پروژه‌های SDO", desc: "مدیریت پروژه، OKR و دعوت اعضا" },
      { title: "بورد کانبان", desc: "ستون، کارت و drag & drop با دسترسی دقیق" },
      { title: "برچسب و پیوست", desc: "سازماندهی وظایف با label و فایل" },
      { title: "روزهای کاری", desc: "تنظیم تقویم کاری هر سازمان" },
    ],
  },
  {
    id: "business",
    label: "کسب‌وکار",
    icon: "TrendingUp",
    color: "emerald",
    features: [
      { title: "مالی", desc: "درآمد، هزینه، حقوق، پیش‌فاکتور و مانده حساب" },
      { title: "CRM", desc: "سرنخ، مشتری، سفارش و فعالیت فروش" },
      { title: "پورسانت", desc: "تیم پروژه، تنظیمات org و گزارش PnL" },
      { title: "گزارش‌ها", desc: "گزارش کار روزانه، هزینه پروژه و خروجی Excel" },
      { title: "import Excel", desc: "ورود داده از Excel برای مدیریت مالی" },
    ],
  },
  {
    id: "collaboration",
    label: "همکاری",
    icon: "MessageCircle",
    color: "blue",
    features: [
      { title: "چت Real-time", desc: "اتاق خصوصی/گروهی با WebSocket و fallback HTTP" },
      { title: "Notion", desc: "مستندات تیمی با CKEditor5، تگ و کامنت" },
      { title: "Pulse", desc: "داشبورد روحیه، بار کاری و واحد سازمانی" },
      { title: "Persona AI", desc: "پروفایل هوشمند، جلسات AI و RAG از WorkTask" },
      { title: "رونویسی", desc: "رونویسی و خلاصه‌سازی جلسات با AI" },
    ],
  },
  {
    id: "engagement",
    label: "انگیزش",
    icon: "Trophy",
    color: "amber",
    features: [
      { title: "سکه و جوایز", desc: "امتیازدهی، فروشگاه جوایز و هدیه همکار" },
      { title: "Mood روزانه", desc: "ثبت روحیه و نمودار سلامت تیم" },
      { title: "Presence", desc: "check-in/check-out، استندآپ و جایزه هفتگی" },
      { title: "HR Workspace", desc: "مسیر شغلی، چالش‌ها و competency framework" },
      { title: "HR Assistant", desc: "چت RAG برای سوالات منابع انسانی" },
    ],
  },
  {
    id: "integrations",
    label: "یکپارچه‌سازی",
    icon: "Plug",
    color: "rose",
    features: [
      { title: "Google Calendar", desc: "sync وظایف با تقویم شخصی" },
      { title: "بله", desc: "گزارش روزانه خودکار و ربات سازمانی" },
      { title: "کاوه‌نگار", desc: "پیامک OTP، یادآور و اعلان" },
      { title: "Transcribe", desc: "رونویسی صوتی و خلاصه AI" },
      { title: "بلاگ", desc: "مقالات SEO و محتوای عمومی" },
    ],
  },
];

export const COMPARISON_ROWS = [
  { label: "ابزارهای پراکنده", without: "۵+ ابزار و Excel", with: "یک پلتفرم یکپارچه" },
  { label: "گزارش‌دهی", without: "دستی و زمان‌بر", with: "خودکار از WorkTask و مالی" },
  { label: "تأیید وظایف", without: "بدون ساختار", with: "PM → Admin با قفل ویرایش" },
  { label: "سلامت تیم", without: "غیرقابل اندازه‌گیری", with: "Pulse، Mood و Presence" },
  { label: "دسترسی", without: "سخت و ناامن", with: "RBAC + ReBAC per سازمان" },
  { label: "پشتیبانی فارسی", without: "محصولات خارجی", with: "راست‌به‌چپ، شمسی، بله" },
];

export const TESTIMONIALS = [
  {
    role: "مدیرعامل",
    org: "استارتاپ فین‌تک",
    text: "با SDO برای اولین بار کل سازمان را در یک داشبورد می‌بینم؛ از وظایف تا هزینه و روحیه تیم.",
  },
  {
    role: "مدیر منابع انسانی",
    org: "شرکت نرم‌افزاری",
    text: "گزارش خودکار و Mood روزانه به ما کمک کرد زودتر متوجه خستگی تیم شویم و پیش‌قدم شویم.",
  },
  {
    role: "مدیر پروژه",
    org: "آژانس دیجیتال",
    text: "گردش کار تأیید WorkTask باعث شد کیفیت خروجی تیم بالا برود و گزارش‌ها خودکار شوند.",
  },
];

export const DASHBOARD_WIDGETS = [
  { id: "action", label: "مرکز اقدام", color: "cyan", rows: ["۳ وظیفه منتظر تأیید", "۲ پروژه نزدیک سقف بودجه", "۱ عضو با روحیه پایین"] },
  { id: "tasks", label: "وضعیت وظایف", color: "violet", rows: ["۴۵ تأیید نهایی", "۲۲ منتظر تأیید", "۱۸ در حال انجام", "۸ معوق"] },
  { id: "mood", label: "نبض تیم", color: "rose", rows: ["میانگین روحیه ۷.۴/۱۰", "فروش: بار کاری ۸۵٪", "HR: پیشنهاد جلسه"] },
  { id: "finance", label: "مالی", color: "emerald", rows: ["مصرف بودجه ۷۸٪", "۲ هشدار هزینه", "پیش‌فاکتور ۵ عدد"] },
  { id: "calendar", label: "تقویم", color: "amber", rows: ["۵ وظیفه sync با Google", "۲ جلسه امروز", "گزارش روزانه بله"] },
  { id: "presence", label: "حضور", color: "blue", rows: ["۲۴ check-in امروز", "استندآپ ۱۰:۰۰", "جایزه هفتگی فعال"] },
];

export const TRUST_BADGES = [
  "SaaS چندسازمانی",
  "۲۷ اپ Django",
  "WebSocket Real-time",
  "RBAC + ReBAC",
  "PWA + Android",
  "هوش مصنوعی بومی",
  "RTL فارسی",
  "کاوه‌نگار / بله",
];
