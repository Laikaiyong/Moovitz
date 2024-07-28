"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../ui/animated-modal";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import ProjectBalance from "../custom/ProjectBalance";

export const HoverEffect = ({ items, className }) => {
	let [hoveredIndex, setHoveredIndex] = useState(null);
	const [walletAddress, setWalletAddress] = useState("");
	const projectWalletAddress = "0xD001570E75b31f6764cCa245874a2fb13DA24eab";

	useEffect(() => {
		const storedAddress = localStorage.getItem("walletAddress");
		if (storedAddress) {
			setWalletAddress(storedAddress);
		}
	}, []);

	const fundProject = async (amount) => {
		if (!walletAddress) {
			toast.error("Please create a wallet first");
			return;
		}

		try {
			const response = await fetch("/api/maschain/token/transfer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount,
					walletAddress,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to fund project");
			}

			const data = await response.json();
			console.log("Funding initiated:", data);
			toast.success("Project funding initiated successfully!");
		} catch (error) {
			console.error("Error funding project:", error);
			toast.error("Failed to fund project. Please try again.");
		}
	};

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
			{items.map((item, idx) => (
				<div
					key={item?.link}
					className='relative group  block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<Card className='flex flex-col h-full'>
						<div className='flex-grow'>
							<CardTitle className={"space-y-6"}>
								{item?.map}
								<p>{item.title}</p>
							</CardTitle>
							<CardDescription>{item.description}</CardDescription>
						</div>
						<p>
							<ProjectBalance projectWalletAddress={projectWalletAddress} />
						</p>
						<Modal>
							<ModalTrigger className='bg-white text-black flex justify-center group/modal-btn mt-4'>
								<span className='text-center transition duration-500'>CrowdFund Now!</span>
							</ModalTrigger>
							<ModalBody className={"z-[1000000]"}>
								<ModalContent className={"flex flex-row"}>
									<div>
										<img src='/abdulhukum.png' alt='abdulhukum' className='w-full h-full' />
									</div>
									<div>
										<img src='/bridge.png' alt='bridge' className='w-full h-full' />
									</div>
								</ModalContent>
								<ModalFooter className='gap-4'>
									<button
										className='bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28'
										onClick={() => fundProject("2")}
									>
										Fund This Project
									</button>
								</ModalFooter>
							</ModalBody>
						</Modal>
					</Card>
				</div>
			))}
		</div>
	);
};

export const Card = ({ className, children }) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-5 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 ",
				className
			)}
		>
			{children}
		</div>
	);
};
export const CardTitle = ({ className, children }) => {
	return <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }) => {
	return (
		<p className={cn("mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
			{children}
		</p>
	);
};
