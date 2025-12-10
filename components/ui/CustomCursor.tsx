import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || 
                     target.closest('a') || target.closest('button') ||
                     target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      
      setIsHovered(!!isLink);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-brand-600 rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-exclusion"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 3.5 : 1,
        }}
      />
      {/* Trailing Ring (Optional subtle effect) */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border border-brand-400 rounded-full pointer-events-none z-[9998] hidden lg:block opacity-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transition: "transform 0.15s ease-out"
        }}
      />
    </>
  );
};

export default CustomCursor;