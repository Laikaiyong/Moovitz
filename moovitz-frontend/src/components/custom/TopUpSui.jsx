"use client";
import { Transaction } from "@mysten/sui/transactions";
import { useSuiClient } from "@mysten/dapp-kit";
import { useEnokiFlow } from "@mysten/enoki/react";

export default function TopUpSui() {
	const client = useSuiClient();
	const enokiFlow = useEnokiFlow();

	async function handleButtonClick() {
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
		await client.signAndExecuteTransaction({
			signer: keypair,
			transaction: txb,
		});
	}
	return (
		<button
			onClick={() => handleButtonClick()}
			className='bg-blue-500 text-white px-4 py-2 rounded-md'
		>
			Send me Sui!
		</button>
	);
}
