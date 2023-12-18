"use client"
import Hero from "@/components/hero_section/hero";
import Navbar from "../components/navbar/navbar";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import Skills from "@/components/skills/Skills";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 30,
    });
  }, []);
  return (
    <div className="min-h-full flex flex-col">
      <Navbar/>
      <div className="flex flex-col px-6 pb-10 justify-center">
      <Hero/>

      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
      <Footer/>

    </div>
  )
}
