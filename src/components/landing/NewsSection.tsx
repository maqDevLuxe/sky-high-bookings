import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const articles = [
  { date: "Mar 5, 2026", title: "Urban Air Mobility Market to Reach $30B by 2030", source: "Aviation Weekly" },
  { date: "Feb 28, 2026", title: "SkyLift Partners with Three New Manhattan Helipads", source: "TechCrunch" },
  { date: "Feb 15, 2026", title: "How Executives are Reclaiming Their Commute", source: "Forbes" },
];

const NewsSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">In The Press</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
          Urban air <span className="text-gradient-amber">mobility news.</span>
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {articles.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.1}>
            <motion.a
              href="#"
              whileHover={{ x: 8 }}
              className="group flex items-center justify-between p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors duration-300"
            >
              <div>
                <span className="text-xs text-muted-foreground font-display tracking-wide">{a.date} — {a.source}</span>
                <h4 className="font-display font-semibold text-foreground text-lg mt-1 group-hover:text-primary transition-colors">
                  {a.title}
                </h4>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
