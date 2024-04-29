"use client";

import { motion } from "framer-motion";
import React from "react";


interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
  }
  
  const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ children, ...props }, ref) => (
      <section ref={ref} {...props}>
        {children}
      </section>
    )
  );
  
Section.displayName = "Section";
    
const MotionSection = motion(Section, { forwardMotionProps: true })

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
  }
  
  const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
    ({ children, ...props }, ref) => (
      <h1 ref={ref} {...props}>
        {children}
      </h1>
    )
  );
  
H1.displayName = "H1";
  
const MotionH1 = motion(H1, { forwardMotionProps: true })


interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }
  
  const Div = React.forwardRef<HTMLDivElement, DivProps>(
    ({ children, ...props }, ref) => (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  );
  
Div.displayName = "Div";
  
const MotionDiv = motion(Div, { forwardMotionProps: true })

export { MotionSection, MotionH1, MotionDiv };
