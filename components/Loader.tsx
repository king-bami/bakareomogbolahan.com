import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
           // Allow generic CSS fade out or component unmount
           onComplete();
        }
      });

      // 1. Counter Animation (0 to 100)
      const counterObj = { value: 0 };
      
      tl.to(counterObj, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.floor(counterObj.value) + "%";
          }
        }
      });

      // 2. Text Reveal
      tl.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=2");

      // 3. Logo Reveal (simulating the OME 3BG logo)
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      }, "-=1.5");

      // 4. Exit Animation - Slide Up
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute bottom-10 right-10 text-9xl font-bold opacity-10 select-none hidden md:block">
         PORTFOLIO
      </div>

      <div className="relative z-10 flex flex-col items-center px-6">
         {/* Logo simulation */}
         <div 
           ref={logoRef} 
           className="opacity-0 scale-90 mb-8"
         >
             <div className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-center text-white">
                 OMOGBOLAHAN BAKARE
             </div>
         </div>

         {/* Loading Text */}
         <div className="overflow-hidden h-10 mb-4">
            <div ref={textRef} className="translate-y-full opacity-0 text-xl font-medium tracking-widest uppercase text-center">
               Loading Experience
            </div>
         </div>

         {/* Counter */}
         <div 
           ref={counterRef} 
           className="text-8xl md:text-9xl font-bold font-mono text-transparent text-stroke-white"
         >
           0%
         </div>
      </div>
    </div>
  );
};

export default Loader;