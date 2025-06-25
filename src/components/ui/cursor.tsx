'use client';

import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // For fixed positioning, use clientX/Y directly (viewport coordinates)
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <span
      ref={cursorRef}
      className="fixed pointer-events-none z-0 w-128 h-128 rounded-full backdrop-blur-sm transition-all duration-300 ease-out"
      style={{
        transform: 'translate(-50%, -50%)',
        left: '0',
        top: '0',
        opacity: '1',
        transition: 'opacity 0.2s ease-out',
        backgroundImage: 'radial-gradient(circle at center, rgba(109, 218, 211, 0.2) 0%, rgba(255, 255, 255, 0) 70%)'
      }}
    />
  );
};

export default Cursor;