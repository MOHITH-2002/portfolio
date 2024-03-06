"use client"
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Notejoy = () => {
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
    <>
    {/* Notejoy */}
    {/* <div className="flex h-min rounded-md bg-[#008777] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%]"> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 h-min rounded-md bg-[#008777] pt-10 pb-20">
        <div className=" xl:hidden p-2 flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709679847/portfolio%20videos/notejoy_p8q8iz.mp4"
          ref={videoEl}
          />
          </div>
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-[#FEFEFE]'>
        <b className='text-red-500 text-3xl '>Notejoy</b> is a streamlined note-taking website crafted with cutting-edge technologies, including Next.js 14, Tailwind CSS, and TypeScript. Boasting user-friendly functionality and swift performance, Notejoy provides an efficient platform for capturing thoughts, ideas, and vital information. Ideal for individuals seeking an uncomplicated yet robust note-taking solution, Notejoy stands out as a choice that seamlessly integrates ease of use with rapid responsiveness.
    </h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://notejoy.vercel.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/Notejoy">
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
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709679847/portfolio%20videos/notejoy_p8q8iz.mp4"
          ref={videoEl}
          />
          </div>
     
    </div>

    
    </>
  )
}

export default Notejoy
