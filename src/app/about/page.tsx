import type { Metadata } from "next";
import AboutMePage from "@/components/AboutMePage";
import AboutNavbar from "@/components/AboutNavbar";

export const metadata: Metadata = {
  title: "關於我 — 李昭瑩 Chaoying Li | 專案經理 · 營運管理 · 數位轉型",
  description:
    "深入了解我的專案管理經歷、核心能力與精選案例。擁有 B2C 金融與 B2B 貿易雙端實戰經驗，專注需求分析、PRD 撰寫、SOP 建置與自動化流程開發。",
};

export default function AboutPage() {
  return (
    <>
      <AboutNavbar />
      <main>
        <AboutMePage />
      </main>
    </>
  );
}
