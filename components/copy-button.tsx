"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  async function copyToClipboard() {
    if (isCopied) return;
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000); // Reset after 1 second
  }

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={copyToClipboard}
      className="absolute right-1 top-[50px] size-7 text-muted-foreground"
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.span
            key="check"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <Icons.check className="size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <Icons.copy className="size-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}