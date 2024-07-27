'use client';

import { Drawer } from "vaul";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiMenu2Line } from "react-icons/ri";
import { ConnectButton } from '@mysten/dapp-kit';

export default function Sidebar() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <button>
          <RiMenu2Line className="text-2xl lg:text-[32px]" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[80vw] md:w-[400px] mt-24 fixed bottom-0 left-0">
          <nav className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto lg:pl-4">
              <Drawer.Title className="font-semibold lg:text-[20px] mb-6">
                Typescript is superior than Javascript
              </Drawer.Title>
              <div className="flex flex-col items-center text-center justify-center space-y-4">
                <Avatar className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm lg:text-lg text-black">
                  0x_drtanhaoxiang
                </p>
              </div>
              <div>
                <ul className="mt-10 space-y-6 lg:space-y-8 lg:text-[18px]">
                  <li className="flex content-center">
                    <Avatar className="my-auto mx-2 w-[25px] h-[25px]">
                      <AvatarImage
                        src="https://blog.sui.io/content/images/2023/04/Sui_Droplet_Logo_Blue-3.png"
                      />
                      <AvatarFallback>Sui Logo</AvatarFallback>
                    </Avatar>
                    {/* <ConnectButton /> */}
                  </li>
                  <li>
                    <a href="/profile" className="flex items-center space-x-2 text-black hover:text-blue-500 font-semibold">
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                  <a href="/transaction" className="flex items-center space-x-2 text-black hover:text-blue-500 font-semibold">
                      <span>Transactions</span>
                    </a>
                  </li>
                  <li>
                    <a href="/transport" className="flex items-center space-x-2 text-black  hover:text-blue-500 font-semibold">
                      <span>Transportation</span>
                    </a>
                  </li>
                  <li>
                    <a href="/project" className="flex items-center space-x-2 text-black hover:text-blue-500 font-semibold">
                      <span>Projects</span>
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
