import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Chen",
    title: "CEO, Vertex Capital",
    quote: "SkyLift turned my 90-minute commute into a 7-minute experience. I've reclaimed my mornings.",
  },
  {
    name: "Sarah Blackwell",
    title: "Managing Director, Apex Partners",
    quote: "The white-glove service from ground to air is unmatched. My team now books weekly.",
  },
  {
    name: "David Okafor",
    title: "CFO, Meridian Holdings",
    quote: "When every minute costs thousands, SkyLift pays for itself. The ROI is undeniable.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
          Trusted by <span className="text-gradient-amber">leaders.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-lg border border-border bg-card hover:border-primary transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
