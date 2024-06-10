
"use client"
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" className="rounded-sm bg-teal-100/10 hover:bg-teal-100/20" onClick={toggleTheme}>
      {theme === "dark" ? (
        
         <>
          <SunMoon size={30} 
            className=" rotate-0 scale-100 transition-all dark:-rotate-90 "
          />
          
        
        </>
      ) : (
       <>
          <SunMoon size={30} 
            className="   transition-all rotate-0 scale-100 "
          />
        
        </>
      )}
    </Button>
  );
}
