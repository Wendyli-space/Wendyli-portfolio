"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

/* ───────── Part 1: Workflow Steps ───────── */
const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "需求訪談與痛點診斷",
    desc: "我有金融 B2C 和貿易 B2B 的雙產業經驗，能快速理解不同產業的業務邏輯，精準定位最值得投入的自動化環節",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "PRD 撰寫＋自動化原型設計",
    desc: "我不只寫文件，我理解 n8n 等自動化工具的邏輯與限制，能在 PRD 階段就評估技術可行性，降低開發來回成本",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "開發協調與進度管理",
    desc: "我能同時和工程師講技術語言、和老闆講商業價值，確保兩端資訊同步、需求不走樣",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "三方驗收與交付",
    desc: "驗收標準在 PRD 階段就定義好，不是交付時才吵。由我協調工程端與客戶端進行三方確認",
  },
];

/* ───────── Part 2: Case Data ───────── */
type IndustryTag = "物流" | "電商" | "媒體" | "傳產";
type AbilityTag = "流程自動化" | "客服優化" | "數據分析" | "文件管理" | "內容行銷";

const industryTagColors: Record<IndustryTag, { bg: string; text: string; border: string }> = {
  物流: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  電商: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  媒體: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  傳產: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
};

const abilityTagColors: Record<AbilityTag, { bg: string; text: string; border: string }> = {
  流程自動化: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  客服優化: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  數據分析: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  文件管理: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  內容行銷: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
};

const industryFilterColors: Record<string, string> = {
  全部: "bg-accent text-white",
  物流: "bg-blue-600 text-white",
  電商: "bg-amber-600 text-white",
  媒體: "bg-purple-600 text-white",
  傳產: "bg-emerald-600 text-white",
};

const abilityFilterColors: Record<string, string> = {
  流程自動化: "bg-sky-600 text-white",
  客服優化: "bg-rose-600 text-white",
  數據分析: "bg-orange-600 text-white",
  文件管理: "bg-teal-600 text-white",
  內容行銷: "bg-violet-600 text-white",
};

interface CaseItem {
  title: string;
  industryTag: IndustryTag;
  abilityTag: AbilityTag;
  role: string;
  pain: string;
  highlight: string;
  solution: string;
  result: string;
}

const cases: CaseItem[] = [
  {
    title: "物流報價利潤自動化系統",
    industryTag: "物流",
    abilityTag: "流程自動化",
    role: "業務 PM — 需求訪談、流程梳理、PRD 撰寫、開發協調",
    pain: "業務報價依賴人工經驗，費用項目多且散落在不同 Excel，報價速度慢且利潤不可控",
    highlight: "報價流程從 30 分鐘縮短至 5 分鐘內，利潤可視化即時呈現",
    solution:
      "我負責梳理散貨/整櫃/空運材積判斷邏輯，建立可變動與不可變動費用比對機制，設計三條解耦 Workflow（詢價解析→同行比對→報價輸出），完成完整 PRD 含 JSON 資料合約，再協調 n8n 工程端進行開發",
    result: "報價流程從 2 小時縮短至 15 分鐘，利潤可視化且可回溯",
  },
  {
    title: "物流詢價自動化系統（RFQ）",
    industryTag: "物流",
    abilityTag: "流程自動化",
    role: "業務 PM — 流程規劃、欄位規格定義、開發進度管理",
    pain: "業務手動寄詢價信給同行，遺漏追蹤、格式不一、CRM 資料散落各處",
    highlight: "詢價流程標準化，追蹤遺漏率降為 0，CRM 資料集中管理",
    solution:
      "我規劃「表單收集→CRM 建檔→郵件草稿→人工審核→自動寄送→24hr 追信」完整流程，定義 15+ 欄位規格與同行條件比對邏輯，協調工程端以 n8n 實作",
    result: "詢價到寄信時間縮短 70%，同行回覆率提升，所有紀錄自動歸檔",
  },
  {
    title: "客戶諮詢與客服自動化",
    industryTag: "電商",
    abilityTag: "客服優化",
    role: "業務 PM — 客服流程盤點、分流邏輯設計、驗收測試",
    pain: "客服人力有限，重複性問題佔大量時間，回覆品質不一致",
    highlight: "重複問題自動回覆率達 70%+，客服人力需求減半",
    solution:
      "我盤點現有客服流程，設計自動化分流與常見問題回覆機制，複雜問題自動轉人工並附帶上下文，協調 n8n 工程端開發與驗收",
    result: "客服回覆效率提升 60%，人力可專注處理高價值問題",
  },
  {
    title: "VIP 升級轉換與維護",
    industryTag: "電商",
    abilityTag: "數據分析",
    role: "業務 PM — 用戶分層規則設計、觸發流程規劃",
    pain: "VIP 升級條件判斷靠人工，維護與觸及缺乏系統化流程",
    highlight: "VIP 判定從人工改為自動觸發，升級轉換流程系統化",
    solution:
      "我設計用戶分層規則與自動觸發升級通知、專屬權益推送流程，撰寫 PRD 交付工程端實作",
    result: "VIP 轉換率提升，會員留存與回購率改善",
  },
  {
    title: "Podcast 自動翻譯",
    industryTag: "媒體",
    abilityTag: "內容行銷",
    role: "業務 PM — 需求確認、翻譯流程規劃、品質驗收",
    pain: "Podcast 內容僅有單一語言，想拓展海外聽眾但翻譯成本高",
    highlight: "單集翻譯成本降低 80%+，多語系內容產出效率大幅提升",
    solution:
      "我確認客戶需求後，規劃音檔轉逐字稿並翻譯為目標語言的自動化流程，協調工程端開發並驗收產出品質",
    result: "內容觸及範圍擴大，翻譯成本降低 80%+",
  },
  {
    title: "紙本數位化",
    industryTag: "傳產",
    abilityTag: "文件管理",
    role: "業務 PM — 文件流程診斷、歸檔架構設計、導入輔導",
    pain: "大量紙本文件無法有效搜尋與管理，查找耗時且容易遺失",
    highlight: "文件查找時間從數小時縮短至秒級搜尋",
    solution:
      "我診斷現有文件管理流程，設計自動化掃描、OCR 辨識與結構化歸檔架構，協調工程端開發並輔導團隊導入",
    result: "文件查找時間從 30 分鐘縮短至 1 分鐘內",
  },
];

