"use client";

import { Menu } from "lucide-react";
import React, { useCallback } from "react";
import Avatar from "../Avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import useRegisterModal from "@/app/hooks/useRegiterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal()
  const router = useRouter()


  const onRent = useCallback(()=>{
    if(!currentUser){
     return loginModal.onOpen()
    }

    rentModal.onOpen()
  },[currentUser,loginModal,rentModal])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Stayo your home
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
              onClick={() => {}}
            >
              <Menu />
              <div className="hidden md:block">
                <Avatar />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-xl shadow-md w-[40vw] md:w-44 bg-white p-2 overflow-hidden text-sm">
            {currentUser ? (
              <>
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/trips")}>
                  My Trips
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/favorites")}>
                  My Favorites
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/reservations")}>
                  My Reservations
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/properties")}>
                  My Properties
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={rentModal.onOpen}>
                  Stayo my home
                </DropdownMenuItem>
                <hr />
                <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={loginModal.onOpen}
                >
                  Login
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={registerModal.onOpen}
                >
                  Sign up
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMenu;
