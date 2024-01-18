import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const ContactList = () => {
  return (
    <>
    {/* address */}
        <div className="flex gap-x-10 mb-10">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 ">
        <Image src="/location-pin.png" width={35} height={35} alt="location"/>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className='text-2xl text-[#0072E8]'>Address:</h1>
        <h2 className='text-xl'>Hassan, Karnataka.</h2>
        </div>
        </div>
        {/* mail */}
         <div className="flex gap-x-10 mb-10">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <Image src="/gmail.png" width={35} height={35} alt="location"/>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className='text-2xl text-[#0072E8]'>Email:</h1>
          <Link href="mailto:dyedev05@gmail.com" className="text-xl hover:text-green-400">dyedev05@gmail.com</Link>
        </div>
        </div>
        {/* github */}
        <div className="flex gap-x-10 mb-10">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
        <Image src="/github.png" width={35} height={35} alt="location"/>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className='text-2xl text-[#0072E8]'>Github:</h1>
             <Link href="https://github.com/MOHITH-2002" className="">
            <Button variant="outline">Find more projects</Button>
             </Link>
        </div>
        </div>
    </>

  )
}

export default ContactList
