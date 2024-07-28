"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../ui/animated-modal";

export const HoverEffect = ({ items, className }) => {
	let [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
			{items.map((item, idx) => (
				<>
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
							<Modal>
								<ModalTrigger className='bg-white text-black flex justify-center group/modal-btn mt-4'>
									<span className='text-center transition duration-500'>CrowdFund Now!</span>
								</ModalTrigger>
								<ModalBody className={"z-[1000000]"}>
									<ModalContent></ModalContent>
									<ModalFooter className='gap-4'>
										<button className='px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28'>
											Cancel
										</button>
										<button className='bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28'>
											Book Now
										</button>
									</ModalFooter>
								</ModalBody>
							</Modal>
						</Card>
					</div>
				</>
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
