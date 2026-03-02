"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RESUME_LINKS = {
  zh: "https://drive.google.com/file/d/1Ich7xVl5I-FXOUq9O5WXgmfcM1aG0L4U/view",
  en: "https://drive.google.com/file/d/1N4POwdEFPxAHxJgof1qBYfXHR5yc_-d-/view",
};

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-[420px] w-full p-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors"
              aria-label="關閉"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-text mb-2">下載履歷</h3>
            <p className="text-sm text-text-sub mb-6">
              請選擇語言版本，將以 Google Drive 開啟
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={RESUME_LINKS.zh}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-5 py-4 border border-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <p className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                    中文履歷
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    WENDY履歷_中文.pdf
                  </p>
                </div>
                <span className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </a>

              <a
                href={RESUME_LINKS.en}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-5 py-4 border border-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <p className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                    English Resume
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    Wendy履歷_English.pdf
                  </p>
                </div>
                <span className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
