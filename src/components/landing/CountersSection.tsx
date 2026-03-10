import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  { value: 12480, suffix: "+", label: "Landings Facilitated" },
  { value: 340, suffix: "+", label: "Helipads Networked" },
  { value: 98, suffix: "%", label: "On-Time Rate" },
  { value: 4200, suffix: "+", label: "Executive Clients" },
];

const CountersSection = () => (
  <section className="py-24 bg-card border-y border-border">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-amber mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-display tracking-wide">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
