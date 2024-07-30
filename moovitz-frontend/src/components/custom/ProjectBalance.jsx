"use client";
import { useState, useEffect } from "react";

const ProjectBalance = ({ projectWalletAddress, suiBalance }) => {
	const [balance, setBalance] = useState("0");

	const fetchBalance = async () => {
		try {
			const response = await fetch("/api/maschain/token/balance", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ wallet_address: projectWalletAddress }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch balance");
			}

			const data = await response.json();

			if (Number(data.result)) {

				setBalance(data.result);
			}
		} catch (error) {
			console.error("Error fetching balance:", error);
		}
	};

	useEffect(() => {
		fetchBalance();
	}, []);

	return <div>
		<div className='text-sm'>Project Balance:</div>
		<div className='text-sm'>{balance} MOOV</div>
		<div className='text-sm'>{suiBalance} SUI</div>
		</div>;
};

export default ProjectBalance;
