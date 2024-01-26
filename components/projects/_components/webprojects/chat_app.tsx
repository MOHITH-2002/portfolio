import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Chat_app = () => {
  return (
    <div className="flex h-min rounded-md bg-[#FDCA3A] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%] md:flex-row-reverse">
      
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
    <div className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/chat_app_design.png" width={600} height={600} alt="hero"/>
    </div>
    </div>


  );
};

export default Chat_app;
