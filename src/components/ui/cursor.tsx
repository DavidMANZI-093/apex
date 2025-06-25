'use client';

import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Get the actual position relative to the viewport
        const x = e.clientX + scrollX;
        const y = e.clientY + scrollY;
        
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span
      ref={cursorRef}
      className="fixed pointer-events-none z-0 w-128 h-128 rounded-full backdrop-blur-sm transition-all duration-300 ease-out"
      style={{
        transform: 'translate(-50%, -50%)',
        left: '0',
        top: '0',
        backgroundImage: 'radial-gradient(circle at center, rgba(109, 218, 211, 0.2) 0%, rgba(255, 255, 255, 0) 70%)'
      }}
    />
  );
};

export default Cursor;
