import Link from "next/link";
import React from "react";
import { RiLinksFill } from "react-icons/ri";
export const generateMetadata = async()=>{

  return {
    title: 'Mohith B A | Links',
    description: 'Portfolio',
  }
}
const Linkspage = () => {
  return( 
  <div className="mt-[100px] flex flex-col lg:px-16 md:px-10 px-3 ">
    <div className="flex flex-col">
        <div className="flex items-end gap-1">

    <h1 className="text-[2.25rem] leading-4 md:text-[3.75rem] md:leading-10 font-bold">Links </h1>
    <RiLinksFill size={34} className="text-blue-500" />
        </div>
    <h1 className="text-3xl md:text-5xl font-bold pb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Connect</h1>
    <div className="flex flex-col gap-4 justify-center items-center py-10 ">
        <Link href="https://www.linkedin.com/in/mohith-b-a-ba8a22230/" className="flex items-center justify-center w-[300px] h-10 rounded-md bg-teal-100/10 hover:bg-emerald-200/20"> LinkedIn</Link>

        <Link href="https://github.com/MOHITH-2002/" className="flex items-center justify-center w-[300px] h-10 rounded-md bg-teal-100/10 hover:bg-emerald-200/20"> Github</Link>

        <Link href="mailto:dyedev05@gmail.com" className="flex items-center justify-center w-[300px] h-10 rounded-md bg-teal-100/10 hover:bg-emerald-200/20"> Gmail</Link>
        <Link href="https://leetcode.com/mohithba9353/" className="flex items-center justify-center w-[300px] h-10 rounded-md bg-teal-100/10 hover:bg-emerald-200/20"> LeetCode</Link>
        <Link href="https://www.geeksforgeeks.org/user/mohithba9353/" className="flex items-center justify-center w-[300px] h-10 rounded-md bg-teal-100/10 hover:bg-emerald-200/20"> GeeksForGeeks</Link>
        <Link href="https://www.instagram.com/mohith_b_a" className="flex items-center justify-center w-[300px] h-10 rounded-md bg-teal-100/10 hover:bg-emerald-200/20"> Instagram</Link>
       
    </div>

    </div>
  </div>);
};

export default Linkspage;
