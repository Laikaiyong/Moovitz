"use client";

import Sidebar from "@/components/custom/Sidebar";
import { ExpandableCardDemo } from "@/components/aeternity/example/expandable-cards";

export default function BalancePage() {
  return (
    <div className="flex">
    {/* Sidebar Container */}
    <div className="w-full lg:w-1/6">
        <Sidebar className="z-10" />
    </div>

    {/* Main Content Container */}
    <div className="w-full lg:w-5/6 px-4 lg:px-10 py-4 lg:py-10 z-0">
      <h1>Balance</h1>
      Wise UI
      <h2>

      Touch and go + web 3 pop up modal
      </h2>

      Transaction list
      <ExpandableCardDemo />
    </div>
    </div>
  );
}