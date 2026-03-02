"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ResumeModal from "./ResumeModal";

/* ───────── Data ───────── */

const roles = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: "客戶端",
    items: ["需求訪談", "痛點診斷", "產業流程理解"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    label: "產品端",
    items: ["SOP 梳理", "PRD 撰寫", "系統架構規劃"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "工程端",
    items: ["外包工程師媒合", "需求對接", "進度管理"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: "交付端",
    items: ["工程端 + 客戶端 + PM", "三方驗收"],
  },
];

const coreSkills = [
  "需求分析",
  "PRD 撰寫",
  "SOP 建置",
  "專案管理",
  "外包管理",
  "跨部門協調",
  "業務開發",
  "財報分析",
  "政府補助申請",
  "內容行銷",
];

type Tag = "物流" | "電商";

const tagColors: Record<Tag, { bg: string; text: string; border: string }> = {
  物流: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  電商: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
};

const featuredCases = [
  {
    title: "物流報價利潤自動化系統",
    tag: "物流" as Tag,
    role: "花兩週深入訪談業務團隊，將報價邏輯拆解為散貨/整櫃/空運三種材積判斷規則，建立可變動與不可變動費用比對機制。撰寫完整 PRD 含三條解耦 Workflow 架構與 JSON 資料合約，協調外部工程師開發，完成三方驗收交付。",
    result: "報價流程從 2 小時縮短至 15 分鐘，利潤決策從人腦經驗轉為系統可控",
  },
  {
    title: "物流詢價自動化系統（RFQ）",
    tag: "物流" as Tag,
    role: "從業務手動寄信的痛點出發，定義 15+ 欄位的詢價表單規格與同行條件比對邏輯，規劃「表單→CRM→草稿→審核→寄送→追信」六步流程。撰寫 PRD 並與工程師逐步對接確認，最終完成交付。",
    result: "詢價到寄信時間縮短 70%，所有紀錄自動歸檔可追溯",
  },
  {
    title: "客戶諮詢與客服自動化",
    tag: "電商" as Tag,
    role: "診斷客戶的客服瓶頸，設計自動分流與常見問題回覆機制，複雜問題自動轉人工並附帶上下文。完成需求文件與工程對接。",
    result: "客服回覆效率提升 60%，人力釋放至高價值問題",
  },
];

const timeline = [
  {
    period: "2026 – 至今",
    company: "AI SOP 工作室",
    role: "自動化流程顧問 / PM（獨立接案）",
    isCurrent: true,
  },
  {
    period: "2025.02 – 2026.01",
    company: "躍馬企業",
    role: "專案經理（國際物流 B2B）",
    isCurrent: false,
  },
  {
    period: "2024.07 – 2025.01",
    company: "台新銀行",
    role: "產品經理實習生（信用卡 B2C）",
    isCurrent: false,
  },
  {
    period: "2021 – 2025",
    company: "中原大學",
    role: "國際貿易系 / 輔修資管",
    isCurrent: false,
  },
];

/* ───────── Component ───────── */

export default function AboutMePage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      {/* ══════ Hero ══════ */}
      <section className="relative bg-bg-dark min-h-[80vh] flex items-center overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 py-32 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            <motion.div
              className="md:w-[60%] text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-8 h-[2px] bg-[#999] mb-4 mx-auto md:mx-0" />
                <p
                  className="text-sm uppercase tracking-[3px] text-[#999]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  About Me
                </p>
              </div>

              <h1 className="text-[28px] md:text-[42px] font-bold text-white leading-[1.3] mb-3">
                李昭瑩 Chaoying Li
              </h1>
              <p className="text-lg text-[#CCCCCC] mb-6">
                專案經理 ｜ 營運管理 ｜ 數位轉型顧問
              </p>
              <p className="text-base md:text-lg text-[#AAAAAA] max-w-[560px] mx-auto md:mx-0 leading-relaxed">
                我不寫 code，但我能把你的業務痛點變成工程師看得懂的 PRD，然後盯到交付。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
                <button
                  onClick={() => setResumeOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white border border-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  下載履歷
                </button>
                <a
                  href="mailto:saturnflow.wendyli@gmail.com?subject=合作邀約"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  聯絡我
                </a>
              </div>
            </motion.div>

            <motion.div
              className="md:w-[40%] flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-[220px] h-[280px] md:w-[320px] md:h-[420px]">
                <Image
                  src="/Wendyli-portfolio/images/headshot.jpg"
                  alt="李昭瑩 Chaoying Li"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 220px, 320px"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-dark to-transparent rounded-b-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ 角色定位 ══════ */}
      <section className="bg-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
                MY ROLE
              </p>
              <h2 className="text-[28px] md:text-[32px] font-bold text-text">
                我在專案中的角色
              </h2>
              <p className="text-base text-text-sub mt-3 max-w-[500px] mx-auto">
                我是中間串聯所有人的 PM — 從客戶端到工程端，確保每個環節不掉球
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <ScrollReveal key={role.label} delay={i * 0.1}>
                <div className="bg-bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bg border-2 border-border text-accent mb-4">
                    {role.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {role.label}
                  </h3>
                  <ul className="space-y-1.5">
                    {role.items.map((item) => (
                      <li key={item} className="text-sm text-text-sub">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Connector visual */}
          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center mt-10 gap-3">
              <div className="h-[2px] w-12 bg-border" />
              <span className="text-sm text-text-muted px-3 py-1.5 border border-border rounded-full">
                PM = 串聯核心
              </span>
              <div className="h-[2px] w-12 bg-border" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ 核心能力 ══════ */}
      <section className="bg-bg-card section-padding">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
                CORE SKILLS
              </p>
              <h2 className="text-[28px] md:text-[32px] font-bold text-text">
                核心能力
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-[700px] mx-auto">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm md:text-base px-5 py-2.5 border border-border rounded-full text-text hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ 精選案例 ══════ */}
      <section className="bg-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
                FEATURED CASES
              </p>
              <h2 className="text-[28px] md:text-[32px] font-bold text-text">
                精選案例
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((c, i) => {
              const color = tagColors[c.tag];
              return (
                <ScrollReveal key={c.title} delay={i * 0.1}>
                  <div className="bg-bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <span
                      className={`inline-block text-xs font-medium px-3 py-1 rounded-full border self-start mb-3 ${color.bg} ${color.text} ${color.border}`}
                    >
                      {c.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-text mb-3">
                      {c.title}
                    </h3>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                        我的角色
                      </p>
                      <p className="text-sm text-text-sub leading-relaxed">
                        {c.role}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                        成果
                      </p>
                      <p className="text-sm font-medium text-accent leading-relaxed">
                        {c.result}
                      </p>
                    </div>

                    <a
                      href="/#cases"
                      className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent mt-4 transition-colors"
                    >
                      查看完整案例 <span>→</span>
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ PRD 作品下載 ══════ */}
      <section className="bg-bg-card section-padding">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollReveal>
            <div className="max-w-[640px] mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bg border-2 border-border text-accent mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-text mb-4">
                我寫的 PRD 長什麼樣？
              </h2>
              <p className="text-base text-text-sub leading-relaxed mb-8">
                以下是我實際撰寫的需求規格書（已脫敏），包含系統架構、資料合約、流程設計與驗收標準。
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                下載 PRD 範本（PDF）
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ 工作經歷時間軸 ══════ */}
      <section className="bg-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
                EXPERIENCE
              </p>
              <h2 className="text-[28px] md:text-[32px] font-bold text-text">
                工作經歷
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-[600px] mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-border" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <ScrollReveal key={item.period} delay={i * 0.1}>
                    <div className="flex gap-6">
                      {/* Dot */}
                      <div className="flex-shrink-0 mt-1.5">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            item.isCurrent
                              ? "bg-accent border-accent pulse-dot"
                              : "bg-bg-card border-border"
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="pb-2">
                        <p className="text-sm text-text-muted mb-1">
                          {item.period}
                        </p>
                        <p className="text-base font-semibold text-text">
                          {item.company}
                        </p>
                        <p className="text-sm text-text-sub">{item.role}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 底部 CTA ══════ */}
      <section className="bg-bg-dark section-padding">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-4">
              對我的經歷有興趣？
            </h2>
            <p className="text-base text-[#AAAAAA] mb-10">
              不論是專案合作、長期接案或全職機會，都歡迎與我聯繫。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white border border-white transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                下載履歷
              </button>
              <a
                href="mailto:saturnflow.wendyli@gmail.com?subject=合作邀約"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
              >
                寄信給我
              </a>
              <a
                href="https://www.linkedin.com/in/wendy-li-121b6b383/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
              >
                查看 LinkedIn
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-[#666]">
                © 2026 李昭瑩 Chaoying Li
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
