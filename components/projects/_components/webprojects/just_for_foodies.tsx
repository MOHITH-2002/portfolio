import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JustforFoodies = () => {
  return (
    <div className="flex h-min rounded-md bg-[#709078] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%]">
      
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
     <Link className='flex justify-end flex-1' href="https://justforfoodies.vercel.app/">
    <Image className='rounded-md' src="/just_for_foodies_design.png" width={600} height={600} alt="hero"/>
    </Link>
    </div>


  );
};

export default JustforFoodies;
