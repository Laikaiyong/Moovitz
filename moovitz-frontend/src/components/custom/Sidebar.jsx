"use client";

import { Drawer } from "vaul";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiMenu2Line } from "react-icons/ri";

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
          <nav className="p-4 bg-[#1C1C1C] flex-1 h-full">
            <div className="max-w-md mx-auto lg:pl-4">
              <Drawer.Title className="font-medium mb-6">
                What&apos;s up?
              </Drawer.Title>
              <div className="flex flex-col items-center text-center justify-center space-y-4">
                <Avatar className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm lg:text-lg">
                  0x_drtanhaoxiang
                </p>
              </div>
              <div>
                <ul className="mt-10 space-y-6 lg:space-y-8 lg:text-[18px]">
                  <li>
                    <a href="/profile" className="flex items-center space-x-2 text-white hover:text-gray-200">
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                  <a href="/transaction" className="flex items-center space-x-2 text-white hover:text-gray-200">
                      <span>Transactions</span>
                    </a>
                  </li>
                  <li>
                    <a href="/transport" className="flex items-center space-x-2 text-white hover:text-gray-200">
                      <span>Transportation</span>
                    </a>
                  </li>
                  <li>
                    <a href="/project" className="flex items-center space-x-2 text-white hover:text-gray-200">
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
