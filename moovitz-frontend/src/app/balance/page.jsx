"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/custom/Sidebar";
import { ExpandableCardDemo } from "@/components/aeternity/example/expandable-cards";
import UserBalance from "@/components/custom/UserBalance";
import TopUp from "@/components/custom/TopUp";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { toast } from "sonner";

import SuiUserBalance from "@/components/custom/SuiUserBalance";
import TopUpSui from "@/components/custom/TopUpSui";

export default function BalancePage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("subscribedMY50", false);
    const storedAddress = localStorage.getItem("walletAddress");
    if (storedAddress) {
      setWalletAddress(storedAddress);
    }
    setSubscribe(false);
  }, []);

  const handleButtonClick = async (amount) => {
    if (!walletAddress) {
      toast.error("Please create a wallet first");
      return;
    }

    if(subscribe)
    {
      return;
    }

    try {
      const response = await fetch("/api/maschain/token/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          walletAddress,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe MY50");
      }

      const data = await response.json();
      console.log("MY50 Subscribe initiated:", data);
      window.localStorage.setItem("subscribedMY50", true);
      setSubscribe(true);
      toast.success("MY50 Pass Subscribe Successfully!", {
        action: {
          label: "View",
          onClick: () => {
            window.open(
              "https://explorer-testnet.maschain.com/" +
                data.result.transactionHash,
              "_blank"
            );
          },
        },
      });
    } catch (error) {
      console.error("Error subscribe MY50:", error);
      toast.error("Failed to subscribe MY50. Please try again.");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Container */}
      <div className="w-full lg:w-1/6">
        <Sidebar className="z-10" />
      </div>

      {/* Main Content Container */}
      <div className="w-full lg:w-5/6 py-4 lg:py-10 z-0 flex">
        <div className="flex flex-col gap-7 pr-10">
          <section>
            <GlowingStarsBackgroundCard
              className={"bg-[linear-gradient(110deg,#333_0.6%,#222)]"}>
              <GlowingStarsTitle>
                <UserBalance />
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription className={"mt-5"}>
                  <TopUp />
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </section>
          <section>
            <GlowingStarsBackgroundCard
              className={"bg-[linear-gradient(110deg,#333_0.6%,#222)]"}>
              <GlowingStarsTitle>
                {" "}
                <SuiUserBalance />
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription className={"mt-5"}>
                  <TopUpSui />
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </section>
          <section>
            <GlowingStarsBackgroundCard
              className={"bg-[linear-gradient(110deg,#0099ff_0.6%,#999)]"}>
              <GlowingStarsTitle>MY50 Pass - 2 MOOV</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription className={"mt-5"}>
                  <button
                    onClick={() => {
                        handleButtonClick("2");
                    }}
                    className="bg-blue-600 rounded-lg text-white px-3 py-2">
                    {subscribe
                      ? 'Subscribed'
                      : 'Subscribe'}
                  </button>
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </section>
        </div>
        <section>
          <h1 className="text-2xl font-bold">Transaction List</h1>
          <ExpandableCardDemo />
        </section>
      </div>
    </div>
  );
}
