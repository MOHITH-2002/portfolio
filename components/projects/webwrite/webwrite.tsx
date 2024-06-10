import Link from "next/link";
import React from "react";
import { InfiniteMovingCardsDemo } from "./Slider";

const Webwrite = () => {
    return (
    <Link  className="flex flex-col gap-2 p-2 h-[350px]  w-[300px] hover:shadow-sm hover:shadow-gray-300 transition-colors rounded-lg lg:absolute lg:right-40 lg:top-3 bg-teal-100/10" href="https://webwrite.vercel.app/">
    <div>
        <InfiniteMovingCardsDemo/>
        </div>
        <div className=" flex flex-col p-3 gap-3 ">
    <h1 className="text-4xl font-bold text-gray-300">Webwrite</h1>
    <div>
        <h1 className="text-gray-500">NextJs-14, React, Tailwind CSS, TypeScript, MongoDB, LiveBlocks</h1>
    </div>
        
    </div>
    </Link>)
};

export default Webwrite;
