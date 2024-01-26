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
        <b className='text-red-500 text-3xl '>Notejoy</b> is a streamlined note-taking website crafted with cutting-edge technologies, including Next.js 14, Tailwind CSS, and TypeScript. Boasting user-friendly functionality and swift performance, Notejoy provides an efficient platform for capturing thoughts, ideas, and vital information. Ideal for individuals seeking an uncomplicated yet robust note-taking solution, Notejoy stands out as a choice that seamlessly integrates ease of use with rapid responsiveness.
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
