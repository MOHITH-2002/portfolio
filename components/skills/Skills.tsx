import React from "react";
import { data } from "./skilldata";
import Image from "next/image";

const Skills = () => {
    
    return(
    <div className=" flex flex-col space-y-10 pt-20 ">
    <div className="flex flex-col">
    <h1 className="text-[2.25rem] leading-4 md:text-[3.75rem] md:leading-10 font-bold">Skills 👨‍💻</h1>
    <h1 className="text-3xl md:text-5xl font-bold pb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Programming</h1>

    </div>
    <div className="grid grid-cols-3 pl-8 md:pl-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 w-full gap-8 gap-x-7 py-10 bg-gray-50 rounded-3xl ">

    {data.map(item =>
    

        <Image key={item.id} className="items-center" src={item.img} alt={item.alt} width={60} height={60} />
    
    )}
        
    </div>
    </div>
    );
};

export default Skills;
