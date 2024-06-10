import Link from "next/link";
import React from "react";
import { InfiniteMovingCardsDemo } from "./slider";


const Qrtickets = () => {
    return (
    <Link  className="flex flex-col gap-2 p-2 h-[350px]  w-[300px] rounded-lg hover:shadow-sm hover:shadow-red-500 transition-colors lg:absolute lg:left-40 lg:top-[250px] bg-teal-100/10" href="https://www.qrtickets.software">
    <div>
        <InfiniteMovingCardsDemo/>
        </div>
        <div className=" flex flex-col p-3 gap-3 ">
    <h1 className="text-4xl font-bold text-red-500">QrTickets</h1>
    <div>
        <h1 className="text-gray-500">NextJs-14, React, Tailwind CSS, TypeScript, MongoDB, Stripe</h1>
    </div>
        
    </div>
    </Link>)
};

export default Qrtickets;
