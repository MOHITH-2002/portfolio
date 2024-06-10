import { Button } from "@/components/ui/button";
import React from "react";


const Resume = () => {
  return <>
    <a  href={process.env.NEXT_APP_RESUME_LINK} download="Mohith B A resume.pdf">
          <Button  className="flex w-44 text-sm bg-gradient-to-r from-emerald-400 to-cyan-400 text-black" >
            Resume
          </Button>
        </a>
  </>;
};

export default Resume;
