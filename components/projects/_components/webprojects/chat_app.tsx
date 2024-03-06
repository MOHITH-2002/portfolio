"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";


const Chat_app = () => {
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

    <div className="grid grid-cols-1 xl:grid-cols-2 h-min rounded-md bg-[#FDCA3A] pt-10 pb-20">
      <div className=" p-2 flex items-center justify-center">

      <video
          className=" p-2 w-[600px] h-min rounded-sm border-2 bg-black"
          playsInline
          loop
          muted
          // controls
          
          src="https://res.cloudinary.com/dpgxmmowq/video/upload/v1709671027/portfolio%20videos/chat_app_veo65g.mp4"
          ref={videoEl}
          />
          </div>
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-[#121212]'>
        <b className='text-red-700 text-3xl'>Chatomatic (Chat app)</b>  the epitome of a superior chatting experience! Developed with the powerful MERN stack—leveraging MongoDB, Express.js, React, and Node.js—and enhanced with Socket.io, Chatomatic ensures lightning-fast messaging capabilities. Stay effortlessly connected with friends and family, thanks to its seamless design and swift performance. Chatomatic delivers an unparalleled chatting experience that combines speed, reliability, and user-friendly functionality.</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://chatomatic-chat1.vercel.app/">
    <Button className="bg-black text-white hover:bg-secondary/80">Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/Chat_App">

    <Button className="bg-black text-white hover:bg-secondary/80">Code</Button>
    </Link>
    </div>
    </div>
    {/* <Link href="https://chatomatic-chat1.vercel.app" className='flex justify-end flex-1'> */}
    {/* <div className="flex relative  "> */}
    {/* <Image className='rounded-md absolute top-5 opacity-0' src="/chat_app_design.png" width={600} height={600} alt="hero"/> */}

    
          </div>
          
   
    // </div>


  );
};

export default Chat_app;
