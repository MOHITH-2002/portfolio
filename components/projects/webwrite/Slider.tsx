"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
 
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[13rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
        img:"/webwrite/web1.png"
    },
    {   
        img:"/webwrite/web2.png"
    },
    {   
        img:"/webwrite/web3.png"
    },
    {   
        img:"/webwrite/web4.png"
    },
    {   
        img:"/webwrite/web5.png"
    },
    {   
        img:"/webwrite/web6.png"
    },
    {   
        img:"/webwrite/web7.png"
    },
    {   
        img:"/webwrite/web8.png"
    },
    {   
        img:"/webwrite/web9.png"
    },
    {   
        img:"/webwrite/web10.png"
    },
    
    

];