"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Skills = () => {
  const dataAnylistSkill =[
    {
      alt:"python",
      img:"/python.png"
    },
    

    {
      alt:"streamlit",
      img:"/streamlit.png"
    },

    
    {
      alt:"tableau",
      img:"/tableau.png"
    },

    {
      alt:"excel",
      img:"/excel.png"
    },



    {
      alt:"mysql",
      img:"/mysql.png"
    },


  ]
  const coding =[
    {
      alt:"java",
      img:"/java.png"
    },
    {
      alt:"python",
      img:"/python.png"
    },
    {
      alt:"js",
      img:"/js.png"
    },
  ]

  const webskill = [
    {
      alt:"html",
      img:"/html.png"
    },
    {
      alt:"css",
      img:"/css.png"
    },
    {
      alt:"tailwind",
      img:"/tailwind.png"
    },
    {
      alt:"js",
      img:"/js.png"
    },
    {
      alt:"react",
      img:"/react.png"
    },
    {
      alt:"next",
      img:"/next.png"
    },
    {
      alt:"ts",
      img:"/ts.png"
    },
    {
      alt:"node",
      img:"/node.png"
    },
    {
      alt:"express",
      img:"/express.png"
    },
    {
      alt:"mongo",
      img:"/mongo.png"
    },
    {
      alt:"git",
      img:"/git.png"
    },
  ]
  return (
    <div data-aos="fade-up">
      <div className="flex h-20 items-center justify-center">

        <h1 className="text-3xl text-[#FDCA3A] font-bold text-center">
        Skills
        </h1>

      </div>
    <div className="flex flex-col justify-center gap-x-10 md:flex-row">
      <div className='flex flex-col md:flex-1'>
          <div className='flex h-20 items-center justify-center'>
            <Button variant="ghost" className='text-red-600 text-2xl font-bold cursor-default bg-secondary/80 hover:text-red-600'>

          Web Development
            </Button>
          </div>
          {/* each skill */}
        <div className=''>
          <div className='flex flex-wrap gap-10  items-center justify-center'>
          {webskill?.map((item,index)=>(

            <div className='flex justify-center items-center bg-secondary rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-20 w-20 transition-transform hover:scale-105' key={index}>
            <div className='flex flex-col '>
            <Image src={item.img} alt={item.alt} width="60" height="60"/>
            </div>
            
          </div>
          ))
          }
          
          
          </div>
          
          
          
        </div>
      </div>
        {/* <div className='flex md:flex-1'> */}
          <div className='flex flex-col md:flex-1'>
          <div className='flex h-20 items-center justify-center'>
            <Button variant="ghost" className='text-red-600 text-2xl font-bold cursor-default bg-secondary/80 hover:text-red-600'>

          Programming
            </Button>
          </div>
          {/* each skill */}
        <div className=''>
          <div className='flex flex-wrap gap-10 items-center justify-center '>
          {coding?.map((item,index)=>(

            <div className='flex justify-center items-center bg-secondary rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-20 w-20 transition-transform hover:scale-105' key={index}>
            <div className='flex flex-col '>
            <Image src={item.img} alt={item.alt} width="60" height="60"/>
            </div>
            
          </div>
          ))
          }
          
          
          </div>
          
          
          
        </div>
        <div className='flex h-20 items-center justify-center'>
            <Button variant="ghost" className='text-red-600 text-2xl font-bold cursor-default bg-secondary/80 hover:text-red-600'>

          Data Analytics
            </Button>
          </div>
          {/* each skill */}
        <div className=''>
          <div className='flex flex-wrap gap-10 items-center justify-center'>
          {dataAnylistSkill?.map((item,index)=>(

            <div className='flex justify-center items-center bg-secondary rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-20 w-20 transition-transform hover:scale-105' key={index}>
            <div className='flex flex-col '>
            <Image src={item.img} alt={item.alt} width="60" height="60"/>
            </div>
            
          </div>
          ))
          }
          
          
          </div>
          
          
          
        </div>
        
      </div>
        </div>
    </div>
    // </div>
  )
}

export default Skills
