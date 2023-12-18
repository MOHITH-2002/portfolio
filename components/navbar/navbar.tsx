"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from 'react'
import Logo from "./_components/logo";
import { ModeToggle } from "./_components/mode-togglle";
import Menu from "./_components/menu";
import Resume from "./_components/resume";
import { Scrolled } from "@/hooks/scrolled";

const Navbar = () => {
  

  return (
    <div
      className={cn(
        "flex z-50 w-full top-0 fixed justify-between items-center backdrop-blur-md bg-white border-b shadow-xl dark:bg-[rgba(0,0,0,.8)] bg-opacity-50 px-6 py-2 " 
      )}
    >
      <div>
        <Logo />
      </div>
      <div className="ml-auto flex gap-6 items-center">
        <ModeToggle />
        <Resume />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
