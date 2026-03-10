import { Car, ArrowRight, Plane } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Car, label: "Luxury car picks you up", detail: "Door-to-door concierge service" },
  { icon: ArrowRight, label: "Arrive at rooftop helipad", detail: "Private lounge & boarding" },
  { icon: Plane, label: "Fly to your destination", detail: "7-minute average city crossing" },
];

const VIPTransferSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Ground-to-Air</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
          VIP <span className="text-gradient-amber">transfers.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.label} delay={i * 0.2}>
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-2 block">
                Step {i + 1}
              </span>
              <h4 className="font-display font-semibold text-foreground text-lg mb-2">{step.label}</h4>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 text-muted-foreground/20">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VIPTransferSection;
