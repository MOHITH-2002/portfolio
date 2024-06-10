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
        img:"/ivicamAi/ai1.png"
    },
    {   
        img:"/ivicamAi/ai2.png"
    },
    {   
        img:"/ivicamAi/ai3.png"
    },
    {   
        img:"/ivicamAi/ai4.png"
    },
    
    {   
        img:"/ivicamAi/ai5.png"
    },
    {   
        img:"/ivicamAi/ai6.png"
    },
    {   
        img:"/ivicamAi/ai7.png"
    },
    {   
        img:"/ivicamAi/ai8.png"
    },
    
    
    
    

];