import { motion } from "framer-motion";
import { Users, Gauge, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import interiorImg from "@/assets/helicopter-interior.jpg";

const fleet = [
  {
    name: "Airbus H130",
    category: "Executive",
    passengers: 6,
    speed: "155 kts",
    image: interiorImg,
  },
  {
    name: "Bell 407GXi",
    category: "Premium",
    passengers: 5,
    speed: "140 kts",
    image: interiorImg,
  },
  {
    name: "Leonardo AW109",
    category: "VIP",
    passengers: 7,
    speed: "168 kts",
    image: interiorImg,
  },
];

const FleetSection = () => (
  <section id="fleet" className="py-24 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Fleet</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
          Built for <span className="text-gradient-amber">performance.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {fleet.map((heli, i) => (
          <ScrollReveal key={heli.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group rounded-lg border border-border overflow-hidden bg-background transition-all duration-300 hover:border-primary hover:glow-amber"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heli.image}
                  alt={heli.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="font-display text-[10px] tracking-[0.3em] uppercase text-primary">{heli.category}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-4">{heli.name}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {heli.passengers} pax</span>
                  <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" /> {heli.speed}</span>
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Certified</span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
