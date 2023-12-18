"use client";
import React from 'react'
import ContactList from './_components/contact-list'
import ShadowForm from './_components/form';

const Contact = () => {
  return (
    <div data-aos="fade-up" >
    <div className="flex flex-col justify-center items-center gap-y-8 pb-10" >
        <h1 className=" pt-10 text-3xl text-[#FDCA3A] font-bold text-center">Contact Me</h1>
        <h1 className="text-2xl">Feel free to contact me.</h1>
        
    </div>
    <div className="flex justify-center items-center flex-col mt-20 md:flex-row">
    <div className="flex flex-col md:flex-1">
        
        <ContactList/>
    </div>
    <div className="flex md:flex-1 "id="contact">
      <ShadowForm/>
    </div>
    </div>
    </div>
  )
}

export default Contact
