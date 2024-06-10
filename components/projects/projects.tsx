"use client"
import React from "react";


import Webwrite from "./webwrite/webwrite";
import Qrtickets from "./qrtickets/Qrtickets";
import ChatApp from "./chatapp/ChatApp";
import Events from "./Events/Events";
import Ivicam from "./ivicam/ivicam";
import Notion from "./notion/Notion";

const Projects = () => {
  return(
    <div className=" flex flex-col space-y-10 pb-20 py-20">
    <div className="flex flex-col">
    <h1 className="text-[2.25rem] leading-4 md:text-[3.75rem] md:leading-10 font-bold">Projects 👨‍💻</h1>
    <h1 className="text-3xl md:text-5xl font-bold pb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">All Creative Works</h1>

    </div>
    <div className=" flex flex-col lg:h-[1600px] items-center gap-10 relative">

        <Webwrite/>
        <Qrtickets/>
        <ChatApp/>
        <Events/>
        <Ivicam/>
        <Notion/>
    </div>
    
    </div>
  );
};

export default Projects;
