import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import meImage from '../me2.jpg';

const Hero: React.FC = () => {
   const PROFILE_IMAGE = meImage;
   const containerRef = useRef<HTMLDivElement>(null);

   // Mouse position tracking for parallax
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const mouseXSpring = useSpring(x);
   const mouseYSpring = useSpring(y);

   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
         const width = rect.width;
         const height = rect.height;
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;

         const xPct = mouseX / width - 0.5;
         const yPct = mouseY / height - 0.5;

         x.set(xPct);
         y.set(yPct);
      }
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
   };

   return (
      <section
         ref={containerRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className="relative min-h-screen flex items-center bg-[#f8f8f8] pt-24 pb-12 lg:pt-0 overflow-hidden perspective-1000"
      >
         {/* Background Decorative Elements */}
         <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gray-100/50 lg:-skew-x-12 lg:translate-x-20 z-0" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl filter opacity-50 pointer-events-none" />

         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

            {/* Text Content - Left Side */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="order-2 lg:order-1 flex flex-col items-start text-left"
            >
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-brand-900 text-sm font-bold tracking-wide uppercase mb-8"
               >
                  <span className="relative flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Available for new projects
               </motion.div>

               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-900">
                     Omogbolahan.
                  </span>
               </h1>

               <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                  Senior Full Stack Engineer & Founder building scalable, impact-driven platforms. Expert in Next.js, Node.js, and AI solutions.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
                  <a
                     href="#projects"
                     className="px-8 py-4 bg-brand-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                     View My Work <ArrowRight size={20} />
                  </a>
                  <a
                     href={SOCIAL_LINKS.email}
                     className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                     Contact Me <Mail size={20} />
                  </a>
               </div>

               <div className="flex items-center gap-8 text-gray-400">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-brand-900 transition-colors transform hover:scale-110">
                     <Github size={28} />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-900 transition-colors transform hover:scale-110">
                     <Linkedin size={28} />
                  </a>
                  <div className="h-px w-16 bg-gray-300 hidden sm:block"></div>
                  <span className="text-sm font-mono text-gray-500 tracking-widest uppercase hidden sm:block">Based in Nigeria</span>
               </div>
            </motion.div>

            {/* Image Content - Right Side */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
               style={{
                  perspective: 1000,
               }}
            >
               <motion.div
                  className="relative w-full max-w-md lg:max-w-xl aspect-[3.5/4.5]"
                  style={{
                     rotateX: rotateX,
                     rotateY: rotateY,
                     transition: "all 0.1s ease"
                  }}
               >
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border-2 border-brand-900/5 rounded-[2rem] transform translate-x-4 translate-y-4 z-0"></div>

                  {/* Main Image Container */}
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-gray-200 z-10 border-[6px] border-white">
                     <img
                        src={PROFILE_IMAGE}
                        alt="Omogbolahan Bakare"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
                     />

                     {/* Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Floating Stats Card */}
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1 }}
                     style={{
                        x: useTransform(mouseXSpring, [-0.5, 0.5], [15, -15]),
                        y: useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]),
                     }}
                     className="absolute bottom-8 -left-4 lg:-left-12 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 max-w-[240px]"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M12 12l4.9-4.9M12 12l-4.9 4.9" /></svg>
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Role</span>
                     </div>
                     <p className="font-bold text-gray-900 leading-tight">Open for <br />Full-Stack Roles</p>
                  </motion.div>
               </motion.div>
            </motion.div>

         </div>
      </section>
   );
};

export default Hero;