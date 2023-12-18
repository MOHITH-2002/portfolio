"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const Typewriter = () => {
    const [text] = useTypewriter({
        words: ['Web Developer','Data Analyst','Programmer'],
        loop: 1000,
        delaySpeed:1500,
        deleteSpeed:50,      
        typeSpeed:150,
        
        
      })
  return (
     <span>{text}</span>
    
  )
}

export default Typewriter