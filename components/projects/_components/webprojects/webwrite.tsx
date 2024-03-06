"use client"
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useEffect, useRef } from 'react'

const Webwrite = () => {
  const videoEl = useRef<HTMLVideoElement | null>(null);

  const attemptPlay = () => {
    if (videoEl && videoEl.current) {
      videoEl.current.play().catch((error: Error) => {
        console.error("Error attempting to play", error);
      });
    }
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    // <div className="flex h-min rounded-md  flex-col  md:pt-10 md:w-[90%] md:flex-row-reverse">
      <div className="grid grid-cols-1 xl:grid-cols-2 h-min rounded-md bg-[#8E5D3A] pt-10 pb-20">
      <div className=" p-2 flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709681890/portfolio%20videos/webwrite_yto7xr.mp4"
          ref={videoEl}
          />
          </div>
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
    
      
    </div>
    // </div>


  );
};

export default Webwrite;
