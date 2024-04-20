"use client";

import { motion } from "framer-motion";
import React from "react";

export function MotionSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section layout="position" className="space-y-4">
      {children}
    </motion.section>
  );
}
