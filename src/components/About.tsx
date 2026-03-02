"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const skills = [
  "n8n",
  "Python",
  "Java",
  "HTML·CSS",
  "Notion",
  "Excel",
  "PRD",
  "SOP Design",
  "Canva",
];

export default function About() {
  return (
    <section id="about" className="bg-bg section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left - Photos */}
          <ScrollReveal className="md:w-[40%]">
            <div className="relative w-full max-w-[400px] mx-auto pb-8">
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-400">
                <Image
                  src="/Wendyli-portfolio/images/presenting.png"
                  alt="李昭瑩 簡報照"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="absolute -bottom-4 right-[-20px] md:right-[-40px] w-[160px] h-[120px] md:w-[200px] md:h-[150px] rounded-xl overflow-hidden border-4 border-white shadow-lg hover:scale-[1.03] transition-transform duration-400">
                <Image
                  src="/Wendyli-portfolio/images/warehouse.png"
                  alt="李昭瑩 倉儲照"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="absolute -bottom-4 left-[-10px] md:left-[-30px] w-[140px] h-[105px] md:w-[170px] md:h-[128px] rounded-xl overflow-hidden border-4 border-white shadow-lg hover:scale-[1.03] transition-transform duration-400">
                <Image
                  src="/Wendyli-portfolio/images/brainstorming.jpg"
                  alt="李昭瑩 工作坊討論"
                  fill
                  className="object-cover"
                  sizes="170px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Text */}
          <ScrollReveal delay={0.2} className="md:w-[60%]">
            <div>
              <p className="text-sm uppercase tracking-[2px] text-text-muted mb-3">
                ABOUT
              </p>
              <h2 className="text-[32px] font-bold text-text mb-8">關於我</h2>

              <div className="text-base text-text leading-[1.8] space-y-4">
                <p>嗨，我是昭瑩。</p>
                <p>
                  我的職涯從金融業起步——在台新銀行信用卡部門擔任 PM 實習生，學會怎麼在大組織裡推動產品優化、協調跨部門需求。
                </p>
                <p>
                  之後進入國際貿易物流公司擔任專案經理，從零建置節稅合作架構、主導系統需求評估、撰寫政府補助案。這段經歷讓我真正理解傳統產業的數位轉型痛點——不是缺工具，而是沒人把流程和系統之間的斷點接起來。
                </p>
                <p>
                  這也是我現在在做的事：和夥伴共同創業，用 n8n 和自動化工具，幫企業把最浪費人力的流程變成系統。
                </p>
                <p>
                  我不只寫需求文件，我理解自動化工具的邏輯與限制。這讓我在 PM 的角色上多了一層：我能判斷方案可不可行、怎麼拆解，而不只是畫流程圖。
                </p>
                <p>
                  不論是全職機會、專案合作或長期接案，歡迎與我聊聊。
                </p>
              </div>

              {/* Education */}
              <p className="text-sm text-text-muted mt-8">
                中原大學 · 國際貿易學系（主修）· 資訊管理學系（輔系）· 2021-2025
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3.5 py-1.5 border border-border rounded-full text-text hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
