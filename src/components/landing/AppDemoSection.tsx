import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";
import { Smartphone, Zap, CreditCard } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const features = [
  { icon: Zap, title: "Instant Booking", desc: "Reserve your flight in under 30 seconds" },
  { icon: Smartphone, title: "Live Tracking", desc: "Real-time helicopter GPS and ETA updates" },
  { icon: CreditCard, title: "Seamless Pay", desc: "Corporate accounts & one-tap billing" },
];

const AppDemoSection = () => (
  <section className="py-24 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="flex justify-center">
            <img
              src={appMockup}
              alt="SkyLift mobile app interface"
              className="w-80 rounded-3xl border border-border glow-amber"
            />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">The App</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fly from your <span className="text-gradient-amber">phone.</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Our app puts urban aviation at your fingertips. Book, track, and manage all your flights from one sleek interface.
            </p>
          </ScrollReveal>

          <div className="space-y-6 mb-10">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <MagneticButton>
              <Button variant="hero" size="lg">Download App</Button>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default AppDemoSection;
