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
        img:"/events/event1.png"
    },
    {   
        img:"/events/event2.png"
    },
    {   
        img:"/events/event3.png"
    },
    {   
        img:"/events/event4.png"
    },
    {   
        img:"/events/event5.png"
    },
    {   
        img:"/events/event6.png"
    },
    
];