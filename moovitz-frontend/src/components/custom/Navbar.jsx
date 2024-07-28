"use client";

import { useState } from "react";
import { useEnokiFlow, useZkLogin } from "@mysten/enoki/react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { toast } from "sonner";
import Image from "next/image";

export default function Navbar() {
    const enokiFlow = useEnokiFlow(); 
    const [menuOpen, setMenuOpen] = useState(false);

    const startLogin = async () => {
        const promise = async () => {
          window.location.href = await enokiFlow.createAuthorizationURL({
            provider: "google",
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            redirectUrl: `${window.location.origin}/auth`,
            network: "testnet",
          });
        };
    
        toast.promise(promise, {
          loading: "Logging in...",
        });
      };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between px-4 lg:px-10 py-4 bg-white shadow-lg sticky top-0 z-50">
            <a href="#" className="text-[20px] lg:text-[32px] font-semibold">
                Moovitz
            </a>
            <button
                className="block lg:hidden text-xl px-4 py-2 focus:outline-none"
                onClick={toggleMenu}
            >
                ☰
            </button>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${menuOpen ? "block" : "hidden"} mt-6 lg:mt-0`}>
                <ul className="flex flex-col lg:flex-row lg:space-x-14 space-y-4 lg:space-y-0 text-[18px] lg:items-center">
                    <li className="hover:text-blue-500 hover:font-semibold">
                        <a href="#aboutUs" onClick={closeMenu}>About</a>
                    </li>
                    <li className="hover:text-blue-500 hover:font-semibold">
                        <a href="#features" onClick={closeMenu}>Features</a>
                    </li>
                    <li className="hover:text-blue-500 hover:font-semibold">
                        <a href="#howItWorks" onClick={closeMenu}>How it works</a>
                    </li>
                </ul>
                <div className="mt-4 lg:mt-0 lg:ml-4 lg:hidden">
                    <ShimmerButton onClick={() => startLogin()}>
                        <div className="flex">

                        <Image
 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
 width={20}
 height={20}
 className="my-auto mr-7"
 />        <p>

                        Sign In
                        </p>
                        </div>
                    </ShimmerButton>
                </div>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-4 hidden lg:block">
                <ShimmerButton onClick={() => startLogin()}>
                <div className="flex">

<Image
 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
 width={20}
 height={20}
 className="mr-7 my-auto"
 />
<p>

Sign In
</p>
</div>
                </ShimmerButton>
            </div>
        </nav>
    );
}