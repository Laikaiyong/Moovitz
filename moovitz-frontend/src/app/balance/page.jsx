import Sidebar from "@/components/custom/Sidebar";
import { ExpandableCardDemo } from "@/components/aeternity/example/expandable-cards";
import UserBalance from "@/components/custom/UserBalance";
import TopUp from "@/components/custom/TopUp";
import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

import SuiUserBalance from "@/components/custom/SuiUserBalance";
import TopUpSui from "@/components/custom/TopUpSui";

export default function BalancePage() {
	return (
		<div className='flex'>
			{/* Sidebar Container */}
			<div className='w-full lg:w-1/6'>
				<Sidebar className='z-10' />
			</div>

			{/* Main Content Container */}
			<div className='w-full lg:w-5/6 px-4 lg:px-10 py-4 lg:py-10 z-0 flex gap-10'>
				<div className='flex flex-col gap-7'>
					<section>
						<GlowingStarsBackgroundCard className={"bg-[linear-gradient(110deg,#333_0.6%,#222)]"}>
							<GlowingStarsTitle>
								<UserBalance />
							</GlowingStarsTitle>
							<div className='flex justify-between items-end'>
								<GlowingStarsDescription className={"mt-5"}>
									<TopUp />
								</GlowingStarsDescription>
							</div>
						</GlowingStarsBackgroundCard>
					</section>
					<section>
						<GlowingStarsBackgroundCard className={"bg-[linear-gradient(110deg,#333_0.6%,#222)]"}>
							<GlowingStarsTitle>
								{" "}
								<SuiUserBalance />
							</GlowingStarsTitle>
							<div className='flex justify-between items-end'>
								<GlowingStarsDescription className={"mt-5"}>
									<TopUpSui />
								</GlowingStarsDescription>
							</div>
						</GlowingStarsBackgroundCard>
					</section>
					<section>
						<GlowingStarsBackgroundCard
							className={"bg-[linear-gradient(110deg,#0099ff_0.6%,#999)]"}
						>
							<GlowingStarsTitle>Subscribe to MY50</GlowingStarsTitle>
							<div className='flex justify-between items-end'>
								<GlowingStarsDescription className={"mt-5"}>
									<button className='bg-blue-600 rounded-lg text-white px-3 py-2'>
										Subscribe
									</button>
								</GlowingStarsDescription>
							</div>
						</GlowingStarsBackgroundCard>
					</section>
				</div>
				<section>
					<h1 className='text-2xl font-bold'>Transaction List</h1>
					<ExpandableCardDemo />
				</section>
			</div>
		</div>
	);
}
