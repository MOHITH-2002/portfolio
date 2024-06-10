
import React from "react";

import { GrAnnounce } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import About from "./_components/about";
import { Button } from "@/components/ui/button";
export const generateMetadata = async()=>{

  return {
    title: 'Mohith B A | About',
    description: 'Portfolio',
  }
}
const Aboutpage = () => {
    return (
    <div className="mt-[100px] flex flex-col lg:px-16 md:px-10 px-3 ">
    <div className="flex flex-col">
        <div className="flex items-end gap-1">

    <h1 className="text-[2.25rem] leading-4 md:text-[3.75rem] md:leading-10 font-bold">About </h1>
    <FcAbout size={34}/>
        </div>
    <h1 className="text-3xl md:text-5xl font-bold pb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Developer</h1>

    </div>
    <About/>
    <div className="flex flex-col gap-5 py-5 p-5  lg:min-h-[150px] rounded-xl  my-20 bg-gradient-to-r from-gray-300 via-yellow-500 to-pink-200 ">
        <div className="flex gap-3 items-center ">
            <Button size='icon' className="p-1 ">

        
            <GrAnnounce size={30} />
            </Button>
            <h1 className="text-black font-bold text-2xl text-center">Open for roles</h1>
        </div>
        <div className="">
        <h1 className="text-black">As a versatile developer, I am enthusiastic about taking on diverse roles and responsibilities in frontend, backend, and DevOps development. I am open to exploring opportunities in different work arrangements, including full-time, part-time, or contract positions.</h1>
        </div>
    </div>

    </div>
    );
};

export default Aboutpage;
