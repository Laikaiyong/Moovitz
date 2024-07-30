"use client";
import { useState } from "react";
import { Transaction } from "@mysten/sui/transactions";
import { useEnokiFlow } from "@mysten/enoki/react";
import { useSuiClient } from "@mysten/dapp-kit";
import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui/faucet";
import { useZkLogin } from "@mysten/enoki/react";
import { toast } from "sonner";
import { EnokiClient } from "@mysten/enoki";

export default function TopUpSui() {
  const client = useSuiClient();
  const { address: suiAddress } = useZkLogin();
  const enokiClient = new EnokiClient({
    apiKey: process.env.ENOKI_PRIVATE_KEY,
  });

  const enokiFlow = useEnokiFlow();
  async function handleButtonClick() {
    try {
      const response = await fetch("/api/sui/faucet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: suiAddress,
        }),
      });

      toast.success("Successfully Top Up SUI");
    } catch (error) {}
  }

  async function getFaucet() {
    try {
      const response = await fetch("/api/sui/faucet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: suiAddress,
        }),
      });

      toast.success("Successfully Top Up SUI");
    } catch (error) {}
  }

  async function sponsoredTransaction() {
    const tx = new Transaction();
    tx.moveCall({
      target: "0x2::kiosk::set_owner_custom",
      arguments: [
        tx.object(kioskId),
        tx.object(user.kioskOwnerCapId),
        tx.pure(recipient),
      ],
    });
    tx.transferObjects([tx.object(user.kioskOwnerCapId)], recipient);

    const txBytes = await tx.build({
      client: client,
      onlyTransactionKind: true,
    });
    const resp = await enokiClient.createSponsoredTransaction({
      network: ENOKI_CLIENT_NETWORK,
      transactionKindBytes: toB64(txBytes),
      sender: address,
      allowedMoveCallTargets: ["0x2::kiosk::set_owner_custom"],
      allowedAddresses: [recipient],
    });
  }
  return (
    <button
      onClick={() => handleButtonClick()}
      className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Top Up SUI
    </button>
  );
}
