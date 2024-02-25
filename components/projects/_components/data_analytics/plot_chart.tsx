import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlotChart = () => {
  return (
    <div className="flex h-min rounded-md bg-[#008777] flex-col md:h-[80vh] md:flex-row-reverse md:pt-10 md:w-[90%]">
      
    <div className='flex flex-col flex-1 pt-10 pl-2 pr-3 pb-20 gap-y-10 '>
    <h1 className='text-justify text-lg text-white'>
        <b className='text-red-600 text-3xl'>PlotChart</b> 
{" "}a web application designed using the Python library Streamlit, empowers users to visualize diverse plots and charts effortlessly. By simply uploading a compatible Excel or CSV file, users gain access to a range of graphical representations, enhancing data exploration and comprehension. The seamless integration of Streamlit ensures a user-friendly experience, making PlotChart an efficient tool for interactive data visualization.</h1>
    <div className="flex justify-center gap-x-10">

    <Link href="https://plotchart.streamlit.app/">
    <Button>Demo</Button>
    </Link>
    <Link href="https://github.com/MOHITH-2002/PlotChart">

    <Button >Code</Button>
    </Link>
    </div>
    </div>
    <Link className='flex justify-end flex-1' href="https://plotchart.streamlit.app/">
    <Image className='rounded-md' src="/plot_chart_design.png" width={600} height={600} alt="hero"/>
    </Link>
    </div>


  );
};

export default PlotChart;
