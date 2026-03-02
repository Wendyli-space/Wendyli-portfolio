"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const awards = [
  {
    name: "第三屆永豐金控校園商業競賽",
    badge: "優選 · Top 10 / 160+",
    badgeVariant: "dark" as const,
    extraBadge: "受金融園區邀請分享",
    description:
      "整合 DA BOSS 平台 + 消費者旅程地圖 + AI 技術提出平台優化方案",
    image: "/images/award-speech.jpg",
  },
  {
    name: "第五屆國泰飯店觀光事業全國大專行銷企劃大賽",
    badge: "第三名",
    badgeVariant: "dark" as const,
    description:
      "將 AI 支付創新與永續行銷整合於 CUBE 卡策略，提出信用卡結合房卡功能的創新構想",
    image: "/images/cathay-competition.jpg",
  },
  {
    name: "第三屆保誠創新智造所",
    badge: "參賽",
    badgeVariant: "light" as const,
    description: "心理健康支援機制企劃，跨域團隊協作經驗",
    image: "/images/prudential-competition.png",
  },
  {
    name: "第二屆電通永續之森",
    badge: "參賽",
    badgeVariant: "light" as const,
    description:
      "以「美麗市場」為主題，規劃新光三越 ESG 回饋高齡者社區專案",
    image: "/images/dentsu-competition.png",
  },
];

export default function Awards() {
  return (
    <section className="bg-bg-card section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
              AWARDS
            </p>
            <h2 className="text-[32px] font-bold text-text">競賽與獲獎</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/award-group.jpg"
              alt="永豐金控商業競賽頒獎"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <ScrollReveal key={award.name} delay={index * 0.1}>
              <div className="bg-bg border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-[180px] w-full">
                  <Image
                    src={award.image}
                    alt={award.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {award.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        award.badgeVariant === "dark"
                          ? "bg-accent text-white"
                          : "border border-border text-text-sub"
                      }`}
                    >
                      {award.badge}
                    </span>
                    {award.extraBadge && (
                      <span className="text-xs px-3 py-1 rounded-full border border-border text-text-sub">
                        {award.extraBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-sub mt-auto">
                    {award.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
