import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./_created-components/Modetoggle";
import Resume from "./_created-components/Resume";
import Hamburger from "./_created-components/hamburger";


const Navbar = () => {
  return (
    <div className="h-20 flex z-50 w-full top-0 fixed backdrop-blur-md justify-between items-center  lg:px-16 md:px-10 px-3 ">
      <div className="flex items-center">
        <Link href="/">
          <Avatar>
            <AvatarImage src="/logo.jpeg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="hidden md:flex justify-center lg:absolute left-1/2 transform lg:-translate-x-1/2">
        <div className="p-2 dark:hover:bg-teal-100/10  hover:bg-teal-100/30 rounded-md">
          <Link href="/" className="text-emerald-600 font-semibold">Home</Link>
        </div>
        <div className="p-2 dark:hover:bg-teal-100/10 hover:bg-teal-100/30 rounded-md">
          <Link href="/about" className="text-emerald-600 font-semibold">About</Link>
        </div>
        <div className="p-2 dark:hover:bg-teal-100/10 hover:bg-teal-100/30 rounded-md">
          <Link href="/links" className="text-emerald-600 font-semibold">Contact</Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end gap-2">
        {/* <ModeToggle /> */}
        <Resume/>
      </div>
      <div className="flex md:hidden items-center justify-end gap-2">
        {/* <ModeToggle /> */}
        <Hamburger/>
      </div>
    </div>
  );
};

export default Navbar;
