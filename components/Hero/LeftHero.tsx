import React from "react";
import Resume from "../Navbar/_created-components/Resume";
import { Button } from "../ui/button";


import Contacticons from "../contact/contacticons";
import Link from "next/link";
const LeftHero = () => {
  return (
    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-5xl md:text-5xl md:p-2 lg:text-6xl 2xl:text-8xl font-bold font-sans whitespace-nowrap">
                                I&apos;m
                            </span>
                            <span className="text-5xl md:text-5xl md:p-2 lg:text-6xl 2xl:text-8xl font-sans font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                Mohith B A,
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-4xl md:text-5xl md:p-2 lg:text-6xl 2xl:text-8xl font-bold font-sans whitespace-nowrap">
                                Full Stack
                            </span>
                            <span className="text-4xl md:text-5xl md:p-2 lg:text-6xl 2xl:text-8xl font-sans font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                Developer
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-4xl md:text-5xl md:p-2 lg:text-6xl 2xl:text-8xl font-bold font-sans whitespace-nowrap">
                                and
                            </span>
                            <span className="text-4xl md:text-5xl md:p-2 lg:text-6xl 2xl:text-8xl font-sans font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                DevOps Engineer.
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 pt-5">
                            <div>
                                <p className="font-sans">I Design and <span className=" font-semibold font-sans bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Develop impactful websites.</span></p>
                            </div>
                            <div>
                                <p className="font-sans">
                                    I optimize DevOps practices to <span className=" font-semibold font-sans bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">streamline development and enhance efficiency.</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex pt-3 gap-5">
                            <Link href="mailto:dyedev05@gmail.com">
                                <Button variant="outline" className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                    Hire me
                                </Button>
                            </Link>
                            <Resume />
                        </div>
                        {/* links */}
                        <Contacticons/>
                    </div>
  );
};

export default LeftHero;
