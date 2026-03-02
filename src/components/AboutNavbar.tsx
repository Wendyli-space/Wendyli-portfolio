"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-[8px] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className={`font-bold text-xl tracking-tight transition-colors ${
            scrolled ? "text-text" : "text-white"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          CY LI
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:opacity-70 ${
              scrolled ? "text-text" : "text-white"
            }`}
          >
            ← 回首頁
          </Link>
          <a
            href="mailto:saturnflow.wendyli@gmail.com?subject=合作邀約"
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? "bg-accent text-white hover:bg-hover"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            聯絡我
          </a>
        </div>
      </div>
    </nav>
  );
}
