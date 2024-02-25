import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Webwrite = () => {
  return (
    <div className="flex h-min rounded-md bg-[#8E5D3A] flex-col  md:pt-10 md:w-[90%] md:flex-row-reverse">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-slate-100'>
        <b className='text-red-500 text-3xl'>Webwrite</b> the ultimate tool for creating and sharing mind maps, whiteboards, and flowcharts. This powerful tool is powered by Next.js, React, Tailwind CSS, and TypeScript, offering you real-time collaboration, responsive design, and intuitive drag-and-drop functionality. With Webwrite, you can easily invite editors and viewers, customize themes, and work seamlessly across multiple devices.</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://webwrite.vercel.app/home">
    <Button >Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/webwrite">

    <Button>Code</Button>
    </Link>
    </div>
    </div>
    {/* <div > */}
      <Link className='flex justify-end flex-1' href="https://webwrite.vercel.app/">
    <Image className='rounded-md' src="/webwrite.png" width={600} height={600} alt="hero"/>
      </Link>
    </div>
    // </div>


  );
};

export default Webwrite;
