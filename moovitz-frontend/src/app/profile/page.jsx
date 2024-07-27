import Sidebar from "@/components/custom/Sidebar";

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
                        <div className="h-screen">Tall Card Content</div>
                    </div>
                    <div className="bg-white border-2 shadow-xl rounded-xl p-4">
                        {/* Short Card, right side, taking up upper row */}
                        Short Card Content Upper
                    </div>
                    <div className="bg-white border-2 shadow-xl rounded-xl p-4">
                        {/* Short Card, right side, taking up lower row */}
                        Short Card Content Lower
                    </div>
                </div>
            </div>
        </div>
    );
}
