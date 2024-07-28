import AnimatedTransactions from "@/components/custom/AnimatedTransactions";
import Sidebar from "@/components/custom/Sidebar";
import BadgesList from "@/components/custom/BadgesList";
import NFTList from "@/components/custom/NFTList";
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
    return (
        <div className="flex">
            {/* Sidebar Container */}
            <div className="w-full lg:w-1/6">
                <Sidebar />
            </div>

            {/* Main Content Container */}
            <div className="w-full lg:w-5/6 px-4 lg:px-10 py-4 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="row-span-2 bg-white border-2 shadow-xl rounded-xl p-4">
                        {/* Tall Card, left side taking up all two rows */}
                        <div className="h-screen z-[1] px-4 space-y-5">
                            <div className="flex justify-center py-4">
                                <img 
                                src="https://github.com/shadcn.png"
                                alt="Image of a Duck NFT"
                                width={300}
                                height={300}
                                className="rounded-xl"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Bio: </h3>
                                <p className="italic text-base">Food and Swags is most important for events</p>
                            </div>
                            <div className="flex items-center text-lg">
                                <h3 className="font-semibold">Total Contributions Made (MYR): </h3>
                                <p className="pl-2">2932.00</p>
                            </div>
                            <div className="flex items-center text-lg">
                                <h3 className="font-semibold pr-3">RapidKL Status: </h3>
                                <Badge className="bg-green-700">ACTIVE</Badge>
                            </div>
                            <div>
                                <h3 className="font-semibold">Badges Earned: </h3>
                                <BadgesList />
                            </div>
                         </div>
                    </div>
                    <div className="bg-white border-2 shadow-xl rounded-xl p-4 z-[1]">
                        {/* Short Card, right side, taking up upper row */}
                        <div>
                            <h1 className="font-semibold text-2xl pl-4 pt-4">
                                Featured NFTs
                            </h1>
                            <NFTList />                        
                        </div>
                    </div>
                    <div className="bg-white border-2 shadow-xl rounded-xl p-4 z-[1]">
                        {/* Short Card, right side, taking up lower row */}
                        <div>
                            <div className="flex items-center justify-between">
                                <h1 className="font-semibold text-2xl pl-4 pt-4">Recent Transactions</h1>
                                <p className="text-[12px] underline pt-4 text-gray-700">view more</p>
                            </div>
                            <AnimatedTransactions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}