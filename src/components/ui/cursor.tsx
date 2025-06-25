'use client';

import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span
      ref={cursorRef}
      className="fixed pointer-events-none z-0 w-16 h-16 rounded-full bg-midnight-green/10 backdrop-blur-sm transition-all duration-300 ease-out"
      style={{
        transform: 'translate(-50%, -50%)',
        left: '0',
        top: '0'
      }}
    />
  );
};

export default Cursor;
