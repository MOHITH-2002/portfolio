"use client"
import Link from "next/link";
import React from "react";
import { InfiniteMovingCardsDemo } from "./slider";

const ChatApp = () => {
   
  return (
    <Link  className="flex flex-col gap-2 p-2 h-[350px]  w-[300px] rounded-lg hover:shadow-sm hover:shadow-yellow-300 transition-colors lg:absolute lg:right-40 lg:top-[500px] bg-teal-100/10" href="https://chatomatic-chat1.vercel.app/">
    <div>
        <InfiniteMovingCardsDemo/>
        </div>
        <div className=" flex flex-col p-3 gap-3 ">
    <h1 className="text-4xl font-bold text-yellow-300">ChatApp</h1>
    <div>
        <h1 className="text-gray-500"> React, Redux, SCSS, MongoDB, Socket.io, ExpressJS</h1>
    </div>
        
    </div>
    </Link>)
};

export default ChatApp;
