import Typewriter from "@/hooks/typewriting";
import React from "react";

const Write = () => {
  return (

    <>
    <p className="text-justify  dark:text-[#CFCFCF] text-2xl">{"I'm "}<b>MOHITH B A</b> {"and I'm a"}
              
                
                </p>
                <div className='flex h-20 text-justify items-center text-3xl text-red-600 font-bold '>
                    <Typewriter/>
                </div>
            <p className="text-justify text-lg dark:text-[#CFCFCF] md: text-2xl">
			    I am pursuing <b>Electronics and Communication Engineering</b> at <b>KLE Technological University </b> having <b>CGPA </b> of <b className=""> 7.73</b>. I am Full Stack Developer passionate about continuously expanding my skills and knowledge.
                <br/>
                <br/>
                <br/>
                {"I'm also working on enhancing my Java skills in Data Structures and Algorithms, and I'm really interested in learning more about AI and ML. I'm always eager to learn new things and enjoy taking on challenging projects to discover amazing opportunities in the tech world."}
                </p>
    </>
  );
};

export default Write;
