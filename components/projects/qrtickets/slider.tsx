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
        img:"/qrtickets/qr1.png"
    },
    {   
        img:"/qrtickets/qr2.png"
    },
    {   
        img:"/qrtickets/qr3.png"
    },
    {   
        img:"/qrtickets/qr4.png"
    },
    
    
    

];