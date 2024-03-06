import { Button } from '@/components/ui/button'
import React from 'react'

const Resume = () => {
  return (
    <>
    <div className="flex md:hidden">
        <a href={process.env.NEXT_APP_RESUME_LINK} download="Mohith B A resume.pdf">

      <Button className="flex w-56 text-sm " size="sm"
        >Resume
      </Button>
        </a>
    </div>
    <div className="hidden md:flex">
 <a href={process.env.NEXT_APP_RESUME_LINK} download="Mohith B A resume.pdf" >

      <Button className="flex text-sm " size="sm"
        >Resume</Button>
        </a>
    </div>
        </>
  )
}

export default Resume

