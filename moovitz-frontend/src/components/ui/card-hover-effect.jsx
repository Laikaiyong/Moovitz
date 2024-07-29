"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import ProjectBalance from "../custom/ProjectBalance";
import Image from "next/image";
import { Transaction } from "@mysten/sui/transactions";
import { useEnokiFlow } from "@mysten/enoki/react";
import { useSuiClient } from "@mysten/dapp-kit";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [suiTotal, setSuiTotal] = useState("");
  const projectWalletAddress = "0xD001570E75b31f6764cCa245874a2fb13DA24eab";
  const projectSuiAddress = "";
  const images = ["/kt1.png", "/kt2.png", "/kt3.png", "/kt4.png", "/kt5.png"];

  useEffect(() => {
    const storedAddress = localStorage.getItem("walletAddress");
    const storedSuitoProject = localStorage.getItem("suitotalProject");
    if (storedAddress) {
      setWalletAddress(storedAddress);
    }

    if (storedSuitoProject) {
      setSuiTotal(storedSuitoProject);
    }
  }, []);

  const client = useSuiClient();
  const enokiFlow = useEnokiFlow();
  async function fundSuiProject() {
    try {
      // Get the keypair for the current user.
      const keypair = await enokiFlow.getKeypair({ network: "testnet" });

      const txb = new Transaction();
      // Add some transactions to the block...
      const coin = txb.splitCoins(txb.gas, [10]);
      txb.transferObjects(
        [coin],
        "0x6defa84c04ded593f49a87093aa96ebfdfd3e42d372b6d52fd6f11962f211a4c"
      );

      // Sign and execute the transaction, using the Enoki keypair
      const response = await client.signAndExecuteTransaction({
        signer: keypair,
        transaction: txb,
      });

      // const data = await response.json();
      // console.log(data);
      toast.success("Project funding initiated successfully!", {
        action: {
          label: "View",
          onClick: () => {
            window.open(
              "https://suiscan.xyz/testnet/tx/" + response.digest,
              "_blank"
            );
          },
        },
      });

      localStorage.setItem(
        "suitotalProject",
        Number(localStorage.getItem("suitotalProject")) + 0.002
      );
    } catch (error) {
      console.error("Error funding project:", error);
      toast.error("Failed to fund project. Please try again.");
    }
  }

  const fundProject = async (amount) => {
    if (!walletAddress) {
      toast.error("Please create a wallet first");
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
        throw new Error("Failed to fund project");
      }

      const data = await response.json();
      console.log("Funding initiated:", data);
      toast.success("Project funding initiated successfully!", {
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
      console.error("Error funding project:", error);
      toast.error("Failed to fund project. Please try again.");
    }
  };

  return (
    <div
      className={cn(
        "grid z-0 grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <Card className="flex flex-col h-full">
            <div className="flex-grow">
              <CardTitle className={"space-y-6"}>
                {item?.map}
                <p>{item.title}</p>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <p>
              <ProjectBalance
                suiBalance={suiTotal}
                projectWalletAddress={projectWalletAddress}
              />
            </p>
            <Modal>
              <ModalTrigger className="bg-white text-black flex justify-center group/modal-btn mt-4 border border-slate-300">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  CrowdFund Now!
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  💰
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    Crowdfund{" "}
                    <span className="px-1 py-0.5 rounded-md bg-gray-100  dark:border-neutral-700 border border-gray-200">
                      Kuala Terengganu Station
                    </span>{" "}
                    now! ✈️
                  </h4>
                  <div className="flex justify-center items-center">
                    {images.map((image, idx) => (
                      <motion.div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        whileTap={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
                        <Image
                          src={image}
                          alt="relevant images"
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                    <div className="flex  items-center justify-center">
                      <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        5 connecting flights
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        12 hotels
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        69 visiting spots
                      </span>
                    </div>
                    <div className="flex  items-center justify-center">
                      <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        10 famous food spot
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Ads station
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        To the moon!
                      </span>
                    </div>
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                  <button
                    className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                    onClick={() => fundProject("2")}>
                    Fund 2 MOOV
                  </button>
                  <button
                    className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                    onClick={() => fundSuiProject(0.002)}>
                    Fund 0.002 SUI
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-5 overflow-hidden border border-slate/[0.2] group-hover:border-slate-700 ",
        className
      )}>
      {children}
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("font-bold tracking-wide", className)}>{children}</h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}>
      {children}
    </p>
  );
};

const PlaneIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};
