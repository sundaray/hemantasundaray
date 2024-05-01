"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";

type MotionSectionProps = HTMLMotionProps<"section">;

const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection({ children, ...props }, ref) {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    );
  },
);

type MotionH1Props = HTMLMotionProps<"h1">;

const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
  function MotionH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  },
);

type MotionH2Props = HTMLMotionProps<"h2">;

const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(
  function MotionH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    );
  },
);

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  },
);

export { MotionSection, MotionH1, MotionH2, MotionDiv };
