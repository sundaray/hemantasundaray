"use client";

import { motion, useScroll } from "framer-motion";

export function PageScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-16 h-1 origin-[0%] bg-primary"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
