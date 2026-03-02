"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "能力", href: "#services" },
  { label: "經歷", href: "#experience" },
  { label: "案例", href: "#cases" },
  { label: "關於我", href: "#about" },
  { label: "聯繫", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-[8px] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-full flex items-center justify-between">
        <a
          href="#"
          className={`font-bold text-xl tracking-tight transition-colors ${
            scrolled ? "text-text" : "text-white"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          CY LI
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? "text-text" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/about"
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? "bg-accent text-white hover:bg-hover"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            About Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-6 h-5 flex flex-col justify-between z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full transition-all duration-300 origin-center ${
              menuOpen
                ? "rotate-45 translate-y-[9px] bg-white"
                : scrolled
                ? "bg-text"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-full transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-text"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-full transition-all duration-300 origin-center ${
              menuOpen
                ? "-rotate-45 -translate-y-[9px] bg-white"
                : scrolled
                ? "bg-text"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-bg-dark z-50 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleNavClick}
            className="text-white text-2xl font-semibold hover:opacity-70 transition-opacity"
          >
            {item.label}
          </a>
        ))}
        <Link
          href="/about"
          onClick={handleNavClick}
          className="text-black text-lg font-semibold bg-white px-6 py-3 rounded-lg hover:bg-white/90 transition-all mt-4"
        >
          About Me →
        </Link>
      </div>
    </nav>
  );
}
