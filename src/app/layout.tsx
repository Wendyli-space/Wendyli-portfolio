import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chaoyingli.com"),
  title: "李昭瑩 Chaoying Li — 專案管理 · 數位轉型 · 自動化流程開發",
  description:
    "擁有 B2C 金融與 B2B 貿易雙端實戰經驗，專注 SOP 建置、n8n 自動化流程開發、專案管理與內容行銷。協助中小企業以更低成本完成數位升級。",
  keywords:
    "專案管理, SOP, 數位轉型, 自動化, n8n, 接案, 李昭瑩, freelance, project management",
  openGraph: {
    title: "李昭瑩 — 專案管理 · 數位轉型 · 自動化流程",
    description: "從傳產內部走過數位轉型全程，現在協助你的企業實現同樣的轉變。",
    images: ["/Wendyli-portfolio/images/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${inter.variable} ${notoSansTC.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
