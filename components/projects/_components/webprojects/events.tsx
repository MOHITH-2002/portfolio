import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = () => {
    
  return (
    <>
    {/* Notejoy */}
    <div className="flex h-min rounded-md bg-[#086972] flex-col md:h-[80vh] md:flex-row-reverse md:pt-10 md:w-[90%]">
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-[#FEFEFE]'>
        <b className='text-red-500 text-3xl'>Events</b> is a platform where users can create, edit, and delete events. It tracks ticket sales for each event, allowing organizers to set prices or offer free admission. Built with Next.js 14, MongoDB, and serverless functions, it ensures secure access through authentication and integrates Stripe to manage financial transactions for safe payment. 
    </h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://eventshost.vercel.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/Events">
    <Button>Code</Button>
    </Link>
    </div>
    </div>
    <Link href="https://eventshost.vercel.app/" className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/events.png" width={600} height={600} alt="hero"/>
    </Link>
    </div>

    
    </>
  )
}

export default Events
