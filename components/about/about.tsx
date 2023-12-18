"use client"
import Typewriter from '@/hooks/typewriting'
import React from 'react'
import Write from './_components/write'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const About = () => {
  return (
    <div className="flex flex-col w-full h-min md:h-screen">
      <h1 className=" pt-10 text-3xl text-[#FDCA3A] font-bold text-center">About Me</h1>
    <div className="pt-10 flex w-full gap-y-10 md:items-center justify-center flex-row-reverse ">
        <div data-aos="fade-up"  className="hidden md:flex block flex-1 justify-center">
    <Image  src="/manuphoto.png" width={300} height={300} alt="hero"/>
        </div>
        
        <div data-aos="fade-up" className="flex flex-col md:flex-1">
             <Write/>
        </div>

    </div>
    </div>
  )
}

export default About
