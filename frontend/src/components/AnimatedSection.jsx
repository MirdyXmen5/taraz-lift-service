import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

export default function AnimatedSection({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease: easing, delay }}
    >
      {children}
    </motion.section>
  );
}
