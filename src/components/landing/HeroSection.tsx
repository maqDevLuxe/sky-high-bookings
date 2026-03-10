import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";
import heroImg from "@/assets/hero-helicopter.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Helicopter landing on skyscraper helipad at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">
              7 minutes across the city
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            <span className="text-foreground">Skip the</span>
            <br />
            <span className="text-foreground">streets.</span>
            <br />
            <span className="text-gradient-amber">Own the sky.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mb-10 font-body">
            Premium rooftop-to-rooftop helicopter transfers for executives who value every minute.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <Button variant="hero" size="lg" className="gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="heroOutline" size="lg">
                View Routes
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center"
      >
        <motion.div className="w-1 h-2 rounded-full bg-primary mt-2" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
