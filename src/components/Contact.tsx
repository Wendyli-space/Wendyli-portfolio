"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ResumeModal from "./ResumeModal";

export default function Contact() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="contact" className="bg-bg-dark section-padding">
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal>
          <h2 className="text-[32px] font-bold text-white mb-4">
            如果你覺得我適合，歡迎聊聊
          </h2>
          <p className="text-base text-[#AAAAAA] mb-12">
            不論是專案合作、長期接案或全職機會，都歡迎與我聯繫。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12">
            <a
              href="tel:0937096986"
              className="text-base text-[#CCCCCC] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>📱</span>
              0937-096-986
            </a>
            <a
              href="mailto:saturnflow.wendyli@gmail.com"
              className="text-base text-[#CCCCCC] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>📩</span>
              saturnflow.wendyli@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/wendy-li-121b6b383/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#CCCCCC] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>💼</span>
              LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:saturnflow.wendyli@gmail.com?subject=合作邀約"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white border border-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
            >
              寄信給我
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              下載履歷
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-[#666]">
              © 2026 李昭瑩 Chaoying Li
            </p>
            <p className="text-sm text-[#555] italic mt-2">
              Built with ☕ and a lot of SOP
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
