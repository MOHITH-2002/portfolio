import { Cloud, DatabaseBackup, Infinity } from "lucide-react";
import React from "react";
import { RiInfinityLine } from "react-icons/ri";
import { LuChevronsLeftRight } from "react-icons/lu";
const Details = () => {
  return(
    <div className=" flex pt-20  flex-col md:top-[100px] justify-center gap-8">
        <div className="flex flex-col gap-5">

        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold ">Full Product Development Stack with DevOps Integration.</h1>
        <span className=" text-center">I provide end-to-end product design services, taking ideas from the drawing board to a fully operational app. This involves creating user-friendly interfaces, building top-notch apps with exceptional design, integrating advanced software, and overseeing DevOps for seamless deployment and maintenance.</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
      <div className=" flex items-center justify-center flex-col gap-2">
        <div className=" bg-yellow-400 p-4 rounded-full">
          <LuChevronsLeftRight size={28} />


        </div>
        <h1 className="text-xl">

            Frontend Development
        </h1>
        <span className="text-center">
I specialize in developing functional, beautiful, and responsive frontend applications for the web using modern technologies.
        </span>
      </div>

      <div className=" flex items-center justify-center flex-col gap-2 h-[200px]">
        <div className=" bg-blue-400 p-4 rounded-full">
          <DatabaseBackup size={28}/>

        </div>
        <h1 className="text-xl">

            Backend Development
        </h1>
        <span className="text-center">
I develop high-quality cloud-based backend services for scaling and hosting all your users&apos; applications.
        </span>
      </div>
      <div className=" flex items-center justify-center flex-col gap-2 h-[200px]">
        <div className=" bg-green-400 p-4 rounded-full">
          <Cloud size={28}/>

        </div>
        <h1 className="text-xl">

            Cloud Computing
        </h1>
        <span className="text-center">
Leveraging state-of-the-art computing services such as AWS ensures strong performance, security, and reliability for your application&apos;s backend and cloud services.
        </span>
      </div>
      <div className=" flex items-center justify-center flex-col gap-2 h-[200px]">
        <div className="bg-purple-400 p-4 rounded-full">
          <RiInfinityLine size={28} />

        </div>
        <h1 className="text-xl">

            DevOps
        </h1>
        <span className="text-center">

      I implement robust DevOps practices, leveraging AWS and other leading tools to streamline your development pipeline, enhance deployment efficiency, and ensure continuous integration and delivery.
        </span>
      </div>
        
        


    </div>
        </div>
  );
};

export default Details;
