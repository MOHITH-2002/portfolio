import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Freelancehive = () => {
  return (
    <div className="flex h-min rounded-md bg-[#0072E8] flex-col md:h-[80vh]  md:pt-10 md:w-[90%] md:flex-row-reverse">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-black'>
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
    <div className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/ivicamAi.png" width={600} height={600} alt="hero"/>
    </div>
    </div>


  );
};

export default Freelancehive;
