import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxPanel({ image, alt, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container ${className}`}>
      <motion.img src={image} alt={alt} className="absolute inset-0 h-[116%] w-full object-cover" style={{ y }} />
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
    </div>
  );
}
