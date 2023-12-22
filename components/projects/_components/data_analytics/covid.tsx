import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Covid = () => {
  return (
    <div className="flex h-min rounded-md bg-[#37527C] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%]">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-white'>
        <b className='text-red-600 text-3xl'>Covid-19-Analysis </b>Using Tableau to analyze the COVID-19 dataset from January to June 2020 reveals a dynamic visualization showcasing the pandemic&apos;s global impact, highlighting the rise and fall of cases, regional hotspots, and key trends during this crucial period.</h1>
    <div className="flex justify-center gap-x-10">

    {/* <Link href="https://github.com/MOHITH-2002/covid_19_analysis">
    <Button>Demo</Button>
    </Link> */}
    <Link href="https://github.com/MOHITH-2002/covid_19_analysis">

    <Button >Code</Button>
    </Link>
    </div>
    </div>
    <div className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/covid19_analysis.png" width={600} height={600} alt="hero"/>
    </div>
    </div>


  );
};




export default Covid;
