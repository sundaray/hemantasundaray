"use client";

import { Icons } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const scrollVariants = {
  initial: { y: ".5rem", opacity: 0 },
  animate: {
    y: "0rem",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-4 right-4 flex items-center gap-1 rounded-md border bg-secondary px-1 py-0.5 text-sm text-secondary-foreground shadow-lg transition-colors hover:bg-border hover:text-slate-700"
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          Scroll to top
          <Icons.circleArrowUp className="inline-block size-3.5 text-secondary-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
