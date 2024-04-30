"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";

type MotionSectionProps = HTMLMotionProps<"section">;

const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, ...props }, ref) => (
    <motion.section ref={ref} {...props}>
      {children}
    </motion.section>
  ),
);

MotionSection.displayName = "MotionsSection";

type MotionH1Props = HTMLMotionProps<"h1">;

const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionsH1Props>(
  ({ children, ...props }, ref) => (
    <motion.h1 ref={ref} {...props}>
      {children}
    </motion.h1>
  ),
);

MotionH1.displayName = "MotionH1";

type MotionH2Props = HTMLMotionProps<"h2">;

const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(
  ({ children, ...props }, ref) => (
    <motion.h2 ref={ref} {...props}>
      {children}
    </motion.h2>
  ),
);

MotionH2.displayName = "MotionH2";

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  ),
);

MotionDiv.displayName = "MotionDiv";

export { MotionSection, MotionH1, MotionH2, MotionDiv };
