'use client';

import { useAuthCallback } from "@mysten/enoki/react";
import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { Keypair } from "@solana/web3.js";


export default function Page() {

  const { handled } = useAuthCallback(); // This hook will handle the callback from the authentication provider

  useEffect(() => {
    if (handled) {
     window.location.href = "/transport";
     let keypair = Keypair.generate();
     localStorage.setItem("walletAddress", JSON.stringify(keypair));
    }
}, [handled]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <ScaleLoader color="#000" />
    </div>
  );
}