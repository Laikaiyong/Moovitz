"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";

const UserBalance = () => {
	const [balance, setBalance] = useState("0");
	const [walletAddress, setWalletAddress] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		const storedAddress = localStorage.getItem("walletAddress");
		if (storedAddress) {
			setWalletAddress(storedAddress);
			fetchBalance(storedAddress);
		} else {
			setIsLoading(false);
			setError("No wallet address found. Please create a wallet first.");
		}
	}, []);

	const fetchBalance = async (address) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch("/api/maschain/token/balance", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ wallet_address: address }),
			});

			console.log(response);

			if (!response.ok) {
				throw new Error("Failed to fetch balance");
			}

			const data = await response.json();
			if (data.result) {
				setBalance(data.result);
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			console.error("Error fetching balance:", error);
			setError("Failed to fetch balance. Please try again later.");
			toast.error("Error fetching balance");
		} finally {
			setIsLoading(false);
		}
	};
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(walletAddress);
			setIsCopied(true);
			toast.success("Wallet address copied to clipboard");
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			toast.error("Failed to copy address");
		}
	};
	if (isLoading) {
		return <div className='text-md text-white'>Loading balance...</div>;
	}

	if (error) {
		return <div className='text-sm text-red-500'>{error}</div>;
	}

	return (
		<div className='text-md text-white space-y-6'>
			<section className='flex'>
				<h1 className='text-lg truncate w-9/12 gap-10'>
					{walletAddress ? `${walletAddress}` : "No wallet found"}
				</h1>
				<button
					onClick={copyToClipboard}
					className='p-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors'
					title='Copy wallet address'
				>
					{isCopied ? <CheckIcon className='w-4 h-4' /> : <CopyIcon className='w-4 h-4' />}
				</button>
			</section>

			<section>Balance: {balance} tokens available</section>
		</div>
	);
};

export default UserBalance;
