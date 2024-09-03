"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ArchitectureBeam() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.datagovmy />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.nextJS />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.solana />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.moovitz />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.tailwind />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.vercel />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.aceternityUI />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  solana: () => (
  <Avatar className="w-[30px] h-[30px]">
    <AvatarImage
      src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
    />
    <AvatarFallback>Solana Logo</AvatarFallback>
  </Avatar>
  ),
  moovitz: () => (
    <Avatar className="w-[70px] h-[70px]">
    <AvatarImage
      src="/favicon.ico"
    />
    <AvatarFallback>Moovitz Logo</AvatarFallback>
  </Avatar>
  ),
  datagovmy: () => (
    <Avatar className="w-[45px] h-[30px]">
      <AvatarImage 
        src="https://archive.data.gov.my/i/icons/android-chrome-256x256.png"
      />
      <AvatarFallback>Data Gov My Logo</AvatarFallback>
    </Avatar>
  ),
  vercel: () => (
    <Avatar className="w-[30px] h-[30px]">
      <AvatarImage 
        src="https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png"
      />
      <AvatarFallback>vercel Logo</AvatarFallback>
    </Avatar>
  ),
  nextJS: () => (
    <Avatar className="w-[30px] h-[30px]">
      <AvatarImage 
        src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
      />
      <AvatarFallback>NextJS Logo</AvatarFallback>
    </Avatar>
  ),
  tailwind: () => (
    <Avatar className="w-[30px] h-[30px]">
      <AvatarImage 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpN2t1RJBX4eDLEY4fpQqd0qxHGtn0gR4hA&s"
      />
      <AvatarFallback>Tailwind Logo</AvatarFallback>
    </Avatar>
  ),
  aceternityUI: () => (
    <Avatar className="w-[30px] h-[30px]">
      <AvatarImage 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSM_4AvKl2BnXL6_US8MljrdlVTCr6ZBaBuw&s"
      />
      <AvatarFallback>AceternityUI Logo</AvatarFallback>
    </Avatar>
  ),
};
