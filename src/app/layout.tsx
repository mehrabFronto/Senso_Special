import type { Metadata } from "next";
import "./globals.css";
import FarhangFont from "@/constants/localFonts";

export const metadata: Metadata = {
  title: "Senso Special Cafe Restaurant",
  description:
    "☕ Senso Special Cafe Restaurant | مکانی برای لذت بردن از طعم‌های خاص و لحظاتی آرامش‌بخش. در سنسو، با محیطی دلنشین و غذاها و نوشیدنی‌های خاص، حس متفاوتی از آرامش و طعم را در فردیس تجربه کنید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`font-sans ${FarhangFont.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
