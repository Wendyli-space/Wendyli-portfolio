"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 10, suffix: "+", label: "個案例交付" },
  { value: 5, suffix: "+", label: "個產業服務經驗" },
  { value: 2, suffix: "", label: "份完整 PRD 作品" },
  { value: 100, suffix: "%", label: "專案從需求到交付完整參與" },
];

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          const stepTime = duration / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            // ease-out: fast start, slow finish
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.round(eased * target);
            setCount(current);

            if (step >= steps) {
              setCount(target);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-bg-dark py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[40px] md:text-[48px] font-bold text-white leading-none mb-2">
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-sm text-[#999]">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
