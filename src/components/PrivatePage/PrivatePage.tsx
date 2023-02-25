import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { useAuthContext } from "../../context/AuthContext";
import { PublicNavBar } from "../PublicNavBar/PublicNavBar";

("use client");

export const PrivatePage = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();

  return (
    <div className="w-ful relative block h-full">
      {user ? <NavBar /> : <PublicNavBar />}
      <div className="float-left mt-[58px] h-[calc(100%-58px)] w-full lg:mt-[96px] lg:h-[calc(100%-96px)]">
        {children}
      </div>
    </div>
  );
};
