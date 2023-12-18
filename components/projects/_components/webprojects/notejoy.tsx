import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Notejoy = () => {
    
  return (
    <>
    {/* Notejoy */}
    <div className="flex h-min rounded-md bg-[#008777] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%]">
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-[#FEFEFE]'>
        <b className='text-red-500 text-3xl'>Notejoy</b> is a website that helps you take notes. It is made with Next.js 14, Tailwind CSS, and TypeScript. This means it is easy to use and works quickly. You can use Notejoy to write down your thoughts, ideas, and important information. It is a good choice for people who want an easy-to-use note-taking website.
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
    <div className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/notejoy_design.png" width={600} height={600} alt="hero"/>
    </div>
    </div>

    
    </>
  )
}

export default Notejoy
