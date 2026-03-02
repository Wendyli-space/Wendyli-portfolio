"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-bg-dark min-h-screen flex items-center overflow-hidden"
    >
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="mx-auto max-w-[1200px] px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
          {/* Left content */}
          <motion.div
            className="md:w-[60%] text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tag line */}
            <div className="mb-6">
              <div className="w-8 h-[2px] bg-[#999] mb-4 mx-auto md:mx-0" />
              <p
                className="text-sm uppercase tracking-[3px] text-[#999]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Freelance · 專案管理 · 數位轉型 · 自動化
              </p>
            </div>

            {/* Main title */}
            <h1 className="text-[28px] md:text-[40px] font-bold text-white leading-[1.3] mb-6">
              從傳產內部走過數位轉型，
              <br />
              我把實戰經驗帶進每一個專案。
            </h1>

            {/* Subtitle */}
            <p className="text-base text-[#AAAAAA] max-w-[520px] mx-auto md:mx-0">
              擁有金融 B2C 與貿易 B2B
              雙端實戰經驗，專注 SOP 建置、自動化流程開發、專案管理與內容行銷。正在尋找下一個能發揮的舞台。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
              <a
                href="mailto:saturnflow.wendyli@gmail.com?subject=合作邀約"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white border border-white transition-all duration-200 hover:-translate-y-0.5"
              >
                與我聯繫
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                看我的作品 ↓
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                下載履歷
              </button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="md:w-[40%] flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-[240px] h-[300px] md:w-[360px] md:h-[480px]">
              <Image
                src="/images/headshot.jpg"
                alt="李昭瑩 Chaoying Li"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 240px, 360px"
              />
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-dark to-transparent rounded-b-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
