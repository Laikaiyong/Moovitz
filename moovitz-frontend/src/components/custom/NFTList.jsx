"use client";
 
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
 
export default function NFTList() {
  const imageUrl =
    "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256";
  return (
    <div className="relative flex items-center justify-center pt-4">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">BCC Jailers #19</p>
        <p className="font-normal text-sm">403 SUI</p>
      </DirectionAwareHover>
    </div>
  );
}