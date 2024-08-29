"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js'


const UserBalance = () => {
	const wallet = useWallet();
	const [balance, setBalance] = useState(0);
	const [isCopied, setIsCopied] = useState(false);

	async function getUserSOLBalance(publicKey, connection) {
		let balance = 0;
		try {
		  balance = await connection.getBalance(
			publicKey,
			'confirmed'
		  );
		  balance = balance / LAMPORTS_PER_SOL;
		} catch (e) {
		  console.log(`error getting balance: `, e);
		}
		setBalance(balance);
		  console.log(`balance updated, `, balance);
		}
	
	const { connection } = useConnection();

	useEffect(() => {
		if (wallet.publicKey) {
		  getUserSOLBalance(wallet.publicKey, connection);
		}
	  }, [wallet.publicKey, connection, getUserSOLBalance])

	
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(wallet.publicKey);
			setIsCopied(true);
			toast.success("Wallet address copied to clipboard");
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			toast.error("Failed to copy address");
		}
	};
	return (
		<div className='text-sm text-white space-y-6'>
						<div className='flex items-center space-x-2'>
				<span className='truncate max-w-[200px]'>
				{wallet ? `${wallet.publicKey}` : "No wallet found"}
				</span>
				<button
					onClick={copyToClipboard}
					className='p-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors'
					title='Copy wallet address'
				>
					{isCopied ? <CheckIcon className='w-4 h-4' /> : <CopyIcon className='w-4 h-4' />}
				</button>
			</div>
			{wallet &&
			<div className="">
			<div className="mt-2">
              {(balance || 0).toLocaleString()} SOL
              </div>
			  </div>}
			
          </div>
	);
};

export default UserBalance;
