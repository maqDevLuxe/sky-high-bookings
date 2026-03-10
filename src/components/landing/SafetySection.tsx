import { Shield, Eye, Award, HeartPulse } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const protocols = [
  { icon: Shield, title: "FAA Certified", desc: "Every aircraft and pilot exceeds FAA Part 135 standards." },
  { icon: Eye, title: "24/7 Monitoring", desc: "Real-time flight ops center tracking every flight." },
  { icon: Award, title: "5,000+ Hours Pilots", desc: "Only veteran pilots with extensive urban flight experience." },
  { icon: HeartPulse, title: "Medical Ready", desc: "On-board medical kits and emergency protocols on every flight." },
];

const SafetySection = () => (
  <section id="safety" className="py-24 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Safety First</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
          Elite <span className="text-gradient-amber">protocols.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {protocols.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SafetySection;
