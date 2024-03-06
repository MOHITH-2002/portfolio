"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef } from 'react'

const JustforFoodies = () => {
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
    // <div className="flex h-min rounded-md bg-[#709078] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%]">
      <div className="grid grid-cols-1 xl:grid-cols-2 h-min rounded-md bg-[#709078] pt-10 pb-20">
      <div className="xl:hidden p-2 flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709682246/portfolio%20videos/justforfoodies_adyuut.mp4"
          ref={videoEl}
          />
          </div>
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-white'>
        <b className='text-red-600 text-3xl'>JustforFoodies</b> is a food ordering UI website. Order your favorite meals anytime, anywhere. A user-friendly platform for food enthusiasts. 🍔🍕🥗
</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://justforfoodies.vercel.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/JustforFoodies.">

    <Button >Code</Button>
    </Link>
    </div>
    </div>
  <div className="hidden p-2 xl:flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709682246/portfolio%20videos/justforfoodies_adyuut.mp4"
          ref={videoEl}
          />
          </div>
     
    </div>


  );
};

export default JustforFoodies;
