import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Freelancehive = () => {
  return (
    <div className="flex h-min rounded-md bg-[#0072E8] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%] md:flex-row-reverse">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg'>
        <b className='text-red-600 text-3xl'>Freelancehive</b> A blog dedicated to freelancing, like Freelancehive, serves as a valuable resource for freelancers and those interested in the freelance industry.</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://freelancehive.vercel.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/freelancehive">

    <Button>Code</Button>
    </Link>
    </div>
    </div>
    <div className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/freelanchive_design.png" width={600} height={600} alt="hero"/>
    </div>
    </div>


  );
};

export default Freelancehive;
