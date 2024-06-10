import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Contacticons = () => {
  return(
    <div className="flex pt-3 gap-3">
                            <Link href="mailto:dyedev05@gmail.com" className="hover:-translate-y-1 transition ease-in-out">
                                <Button variant="ghost" size="icon" className="bg-slate-300/20">
                                    <IoMail size={20} />
                                </Button>
                            </Link>
                            <Link href="https://github.com/MOHITH-2002" className="hover:-translate-y-1 transition ease-in-out">
                                <Button variant="ghost" size="icon" className="bg-slate-300/20">
                                    <FaGithub size={20} />
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/mohith-b-a-ba8a22230/" className="hover:-translate-y-1 transition ease-in-out">
                                <Button variant="ghost" size="icon" className="bg-slate-300/20">
                                    <FaLinkedinIn size={20} />
                                </Button>
                            </Link>
                            <Link href="https://www.instagram.com/mohith_b_a" className="hover:-translate-y-1 transition ease-in-out">
                                <Button variant="ghost" size="icon" className="bg-slate-300/20">
                                    <RiInstagramFill size={20} />
                                </Button>
                            </Link>
                        </div>
  );
};

export default Contacticons;
