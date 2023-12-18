import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlotChart = () => {
  return (
    <div className="flex h-min rounded-md bg-[#37527C] flex-col md:h-[80vh] md:flex-row md:pt-10 md:w-[90%]">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-white'>
        <b className='text-red-600 text-3xl'>PlotChart</b> is a web application created by the Python library Streamlit that allows users to see various sorts of plots and charts by uploading a suitable Excel or CSV file.</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://plotchart.streamlit.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/PlotChart">

    <Button >Code</Button>
    </Link>
    </div>
    </div>
    <div className='flex justify-end flex-1'>
    <Image className='rounded-md' src="/plot_chart_design.png" width={600} height={600} alt="hero"/>
    </div>
    </div>


  );
};

export default PlotChart;
