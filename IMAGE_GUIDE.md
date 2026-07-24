# راهنمای تصاویر — SDO Demo Landing

تمام جایگاه‌های تصویر در سایت با **placeholder** خالی گذاشته شده‌اند.
بعد از آماده شدن اسکرین‌شات‌ها، فایل‌ها را در `public/images/` قرار دهید.

## ابعاد مورد نیاز

| # | محل | ابعاد (px) | نام پیشنهادی فایل | توضیح |
|---|-----|------------|-------------------|--------|
| 1 | Hero (بالای صفحه) | **1200 × 700** | `hero-dashboard.webp` | داشبورد اصلی با ویجت‌ها |
| 2 | اسلاید ۱ | **1100 × 620** | `slide-dashboard.webp` | داشبورد شخصی |
| 3 | اسلاید ۲ | **1100 × 620** | `slide-action-pulse.webp` | مرکز اقدام + Pulse |
| 4 | اسلاید ۳ | **1100 × 620** | `slide-finance.webp` | داشبورد مالی |
| 5 | اسلاید ۴ | **1100 × 620** | `slide-ai.webp` | Persona + دستیار HR |
| 6 | بخش AI | **800 × 600** | `ai-assistant.webp` | چت AI با بینش |

## فرمت پیشنهادی

- **WebP** (بهینه) یا PNG
- نسبت ابعاد را حفظ کنید
- پس‌زمینه تیره برای هماهنگی با تم سایت

## جایگزینی

بعد از اضافه کردن تصاویر، کامپوننت `ImagePlaceholder` را با `next/image` جایگزین کنید.

```tsx
import Image from "next/image";

<Image
  src="/images/hero-dashboard.webp"
  alt="داشبورد SDO"
  width={1200}
  height={700}
  className="w-full rounded-2xl"
  priority
/>
```
