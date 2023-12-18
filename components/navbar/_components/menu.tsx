"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

const Menu = () => {
    const [avatarImage, setAvatarImage] = useState("/logo.jpeg");
    const imageList = [
    "/linkedin.png",
    "/github.png",
    "/x.png",
    "/instgram.png",
    "/logo.jpeg"
    
    ];
    const intervalTime = 2000;

    useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      // Change the avatar image every 2 seconds
        setAvatarImage(imageList[index]);

      // Increment index, reset to 0 if it exceeds the length of the image list
        index = (index + 1) % imageList.length;
    }, intervalTime);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
    }, []);
    return (
    <div className="p-0.5 border-2 border-slate-900 rounded-3xl cursor-pointer">

        <DropdownMenu>

      <DropdownMenuTrigger asChild>
    <Avatar>
        <AvatarImage src={avatarImage} alt="logo"/>
        
    </Avatar>
        
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex justify-center text-lg">Follow on </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <Link href="https://www.linkedin.com/in/mohith-b-a-ba8a22230/" className="flex items-center gap-3 hover:bg-accent hover:text-accent-foreground">
                <Avatar className="h-10 w-10">
            <AvatarImage src="/linkedin.png" alt="logo"/>
            
                </Avatar>
                Linkedin
            </Link>

        <DropdownMenuSeparator />
            
            <Link href="https://github.com/MOHITH-2002" className="flex items-center gap-3 hover:bg-accent hover:text-accent-foreground">
                <Avatar className="h-10 w-10">
            <AvatarImage src="/github.png" alt="logo"/>
            
                </Avatar>
                Github
            </Link>
            <DropdownMenuSeparator />
            <Link href="https://twitter.com/MohithBA3" className="flex items-center gap-3 hover:bg-accent hover:text-accent-foreground">
                <Avatar className="h-10 w-10">
            <AvatarImage src="/x.png" alt="logo"/>
            
                </Avatar>
                Twitter
            </Link>
            <DropdownMenuSeparator />
            
            <Link href="https://www.instagram.com/mohith_b_a_/" className="flex items-center gap-3 hover:bg-accent hover:text-accent-foreground">
                <Avatar className="h-10 w-10">
            <AvatarImage src="/instgram.png" alt="logo"/>
            
                </Avatar>
                Instagram
            </Link>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default Menu;
