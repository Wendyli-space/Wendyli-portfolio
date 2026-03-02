"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
    title: "流程診斷與需求梳理",
    desc: "我會深入你的產業現場，找出最浪費人力的流程，釐清哪些值得自動化、哪些不值得",
    tags: ["需求訪談", "產業分析", "痛點診斷"],
    caseLabel: "物流報價自動化",
    caseHref: "#cases",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "PRD 撰寫與系統架構設計",
    desc: "把你腦中的業務邏輯寫成工程師看得懂的需求文件，包含資料合約、流程設計與驗收標準",
    tags: ["PRD", "系統設計", "SOP 建置"],
    caseLabel: "物流詢價系統 RFQ",
    caseHref: "#cases",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "開發管理與三方交付",
    desc: "我幫你找工程師、管進度、對需求，確保做出來的東西是你要的。工程端和客戶端的報價評估我一起處理",
    tags: ["外包管理", "專案管理", "品質控管"],
    caseLabel: "客服自動化",
    caseHref: "#cases",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "營運優化與內容行銷",
    desc: "除了系統建置，我也協助梳理銷售流程、設計 EDM、規劃會員分層策略",
    tags: ["營運策略", "內容行銷", "數據分析"],
    caseLabel: "VIP 升級轉換",
    caseHref: "#cases",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
              SERVICES
            </p>
            <h2 className="text-[32px] font-bold text-text">
              我能幫你解決什麼問題
            </h2>
            <p className="text-base text-text-sub mt-3 max-w-[480px] mx-auto">
              從需求釐清到交付驗收，一條龍專案管理
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group bg-bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-bg border-2 border-border text-accent mb-5 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-sub leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-text-sub bg-bg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Case Link */}
                <a
                  href={service.caseHref}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent transition-colors group/link"
                >
                  查看相關案例：{service.caseLabel}
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14">
            <a
              href="mailto:saturnflow.wendyli@gmail.com?subject=合作邀約"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              有類似需求？聊聊看
              <span>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
