import React from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";

const Contact = () => {
  return(
    <div className="flex flex-col gap-5 py-5 justify-center items-center lg:gap-20 lg:min-h-[150px] rounded-xl lg:flex-row lg:mx-20 my-20 bg-gradient-to-r from-gray-300 via-yellow-500 to-pink-200 ">
        <div className="flex flex-col ">
        <h1 className="text-black font-bold text-2xl text-center">Let&apos;s Build Something Together</h1>
        <h1 className="text-black text-center">My passion is turning ideas into real-life products. Let&apos;s make it happen!</h1>
        </div>
        <div className="flex">
        <Link href="/links" className="flex gap-2 bg-black p-2 rounded-lg text-white" >
        <Rocket /> Connect With Me
        </Link>
        </div>
    </div>
  );
};

export default Contact;
