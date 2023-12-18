import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Chat_app = () => {
  return (
    <div className="flex h-min rounded-md bg-[#FDCA3A] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%] md:flex-row-reverse">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-[#121212]'>
        <b className='text-red-700 text-3xl'>Chatomatic (Chat app)</b> the ultimate chatting experience! It is made using MERN stack (MongoDB, Express.js, React, Node.js) and powered up by Socket.io. This means you get super-fast messaging that is as quick as lightning. Easily stay connected with friends and family.</h1>
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
