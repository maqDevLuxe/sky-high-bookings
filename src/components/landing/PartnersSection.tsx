import ScrollReveal from "./ScrollReveal";

const partners = [
  "AIRBUS", "BELL", "SIKORSKY", "LEONARDO", "ROBINSON", "EUROCOPTER"
];

const PartnersSection = () => (
  <section className="py-20 border-b border-border">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-center font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
          Trusted Aviation Partners
        </p>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
        {partners.map((p, i) => (
          <ScrollReveal key={p} delay={i * 0.1}>
            <span className="font-display text-xl md:text-2xl font-bold tracking-widest text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default">
              {p}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
