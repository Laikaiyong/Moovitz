"use client";

import { useState } from "react";
import { useEnokiFlow, useZkLogin } from "@mysten/enoki/react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { toast } from "sonner";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { RowSpacingIcon, EnterIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Navbar() {
  const enokiFlow = useEnokiFlow();
  const [menuOpen, setMenuOpen] = useState(false);
  const startGoogle = async () => {
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

  const startFacebook = async () => {
    const promise = async () => {
      window.location.href = await enokiFlow.createAuthorizationURL({
        provider: "facebook",
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
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
        className="block lg:hidden text-xl px-4 py-2 hover:outline-none"
        onClick={toggleMenu}>
        ☰
      </button>
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto ${
          menuOpen ? "block" : "hidden"
        } mt-6 lg:mt-0`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-14 space-y-4 lg:space-y-0 text-[18px] lg:items-center">
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="#aboutUs" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="#howItWorks" onClick={closeMenu}>
              How it works
            </a>
          </li>
        </ul>
        <div className="mt-4 lg:mt-0 lg:ml-4 lg:hidden">
        <Popover.Root>
          <Popover.Trigger asChild>
          <ShimmerButton>
          <div className="flex">
            <p>Sign In</p>
          </div>
        </ShimmerButton>
          </Popover.Trigger>
          <Popover.Portal>
          <Popover.Content className="PopoverContent text-center" sideOffset={5}>
              <div className="flex space-x-4 p-2">
                <button
                  className="IconButton flex items-center justify-center hover:outline-none hover:ring-2 hover:ring-slate-600 hover:ring-offset-2"
                  onClick={() => {
                    startGoogle();
                  }}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
                    width={20}
                    height={20}
                    className="m-auto"
                  />
                </button>
                <button
                  className="IconButton flex items-center justify-center hover:outline-none hover:ring-2 hover:ring-slate-600 hover:ring-offset-2"
                  onClick={() => {
                    startFacebook();
                  }}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
                    width={20}
                    height={20}
                    className="m-auto"
                  />
                </button>
              </div>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 lg:ml-4 hidden lg:block z-30">
      <Popover.Root>
          <Popover.Trigger asChild>
          <ShimmerButton>
          <div className="flex">
            <p>Sign In</p>
          </div>
        </ShimmerButton>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent text-center" sideOffset={5}>
              <div className="flex space-x-4 p-2">
                <button
                  className="IconButton flex items-center justify-center hover:outline-none hover:ring-2 hover:ring-slate-600 hover:ring-offset-2"
                  onClick={() => {
                    startGoogle();
                  }}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
                    width={20}
                    height={20}
                    className="m-auto"
                  />
                </button>
                <button
                  className="IconButton flex items-center justify-center hover:outline-none hover:ring-2 hover:ring-slate-600 hover:ring-offset-2"
                  onClick={() => {
                    startFacebook();
                  }}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
                    width={20}
                    height={20}
                    className="m-auto"
                  />
                </button>
              </div>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </nav>
  );
}
