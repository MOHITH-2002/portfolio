"use client"
import Typewriter from '@/hooks/typewriting'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { Button } from '../ui/button';
import Resume from '../navbar/_components/resume';
import {useMediaQuery} from "usehooks-ts"
import { cn } from '@/lib/utils';
const Hero = () => {
    const ismobile = useMediaQuery("(max-width:768px)");

    const [textColor, setTextColor] = useState("#FDCA3A");

  useEffect(() => {
    const colorList = ["#FDCA3A", "#008777", "#0072E8"];
    let index = 0;

    const intervalId = setInterval(() => {
      // Change the text color every 4 seconds
      setTextColor(colorList[index]);

      // Increment index, reset to 0 if it exceeds the length of the color list
      index = (index + 1) % colorList.length;
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const scrolltoHash = function () {
        const element = document.getElementById('contact')
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
  return (
    <div  className="flex flex-col w-full pt-20 h-screen items-center justify-center md:flex-row md:gap-12">
      
      
      
        
          <div className={cn("flex relative h-[100%] w-[100%] select-none md:flex-1 justify-center md:block")}>
        <Image className='object-cover' src="/manuphoto.png" fill={true} alt="hero"/>  
      </div>
      
      
      <div className='flex mt-5 flex-col items-center gap-y-3 md:flex-1 md:gap-y-10 md:items-start '>
        <h1 className="font-semibold text-3xl dark:text-[#CFCFCF]">Hello, I&apos;m</h1>
        <h1 className='font-bold text-5xl ' style={{ color: textColor }}>MOHITH B A</h1>

        <h1 className='font-bold text-4xl h-10 text-red-600'>
          <Typewriter/>
          </h1>
          <div className='flex gap-x-20 items-end'>

        <Button className='mt-5 text-sm' onClick={()=>scrolltoHash()} >Contact me</Button>
        <Resume/>
          </div>
      </div>

    </div>
  )
}
export default Hero