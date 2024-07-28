"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useEnokiFlow, useZkLogin } from "@mysten/enoki/react";
import { useSuiClient } from "@mysten/dapp-kit";

const SuiUserBalance = () => {
	const [balance, setBalance] = useState(0);
	const [accountLoading, setAccountLoading] = useState(true);

	const client = useSuiClient(); // The SuiClient instance

	const { address: suiAddress } = useZkLogin(); // The zkLogin instance
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		if (suiAddress) {
			getAccountInfo();
		}
	}, [suiAddress]);

	const getAccountInfo = async () => {
		if (!suiAddress) {
			return;
		}

		try {
			setAccountLoading(true);

			const balance = await client.getBalance({ owner: suiAddress });
			setBalance(parseInt(balance.totalBalance) / 10 ** 9);

			setAccountLoading(false);
		} catch (error) {
			console.log(error);
			setAccountLoading(false);
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(suiAddress);
			setIsCopied(true);
			toast.success("SUI wallet address copied to clipboard");
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			toast.error("Failed to copy address");
		}
	};

	return (
		<div className='text-sm text-white'>
			<div className='flex items-center space-x-2'>
				<span className='truncate max-w-[200px]'>
					{suiAddress ? `${suiAddress}` : "No SUI wallet found"}
				</span>
				<button
					onClick={copyToClipboard}
					className='p-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors'
					title='Copy SUI wallet address'
				>
					{isCopied ? <CheckIcon className='w-4 h-4' /> : <CopyIcon className='w-4 h-4' />}
				</button>
			</div>
			<div className='mt-2'>SUI Balance: {balance} SUI</div>
		</div>
	);
};

export default SuiUserBalance;
