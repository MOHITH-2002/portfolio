
import Link from 'next/link'
import React from 'react'

const Footer = () => { 
  return (
    <div data-aos="fade-up" className="flex h-20 items-center justify-center bg-[#1F1400] text-white">
        <Link className="text-xl font-bold hover:text-blue-700  " href="https://github.com/MOHITH-2002">Mohith B A</Link>
        <h1 className="text-lg"> |© All rights reserved.</h1>
    </div>
  )
}

export default Footer
