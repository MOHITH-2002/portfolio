"use client"
import { Spinner } from "@/components/spinner/Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const [textColor, setTextColor] = useState("#FDCA3A");

  useEffect(() => {
    const colorList = ["#FDCA3A", "#008777", "#0072E8"];
    let index = 0;

    const intervalId = setInterval(() => {
      // Change the text color every 4 seconds
      setTextColor(colorList[index]);

      // Increment index, reset to 0 if it exceeds the length of the color list
      index = (index + 1) % colorList.length;
    }, 4000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return <div className="flex items-center gap-3">
    <Link href="/">
    <div className="p-0.5 border-2 border-slate-900 rounded-3xl cursor-pointer dark: border-slate-700">

    <Avatar>
        <AvatarImage src="/logo.jpeg" alt="logo"/>
        <AvatarFallback><Spinner/></AvatarFallback>
    </Avatar>
    </div>
    </Link>
    <h1 className="hidden sm:block text-3xl font-bold" style={{ color: textColor }}>
        MOHITH
      </h1>
  </div>;
};

export default Logo;
