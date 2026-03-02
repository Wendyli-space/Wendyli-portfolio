"use client";

import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    period: "2026 — 迄今",
    isCurrent: true,
    title: "共同創辦人 Co-Founder",
    company: "自動化流程開發工作室",
    badge: { text: "創業中", variant: "dark" as const },
    bullets: [
      "與前傳產夥伴合夥創業，將內部數位轉型實戰經驗轉化為對外服務產品",
      "運用 n8n、Vibe Coding 為企業客戶打造自動化工作流，降低人力成本與營運摩擦",
      "同時以接案形式累積專案管理、內容行銷、營運流程優化等實戰作品",
    ],
  },
  {
    period: "2025.02 — 2026.01",
    isCurrent: false,
    title: "專案經理 Project Manager",
    company: "躍馬企業 Jumping Freight Ltd",
    badge: { text: "B2B 國際貿易 / 物流", variant: "light" as const },
    bullets: [
      "節稅會計專案主導：規劃貿易商上下游四方合作架構，完成利潤分配談判、SOP 建置與落地執行",
      "產品需求確認與 PRD 撰寫：盤點內部 3+ 套系統資源，執行落地性評估轉化為開發需求",
      "業務顧問與團隊管理：協調 3+ 人業務團隊，財報分析提供優化洞見、規劃業務話術與培訓流程",
      "政府補助案申請：首次申請即通過初審進入面審，累積完整補助案撰寫與簡報答辯經驗",
      "上下游同業維繫與溝通，協助企業尋找第二市場專業與資源合作機會",
    ],
    results: [
      { index: 0, text: "3 個月內從零到一完成全流程建置" },
    ],
  },
  {
    period: "2024.07 — 2025.01",
    isCurrent: false,
    title: "產品經理實習生 Product Manager Intern",
    company: "台新銀行 Taishin Bank",
    badge: { text: "B2C 金融服務 / 信用卡", variant: "light" as const },
    bullets: [
      "協助信用卡 PM 執行卡片營運管理，內部 SOP 流程落實與優化",
      "將客戶端反饋轉化為上下游廠商需求確認，扮演內部溝通橋樑",
      "EDM 數位行銷內容撰寫與版面設計",
      "權益系統 Bug 問題追蹤、協調工程團隊優化修復",
    ],
    results: [
      { index: 1, text: "協助完成 2+ 次產品優化方案，客戶體驗評分提升 10%+" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-card section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
              EXPERIENCE
            </p>
            <h2 className="text-[32px] font-bold text-text">工作經歷</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-[2px] bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.period} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  {/* Time label */}
                  <div className="md:w-[120px] flex-shrink-0 flex items-start gap-3 md:block">
                    <p className="text-sm font-medium text-text-muted whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:flex flex-shrink-0 items-start pt-1.5 -ml-[7px]">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        exp.isCurrent
                          ? "bg-accent border-accent pulse-dot"
                          : "bg-bg-card border-border"
                      }`}
                    />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-bg border border-border rounded-xl p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-text">
                        {exp.title}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          exp.badge.variant === "dark"
                            ? "bg-accent text-white"
                            : "border border-border text-text-sub"
                        }`}
                      >
                        {exp.badge.text}
                      </span>
                    </div>
                    <p className="text-base text-text-sub mb-4">{exp.company}</p>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bIndex) => {
                        const result = exp.results?.find(
                          (r) => r.index === bIndex
                        );
                        return (
                          <li key={bIndex}>
                            <div className="flex items-start gap-2 text-base text-text">
                              <span className="text-text-muted mt-0.5 flex-shrink-0">
                                ▸
                              </span>
                              <span>{bullet}</span>
                            </div>
                            {result && (
                              <p className="ml-6 mt-1 text-base italic text-text-sub">
                                → 成果：{result.text}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
