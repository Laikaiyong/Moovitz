"use client";

import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiMenu2Line } from "react-icons/ri";
import { ConnectButton } from "@mysten/dapp-kit";
import { LogOut } from 'lucide-react';

import { Transaction } from "@mysten/sui/transactions";
import { useSuiClient } from "@mysten/dapp-kit";
import { useEnokiFlow, useZkLogin } from "@mysten/enoki/react";
import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui/faucet";
import { toast } from "sonner";
import { BalanceChange } from "@mysten/sui/client";
import { LoaderCircle, ExternalLink } from "lucide-react";
import CreateMasWalletDialog from "@/components/custom/CreateMasWalletDialog";

export default function Sidebar() {
	const client = useSuiClient(); // The SuiClient instance
	const enokiFlow = useEnokiFlow(); // The EnokiFlow instance
	const { address: suiAddress } = useZkLogin(); // The zkLogin instance

	/* The account information of the current user. */
	const [balance, setBalance] = useState(0);
	const [accountLoading, setAccountLoading] = useState(true);

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

	return (
		<Drawer.Root direction='left'>
			<Drawer.Trigger className="m-10 sticky top-10" asChild>
				<button>
					<RiMenu2Line className='text-2xl lg:text-[32px]' />
				</button>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className='fixed inset-0 bg-black/40 z-[2]' />
				<Drawer.Content className='bg-white flex flex-col rounded-t-[10px] h-full w-[80vw] md:w-[400px] mt-24 fixed bottom-0 left-0 z-[3]'>
					<nav className='p-4 bg-white flex-1 h-full'>
						<div className='max-w-md mx-auto lg:pl-4'>
							<Drawer.Title className='font-semibold lg:text-[20px] mb-6'>Moovitz</Drawer.Title>
							<div className='flex flex-col items-center text-center justify-center space-y-4'>
								<Avatar className='w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]'>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</div>
							<div>
								<ul className='mt-10 space-y-6 lg:space-y-8 lg:text-[18px]'>
									<li className='flex content-center'>
										<Avatar className='my-auto mx-2 w-[25px] h-[25px]'>
											<AvatarImage src='https://blog.sui.io/content/images/2023/04/Sui_Droplet_Logo_Blue-3.png' />
											<AvatarFallback>Sui Logo</AvatarFallback>
										</Avatar>
										{/* <ConnectButton /> */}
										<div className='flex'>
											<p>
												{accountLoading ? (
													<LoaderCircle className='animate-spin' />
												) : (
                          <div className='bg-blue-100 mx-4 rounded-3xl text-blue-800 px-3 py-2'>
													${suiAddress?.slice(0, 5)}...${suiAddress?.slice(
														63
													)} - ${balance.toPrecision(3)} SUI
                        </div>
												)}
											</p>
											<a
												href={`https://suiscan.xyz/testnet/account/${suiAddress}`}
												target='_blank'
											>
												<ExternalLink width={16} />
											</a>
										</div>
									</li>
									<li className='flex content-center'>
										<Avatar className='my-auto mx-2 w-[25px] h-[25px]'>
											<AvatarImage src='https://cdn.prod.website-files.com/66092c4a4ffe765e2ec07651/660cfc8db2504b903f888e0d_MasChain%20loggs.png' />
											<AvatarFallback>Sui Logo</AvatarFallback>
										</Avatar>
										<CreateMasWalletDialog />
									</li>
									<li>
										<a
											href='/profile'
											className='flex items-center space-x-2 text-black hover:text-blue-500 font-semibold'
										>
											<span>Profile</span>
										</a>
									</li>
									<li>
										<a
											href='/balance'
											className='flex items-center space-x-2 text-black hover:text-blue-500 font-semibold'
										>
											<span>Balance</span>
										</a>
									</li>
									<li>
										<a
											href='/transport'
											className='flex items-center space-x-2 text-black  hover:text-blue-500 font-semibold'
										>
											<span>Transportation</span>
										</a>
									</li>
									<li>
										<a
											href='/project'
											className='flex items-center space-x-2 text-black hover:text-blue-500 font-semibold'
										>
											<span>Projects</span>
										</a>
									</li>
									<li>
										<a 
											href="/"
											className="flex items-center space-x-2 text-black hover:text-red-500 font-semibold"
										>
											<LogOut />
											<p>Sign Out</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
