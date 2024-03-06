"use client"
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useEffect, useRef } from 'react'

const IvicamAi = () => {
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
    // <div className="flex h-min rounded-md bg-[#0072E8] flex-col md:h-[80vh]  md:pt-10 md:w-[90%] md:flex-row">
      <div className="grid grid-cols-1 xl:grid-cols-2 h-min rounded-md bg-[#0072E8] pt-10 pb-20">
        <div className=" xl:hidden p-2 flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709679029/portfolio%20videos/ivicam_ai_uruji9.mp4"
          ref={videoEl}
          />
          </div>
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-slate-100 '>
        <b className='text-red-600 text-3xl'>IvicamAi </b>
 is an innovative online AI service platform, offering a diverse range of functionalities through a web application. Users can harness the power of IvicamAi for code generation, music video creation, and face swapping, all seamlessly integrated with OpenAI API and ReplicateAI API. This cutting-edge platform provides users with AI-driven solutions, empowering them to explore and utilize advanced technologies for their coding, creative, and visual needs.</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://ivicamAi.vercel.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/IvicamAi">

    <Button>Code</Button>
    </Link>
    </div>
    </div>
    
      <div className="hidden xl:flex p-2  items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709679029/portfolio%20videos/ivicam_ai_uruji9.mp4"
          ref={videoEl}
          />
          </div>
    </div>


  );
};

export default IvicamAi;
