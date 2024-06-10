"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
 
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[13rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
    {   
        img:"/notion/notion1.png"
    },
    {   
        img:"/notion/notion2.png"
    },
    {   
        img:"/notion/notion3.png"
    },
    {   
        img:"/notion/notion4.png"
    },
    {   
        img:"/notion/notion5.png"
    },
    {   
        img:"/notion/notion6.png"
    },
    {   
        img:"/notion/notion7.png"
    },
    {   
        img:"/notion/notion8.png"
    },
    {   
        img:"/notion/notion9.png"
    },
    
    
    
    

];