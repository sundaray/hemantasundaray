"use client";

import { motion } from "framer-motion";
import React from "react";

const Section = React.forwardRef(
  ({ children, ...props }, ref) => (
    <section ref={ref} {...props}>
      {children}
    </section>
  ),
);

Section.displayName = "Section";

const MotionSection = motion(Section, { forwardMotionProps: true })

const H1 = React.forwardRef(
  ({ children, ...props }, ref) => (
    <h1 ref={ref} {...props}>
      {children}
    </h1>
  ),
);

H1.displayName = "H1";

const MotionH1 = motion(H1, { forwardMotionProps: true })


const Div = React.forwardRef(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ),
);

Div.displayName = "Div";

const MotionDiv = motion(Div, { forwardMotionProps: true })

export { MotionSection, MotionH1, MotionDiv };
