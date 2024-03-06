"use client"
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Events = () => {
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
    
      <div className="grid grid-cols-1 xl:grid-cols-2 h-min rounded-md bg-[#086972] pt-10 pb-20">
      <div className=" p-2 flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709679543/portfolio%20videos/events_xaqo5a.mp4"
          ref={videoEl}
          />
          </div>
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-[#FEFEFE]'>
        <b className='text-red-500 text-3xl'>Events</b> is a platform where users can create, edit, and delete events. It tracks ticket sales for each event, allowing organizers to set prices or offer free admission. Built with Next.js 14, MongoDB, and serverless functions, it ensures secure access through authentication and integrates Stripe to manage financial transactions for safe payment. 
    </h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://eventshost.vercel.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/Events">
    <Button>Code</Button>
    </Link>
    </div>
    </div>
    
    
    </div>

    
    </>
  )
}

export default Events
