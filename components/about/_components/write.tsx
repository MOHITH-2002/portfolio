import Typewriter from "@/hooks/typewriting";
import React from "react";

const Write = () => {
  return (

    <>
    <p className="text-justify  dark:text-[#414141] text-2xl">{"I'm "}<b>MOHITH B A</b> {"and I'm a"}
              
                
                </p>
                <div className='flex h-20 text-justify items-center text-3xl text-red-600 font-bold '>
                    <Typewriter/>
                </div>
            <p className="text-[#414141] text-xl text-justify">
            I am a{" "}
            <strong className="text-[#1DA1F2]">Full Stack Developer</strong> and{" "}
            <strong className="text-[#1DA1F2]">Data Analytics professional</strong> in
            my third year of{" "}
            <strong className="text-[#1DA1F2]">Electronics and Communication Engineering</strong> at{" "}
            <strong className="text-[#1DA1F2]">KLE Technological University, Hubli</strong>. My
            passion lies in continually enhancing my skills and knowledge. I am actively
            working on improving my proficiency in{" "}
            <strong className="text-[#1DA1F2]">Data Structures and Algorithms</strong> using{" "}
            <strong className="text-[#1DA1F2]">Java</strong>, aiming for efficiency in
            software development. Simultaneously, I am dedicated to expanding my expertise
            in <strong className="text-[#1DA1F2]">Data Science</strong> to further diversify
            my skill set.
          </p>
    </>
  );
};

export default Write;
