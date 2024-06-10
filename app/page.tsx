"use client"
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero/Hero";
import Details from "@/components/Details/Details";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";



export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 30,
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showScrollButton = scrollY > 500;

  return (
    <main className="flex flex-col gap-5 lg:px-16 md:px-10 px-5 ">
      
      <Hero/>
      <Details/>
      <Skills/>
      <Contact/>
      <Projects/>
      
        {showScrollButton && (
        <button
          className="fixed bottom-5 right-5 px-3 py-3 backdrop-blur-sm rounded-full md:bg-gray-300 md:dark:bg-stone-900"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
      )}
    </main>
  );
}

