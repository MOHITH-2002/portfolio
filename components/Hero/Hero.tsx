import Link from "next/link";
import React from "react";
import LeftHero from "./LeftHero";
import Image from "next/image";
import RightHero from "./RightHero";


const Hero = () => {
    return (
        <div className="flex flex-col pt-20 items-center">
            {/* GitHub link */}
            <div className="flex h-20 items-center justify-center">
                <Link
                    href="https://github.com/MOHITH-2002"
                    className="font-sans text-sm md:text-md bg-teal-100/10 p-2 hover:bg-emerald-200/20 rounded-full border-solid border-2 border-cyan-600 whitespace-nowrap"
                >
                    👋, I&apos;m a Full Stack Developer & DevOps Enthusiast
                </Link>
            </div>

            {/* Grid */}
            <div className="flex flex-col-reverse items-center lg:flex-row w-full font-sans gap-4 pt-5">
                <div className="flex md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:items-center 2xl:justify-center">
                    <LeftHero/>
                </div>
                                {/* hero image  */}
                                <RightHero/>
            </div>
        </div>
    );
};

export default Hero;
