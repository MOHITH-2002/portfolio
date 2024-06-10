import Contacticons from "@/components/contact/contacticons";
import Image from "next/image";
import React from "react";

const About = () => {
  return (<div className="flex flex-col items-center lg:flex-row w-full font-sans gap-4 pt-5">
                <div className="flex justify-center md:w-[500px] 2xl:w-[700px]">
                    <Image src="/manuphoto.png" alt="img" width={400} height={300} />
                </div>
            <div className="flex md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:items-center 2xl:justify-center">
                <div className="flex flex-col gap-5">
                    <span>
                        As an aspiring <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">full-stack developer</span>, I have hands-on experience with the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">MERN Stack</span> and <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Next.js 14</span>. I am proficient in creating and managing dynamic web applications.

I have a solid understanding of <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DevOps</span> practices and have experience automating and optimizing deployment workflows using various DevOps tools. The DevOps tools I am familiar with include <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Docker, Kubernetes, Jenkins, and Terraform</span>.
                    </span>
                    <Contacticons/>

                </div>
            </div>
                                
            </div>)
};

export default About;
