import React, { useEffect, useState } from 'react'
export const Scrolled = (threshold= 10)=>{
    const [scrolled,setScrolled] = useState(false);
    useEffect(() => {
      const handleScrolled = ()=>{
        if(window.scrollY>threshold){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
      }
      window.addEventListener('scroll', handleScrolled);
      return () => {
        window.removeEventListener('scroll', handleScrolled);
      };
    }, [threshold]);
    return scrolled;
    
}