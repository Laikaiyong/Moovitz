"use client";
import { useState } from "react";
import { Transaction } from "@mysten/sui/transactions";
import { useEnokiFlow } from "@mysten/enoki/react";
import { useSuiClient } from "@mysten/dapp-kit";
import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui/faucet";
import { useZkLogin } from "@mysten/enoki/react";
import { toast } from "sonner";

export default function TopUpSui() {
  const client = useSuiClient();
  const { address: suiAddress } = useZkLogin(); // The zkLogin instance

  const enokiFlow = useEnokiFlow();
  async function handleButtonClick() {
    try {
		const response = await fetch('/api/sui/faucet', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				recipient: suiAddress,
			}),
		});
	
		const data = await response.json();
		console.log(data);

		// if (!(res.status == "Error"))
		// {


		// 	console.log(res);
		// 	const data = await res.json();
		// 	console.log(data);
	
		// 	toast.success("Successfully Top Up 2 SUI", {
		// 		action: {
		// 		  label: "View",
		// 		  onClick: () => {
		// 			window.open(
		// 			  "https://suiscan.xyz/testnet/tx/" +
		// 				data.task,
		// 			  "_blank"
		// 			);
		// 		  },
		// 		},
		// 	  });
		// } else {
		// 	toast.error("Error occured");
		// }
    } catch (error) {}
  }
  return (
    <button
      onClick={() => handleButtonClick()}
      className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Send me Sui!
    </button>
  );
}
