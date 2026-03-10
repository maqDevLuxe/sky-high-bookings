import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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

  return <span ref={ref}>{count}{suffix}</span>;
};

const comparisons = [
  { route: "Midtown → JFK", car: "58 min", heli: "7 min", saved: 51 },
  { route: "Wall St → EWR", car: "45 min", heli: "9 min", saved: 36 },
  { route: "Hudson Yards → LGA", car: "40 min", heli: "5 min", saved: 35 },
];

const TimeSavedSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Time Saved</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Minutes that <span className="text-gradient-amber">matter.</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mb-16">
          While others sit in gridlock, you're already there.
        </p>
      </ScrollReveal>

      {/* Big stat */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="font-display text-7xl md:text-9xl font-bold text-gradient-amber">
            <Counter target={87} suffix="%" />
          </div>
          <p className="text-muted-foreground font-display tracking-wide mt-2">Average time saved vs ground transport</p>
        </div>
      </ScrollReveal>

      {/* Comparison bars */}
      <div className="grid md:grid-cols-3 gap-6">
        {comparisons.map((c, i) => (
          <ScrollReveal key={c.route} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-display font-semibold text-foreground mb-4">{c.route}</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">By Car</span>
                    <span className="text-muted-foreground">{c.car}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full rounded-full bg-muted-foreground/30"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-primary font-semibold">By SkyLift</span>
                    <span className="text-primary font-semibold">{c.heli}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(parseInt(c.heli) / parseInt(c.car)) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 + 0.3 }}
                      className="h-full rounded-full bg-gradient-amber"
                    />
                  </div>
                </div>
              </div>
              <p className="text-primary font-display font-bold text-lg mt-4">{c.saved} min saved</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TimeSavedSection;
