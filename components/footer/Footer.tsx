import Link from "next/link";
import React from "react";
import Contacticons from "../contact/contacticons";

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col gap-3 justify-center md:flex-row z-50 w-full md:justify-between items-center  lg:px-16 md:px-10 px-3 ">
        <Link href="/">
            <h1>Mohith B A | ©{new Date().getFullYear()}</h1>
        </Link>
        <Contacticons/>
    </footer>
  )
};

export default Footer;
