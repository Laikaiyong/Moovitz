"use client";

import Sidebar from "@/components/custom/Sidebar";
import { AppleCardsCarouselDemo } from "@/components/aeternity/example/apple-cards-carousel";

export default function TransportPage() {
  return (
    <div className="flex">
    {/* Sidebar Container */}
    <div className="w-full lg:w-1/6">
        <Sidebar className="z-10" />
    </div>

    {/* Main Content Container */}
    <div className="w-full lg:w-5/6 px-4 lg:px-10 py-4 lg:py-10 z-0">
      <h1>Transport</h1>
      <AppleCardsCarouselDemo />
    </div>
    </div>
  );
}