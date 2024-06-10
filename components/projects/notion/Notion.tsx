"use client"
import Link from "next/link";
import React from "react";
import { InfiniteMovingCardsDemo } from "./slider";

const Notion = () => {
 return (
    <Link  className="flex flex-col gap-2 p-2 h-[350px]  w-[300px] rounded-lg hover:shadow-sm hover:shadow-purple-500 transition-colors lg:absolute lg:left-40 lg:top-[1250px] bg-teal-100/10" href="https://notejoy.vercel.app/">
    <div>
        <InfiniteMovingCardsDemo/>
        </div>
        <div className=" flex flex-col p-3 gap-3 ">
    <h1 className="text-4xl font-bold text-purple-500">Notion-clone</h1>
    <div>
        <h1 className="text-gray-500">NextJs-13.5, React, Tailwind CSS, TypeScript, MongoDB</h1>
    </div>
        
    </div>
    </Link>)

};

export default Notion;
