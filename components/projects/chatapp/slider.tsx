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
        img:"/chat/chat1.png"
    },
    {   
        img:"/chat/chat2.png"
    },
    {   
        img:"/chat/chat3.png"
    },
    {   
        img:"/chat/chat4.png"
    },
    {   
        img:"/chat/chat5.png"
    },
    {   
        img:"/chat/chat6.png"
    },
    {   
        img:"/chat/chat7.png"
    },
    {   
        img:"/chat/chat8.png"
    },
    
    
    
    

];