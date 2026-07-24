import type { Metadata } from "next";
import { Geist_Mono, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDO — پلتفرم یکپارچه مدیریت سازمان",
  description:
    "پلتفرم یکپارچه مدیریت سازمان: وظایف، پروژه، مالی، CRM، همکاری تیمی و دستیار هوش مصنوعی — با داده واقعی، نه حدس.",
  openGraph: {
    title: "SDO — مدیریت هوشمند سازمان",
    description: "از وظیفه روزانه تا بینش مالی و انسانی — یک داشبورد، یک حقیقت.",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