const industryFilters = ["全部", "物流", "電商", "媒體", "傳產"] as const;
const abilityFilters: AbilityTag[] = ["流程自動化", "客服優化", "數據分析", "文件管理", "內容行銷"];

/* ───────── Case Card ───────── */
function CaseCard({ item }: { item: CaseItem }) {
  const [open, setOpen] = useState(false);
  const iColor = industryTagColors[item.industryTag];
  const aColor = abilityTagColors[item.abilityTag];

  return (
    <motion.div
      layout
      className="bg-bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="p-6">
        {/* Tags + Role */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${iColor.bg} ${iColor.text} ${iColor.border}`}
          >
            {item.industryTag}
          </span>
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${aColor.bg} ${aColor.text} ${aColor.border}`}
          >
            {item.abilityTag}
          </span>
          <span className="text-xs text-text-muted">
            {item.role}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text mt-3 mb-2">
          {item.title}
        </h3>

        {/* Pain */}
        <p className="text-sm text-text-sub leading-relaxed">{item.pain}</p>

        {/* Highlight */}
        <p className="text-sm font-semibold text-accent mt-2 leading-relaxed">
          → {item.highlight}
        </p>

        {/* Expand indicator */}
        <div className="flex items-center gap-1 mt-4 text-xs text-text-muted">
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            ▼
          </motion.span>
          <span>{open ? "收合" : "查看方案與成果"}</span>
        </div>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border space-y-4">
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                    解決方案
                  </p>
                  <p className="text-sm text-text leading-relaxed">
                    {item.solution}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                    成果
                  </p>
                  <p className="text-sm font-medium text-accent leading-relaxed">
                    {item.result}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ───────── Main Component ───────── */
export default function CaseStudies() {
  const [industryFilter, setIndustryFilter] = useState<string>("全部");
  const [abilityFilter, setAbilityFilter] = useState<string | null>(null);

  const filtered = cases.filter((c) => {
    const matchIndustry = industryFilter === "全部" || c.industryTag === industryFilter;
    const matchAbility = !abilityFilter || c.abilityTag === abilityFilter;
    return matchIndustry && matchAbility;
  });

  return (
    <section id="cases" className="bg-bg section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
              CASE STUDIES
            </p>
            <h2 className="text-[32px] font-bold text-text">專案案例</h2>
            <p className="text-base text-text-sub mt-3 max-w-[640px] mx-auto">
              每個案例我負責從需求訪談、PRD 撰寫、開發協調到驗收交付，以下是各案例中我的具體角色與協作方式
            </p>
          </div>
        </ScrollReveal>

        {/* ── Part 1: Workflow Steps ── */}
        <ScrollReveal>
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-text text-center mb-10">
              我的工作方式
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="relative text-center group">
                  {/* Connector line (desktop only) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-border" />
                  )}
                  {/* Step number + icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-bg-card border-2 border-border text-accent mb-4 relative z-10 group-hover:border-accent group-hover:shadow-md transition-all duration-300">
                    {step.icon}
                  </div>
                  {/* Step label */}
                  <p className="text-xs text-text-muted mb-2">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="text-base font-semibold text-text mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-sub leading-relaxed max-w-[240px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Part 2: Case Cards ── */}
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-text text-center mb-8">
            精選案例
          </h3>

          {/* Filter tabs - Industry */}
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {industryFilters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setIndustryFilter(f);
                  setAbilityFilter(null);
                }}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                  industryFilter === f && !abilityFilter
                    ? `${industryFilterColors[f]} border-transparent`
                    : "border-border text-text-sub hover:border-hover hover:text-text bg-bg-card"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Filter tabs - Ability */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {abilityFilters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setAbilityFilter(abilityFilter === f ? null : f);
                  if (abilityFilter !== f) setIndustryFilter("全部");
                }}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  abilityFilter === f
                    ? `${abilityFilterColors[f]} border-transparent`
                    : "border-border text-text-muted hover:border-hover hover:text-text bg-bg-card"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Case grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CaseCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
