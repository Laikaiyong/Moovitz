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
      "name": "Red girl",
      "price": "2 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/Picsart_23_12_03_21_44_22_497_4fe7832296.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "Meiryu",
      "price": "1.2 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/Qm_Uz8_MS_7u9_WAVGJR_Jm_V3rof_Ps_PECEPTRA_3af_Vi22b_DZR_Sk_2de6c06ae7.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "Black Dog Deluxe",
      "price": "2.6 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/taylor_swift_deluxe_black_dog_364b140a8a.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "SOLpunk",
      "price": "0.98 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/punk7873_bb04940929.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "Laser eyes pepe",
      "price": "1 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/telechargement_4e27dbad69.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "wafuku girl",
      "price": "5 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/00170_1407227288_997e8c1dad.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "SOL APE",
      "price": "4 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/Firefly_NFT_style_monkey_with_accessories_6598_defef8465b.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "SOLs",
      "price": "4 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/download_a2803c4199.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "FOXSOL",
      "price": "10 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/0ff83352_e2d5_4536_ac90_b8340d767df5_7eb7c1ab7c.WEBP",
      "url": "https://moovitz.pages.dev",
    },
    {
      "name": "BMW 2023",
      "price": "10 SOL",
      "imageUrl": "https://sui-api-mainnet.bluemove.net/uploads/wp9392200_294189d257.WEBP",
      "url": "https://moovitz.pages.dev",
    },
  ];
  return (
    <div className="relative flex items-center justify-center pt-4">
      <ParallaxScroll images={nfts} />
    </div>
  );
}