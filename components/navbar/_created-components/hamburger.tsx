import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Grip } from "lucide-react";
import Link from "next/link";
import Resume from "./Resume";
import { Button } from "@/components/ui/button";

const Hamburger = () => {
    return( 
    <>

    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-sm bg-teal-100/10 hover:bg-teal-100/20">
            <Grip size={30}/>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 mr-1 w-56">
        <DropdownMenuLabel className="flex justify-center text-lg md:hidden"><Resume/></DropdownMenuLabel>
            <DropdownMenuSeparator />
        
          <div className="flex flex-col w-full">

        <Link href="/" className="p-2 dark:hover:bg-teal-100/10 text-emerald-600 font-semibold hover:bg-teal-100/30 rounded-md">
          Home
        </Link>
        <DropdownMenuSeparator />
            
            <Link href="/about" className="p-2 dark:hover:bg-teal-100/10 text-emerald-600 font-semibold hover:bg-teal-100/30 rounded-md">
          About
        </Link>
            <DropdownMenuSeparator />
            <Link href="/links"className="p-2 dark:hover:bg-teal-100/10  text-emerald-600 font-semibold hover:bg-teal-100/30 rounded-md">
          Contact
        </Link>
            
          </div>
      </DropdownMenuContent>
    </DropdownMenu>
    
    </>
);
};

export default Hamburger;
