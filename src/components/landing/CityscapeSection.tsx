import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cityscapeImg from "@/assets/cityscape-aerial.jpg";

const CityscapeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.img
        style={{ y }}
        src={cityscapeImg}
        alt="Aerial cityscape at dusk"
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Above It All</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            The city is your <span className="text-gradient-amber">runway.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CityscapeSection;
