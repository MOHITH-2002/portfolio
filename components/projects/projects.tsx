"use client";
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Notejoy from './_components/webprojects/notejoy'
import Chat_app from './_components/webprojects/chat_app'
import PlotChart from './_components/webprojects/plot_chart'
import Freelancehive from './_components/webprojects/freelance'
import JustforFoodies from './_components/webprojects/just_for_foodies'
import { cn } from '@/lib/utils';

import Covid from './_components/data_analytics/covid';


const Projects = () => {
  const [web,isWeb] = useState(true)
  const [data,isData]= useState(false)

  
  return (
    <div className="flex flex-col">
    <div data-aos="fade-up" className="flex flex-col justify-center items-center gap-y-8 pb-10">
    <h1 className=" pt-10 text-3xl text-[#FDCA3A] font-bold text-center">Projects</h1>
    <div className="flex gap-x-8 ">
        <Button onClick={()=>{isWeb(true);
              isData(false);
            } } className={cn(web ? "bg-red-600 hover:bg-red-500" : "")}>
            Web
          </Button>
          <Button onClick={()=>{ isWeb(false); // Set web to false when data is clicked
              isData(true);
            }} className={cn(data ? "bg-red-600 hover:bg-red-500" : "")}>
            Data Analytics
          </Button>
    </div>
    </div>
    {/* Web projects */}
    {web &&(

      <div data-aos="fade-up">
      <div  className="flex pt-10 pb-20 md:justify-center">
          <Notejoy />
        </div>
        <div className="flex pt-10 pb-20 md:justify-center">
            <Chat_app />
          </div>
          <div className="flex pt-10 pb-20 md:justify-center">
            <PlotChart />
          </div>
          <div className="flex pt-10 pb-20 md:justify-center">
            <Freelancehive />
          </div>
          <div className="flex pt-10 pb-20 md:justify-center">
            <JustforFoodies />
          </div>
          </div>
      )}
    {/* Data Anyaltics */}
    {
      data &&(
        <div data-aos="fade-up">
        <div className="flex pt-10 pb-20 md:justify-center">
            <Covid/>
          </div>
        </div>
      )
    }
    </div>
    
  )
}

export default Projects
