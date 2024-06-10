"use client"

import Hero from "@/components/Hero/Hero";
import Details from "@/components/Details/Details";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";



export default function Home() {


  return (
    <main className="flex flex-col gap-5 lg:px-16 md:px-10 px-5 ">
      
      <Hero/>
      <Details/>
      <Skills/>
      <Contact/>
      <Projects/>
    </main>
  );
}

