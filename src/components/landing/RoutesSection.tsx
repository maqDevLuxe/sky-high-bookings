import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const routes = [
  { id: 1, from: "Manhattan Midtown", to: "JFK Airport", time: "7 min", price: "$495", coords: { x: 30, y: 35 } },
  { id: 2, from: "Wall Street", to: "Newark EWR", time: "9 min", price: "$550", coords: { x: 25, y: 55 } },
  { id: 3, from: "Hudson Yards", to: "LaGuardia", time: "5 min", price: "$395", coords: { x: 35, y: 30 } },
  { id: 4, from: "Brooklyn Heights", to: "Teterboro", time: "11 min", price: "$650", coords: { x: 50, y: 60 } },
];

const RoutesSection = () => {
  const [active, setActive] = useState(1);
  const activeRoute = routes.find((r) => r.id === active)!;

  return (
    <section id="routes" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Fast City Routes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
            Point to point.<br />
            <span className="text-gradient-amber">No detours.</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <ScrollReveal>
            <div className="relative aspect-square bg-card rounded-lg border border-border overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="absolute border-l border-muted-foreground/20" style={{ left: `${i * 10}%`, top: 0, bottom: 0 }} />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="absolute border-t border-muted-foreground/20" style={{ top: `${i * 10}%`, left: 0, right: 0 }} />
                ))}
              </div>

              {/* Route points */}
              {routes.map((route) => (
                <motion.button
                  key={route.id}
                  onClick={() => setActive(route.id)}
                  className={`absolute w-4 h-4 rounded-full transition-all duration-300 ${
                    active === route.id ? "bg-primary scale-150 glow-amber" : "bg-muted-foreground/40 hover:bg-primary/60"
                  }`}
                  style={{ left: `${route.coords.x}%`, top: `${route.coords.y}%` }}
                  whileHover={{ scale: 1.5 }}
                />
              ))}

              {/* Active route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1={`${activeRoute.coords.x}%`}
                  y1={`${activeRoute.coords.y}%`}
                  x2="75%"
                  y2="45%"
                  stroke="hsl(32 100% 50%)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </svg>

              <div className="absolute right-[22%] top-[42%] w-3 h-3 rounded-full bg-primary/60 border-2 border-amber" />
            </div>
          </ScrollReveal>

          {/* Route list */}
          <div className="flex flex-col gap-3">
            {routes.map((route, i) => (
              <ScrollReveal key={route.id} delay={i * 0.1}>
                <motion.button
                  onClick={() => setActive(route.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 ${
                    active === route.id
                      ? "bg-card border-primary glow-amber"
                      : "bg-card/50 border-border hover:border-muted-foreground/40"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-foreground font-display font-semibold">
                      <MapPin className="w-4 h-4 text-primary" />
                      {route.from}
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      {route.to}
                    </div>
                    <span className="text-primary font-display font-bold">{route.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-3 h-3" /> {route.time} flight time
                  </div>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
