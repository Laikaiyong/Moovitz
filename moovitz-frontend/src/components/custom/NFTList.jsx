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
      "name": "GDSC Cult Leader #2",
      "price": "1 SUI",
      "imageUrl": "https://media.licdn.com/dms/image/C5603AQHwrpTPQ7GsDw/profile-displayphoto-shrink_800_800/0/1646571986132?e=1727308800&v=beta&t=V83N5bQvdO9nj764MWdWPOfzer683iKKFb-JE0BePTI"
    },
    {
      "name": "Alpha Access",
      "price": "30 SUI",
      "imageUrl": "https://i.seadn.io/s/raw/files/27027f09d311049497a0ddf461c99e71.gif?auto=format&dpr=1&w=1000"
    },
    {
      "name": "#2556",
      "price": "1002 SUI",
      "imageUrl": "https://i.seadn.io/s/raw/files/88daf5e3d140d39301dbb53c6764298f.png?auto=format&dpr=1&w=1000"
    },
    {
      "name": "Stickman #10",
      "price": "1 SUI",
      "imageUrl": "https://i.seadn.io/s/raw/files/d7ab1d82ddc455ea7fc6a7c9e179f3fd.png?auto=format&dpr=1&w=1000"
    },
    {
      "name": "Pandazzz #09",
      "price": "1 SUI",
      "imageUrl": "https://i.seadn.io/s/raw/files/3e1daa4f8689f83186f69c6fb37559fc.png?auto=format&dpr=1&w=1000"
    },
    {
      "name": "APUBCC Duckies #4",
      "price": "1 SUI",
      "imageUrl": "https://i.seadn.io/s/raw/files/792e42acf95f77b05bed8abac5bb5148.png?auto=format&dpr=1&w=1000"
    },
    {
      "name": "Encode Certification",
      "price": "0",
      "imageUrl": "https://i.seadn.io/s/raw/files/84e76fa4a95c9b83f17e150037215999.jpg?auto=format&dpr=1&w=1000"
    },
    {
      "name": "Campus Connect: Web3 Fundamentals",
      "price": "0.4 SUI",
      "imageUrl": "https://i.seadn.io/gae/bO3M-4PSiHyOB7CV5uVYyzJ4p3qXO8iyZfSZLqulnrZBe26LNQ8h1P0i9lvIKC5w9brNo-NLDDygREf7D3Zv97o7MnsKjXW76op-?auto=format&dpr=1&w=1000"
    },
    {
      "name": "BCC Jailers #26",
      "price": "43 SUI",
      "imageUrl": "https://media.licdn.com/dms/image/D5603AQErINuui8DiQA/profile-displayphoto-shrink_800_800/0/1703865131897?e=1727308800&v=beta&t=BJH4CsTTuqhorsl9WT27XNzIpCmbp7n_8jOFGzFaENY"
    },
  ];
  return (
    <div className="relative flex items-center justify-center pt-4">
      <ParallaxScroll images={nfts} />
    </div>
  );
}