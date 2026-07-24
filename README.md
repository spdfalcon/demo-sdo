# SDO Demo Landing

لندینگ دمو Next.js برای پرزنت محصول SDO به مدیران ارشد — با چارت‌های تحلیلی زنده.

## اجرا

```bash
npm install
npm run dev
```

## کتابخانه‌ها

| کتابخانه | کاربرد |
|----------|--------|
| **recharts** | نمودارهای داشبورد (Area, Bar, Line, Pie) |
| **framer-motion** | انیمیشن scroll و hover |
| **embla-carousel** | اسلایدر داشبورد |
| **@tsparticles/react** | پس‌زمینه neural network |
| **lenis** | smooth scroll |
| **lucide-react** | آیکون‌ها |
| **react-countup** | KPI انیمیشنی |
| **typewriter-effect** | terminal AI |

## بخش‌های صفحه

1. Hero — معرفی + mini sparkline chart
2. Problem — چالش سازمان‌ها
3. Pillars — ۴ ستون ارزش
4. **Analytics** — ۵ نمودار Recharts + ۴ KPI
5. **Workflow** — چرخه WorkTask (WF-03)
6. Dashboard Slider — placeholder اسکرین‌شات
7. Modules — ۶ ماژول کلیدی
8. **Integrations** — بله، SMS، Calendar، AI
9. AI — typewriter + Persona
10. Roles + CTA

## نمودارها (داده دمو از مستندات SDO)

| نمودار | نوع | منبع مستندات |
|--------|-----|--------------|
| عملکرد هفتگی | Area | WorkTask + reports |
| وضعیت وظایف | Donut | WF-03 |
| هزینه پروژه | Bar | Finance |
| Mood per واحد | Line | Pulse |
| امتیاز سازمان | Bar | D-04 dashboard |

داده‌ها در `lib/demo-data.ts`

## تصاویر

راهنما: [IMAGE_GUIDE.md](IMAGE_GUIDE.md)
