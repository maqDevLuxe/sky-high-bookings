import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Ready?</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Your city.<br />
            <span className="text-gradient-amber">Your schedule.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Book your first flight in under 60 seconds. No commitments, no fees—just speed.
          </p>
          <MagneticButton className="inline-block">
            <Button variant="hero" size="lg" className="gap-2 text-base px-10 py-6">
              Book Your Flight <ArrowRight className="w-5 h-5" />
            </Button>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-foreground">SKY</span>
              <span className="text-gradient-amber">LIFT</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              Premium urban helicopter transfers for executives who own their time.
            </p>
          </div>
          {[
            { title: "Service", links: ["Routes", "Fleet", "Pricing", "Corporate"] },
            { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Safety", "Licenses"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 SkyLift. All rights reserved.</p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
