"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../aurora-background";
 
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">
          Public Transport MOVE with Ease
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
          together with Moovitz
        </div>
        <a href="https://www.canva.com/design/DAGMGgnm47E/l4ks1Tk5hTTmbVnjGYv-rA/view?utm_content=DAGMGgnm47E&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"  className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Read Whitepaper
        </a>
      </motion.div>
    </AuroraBackground>
  );
}