"use client";
 
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ParallaxScroll } from "../aeternity/parralax-scroll";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
 
export default function NFTList() {
  const nfts = [
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
    {
      "name": "BCC Jailers #19",
      "price": "402 SUI",
      "imageUrl": "https://cdn.discordapp.com/avatars/753936966038323260/19bfcd430bb6d8e1ccf17678241e4dda.webp?size=256"
    },
  ];
  return (
    <div className="relative flex items-center justify-center pt-4">
      <ParallaxScroll images={nfts} />
    </div>
  );
}