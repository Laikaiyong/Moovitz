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
			"0xf9af136d59dfe6f5e9db53464079c06c493e263c60fb2179fde1fca849e96514"
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
