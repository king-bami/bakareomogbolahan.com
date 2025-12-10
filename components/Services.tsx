import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Server, Zap, Cpu, Code2, Globe } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "PRODUCT ENGINEERING",
    description: "I don't just build features; I engineer complete products. From MVP to scale, I translate complex business requirements into robust, user-centric digital solutions that solve real-world problems.",
    icon: <Cpu size={32} />
  },
  {
    id: 2,
    title: "SYSTEM ARCHITECTURE",
    description: " designing fault-tolerant, scalable cloud systems. I leverage serverless edge functions, real-time databases, and AI integration to build infrastructure that grows with your user base.",
    icon: <Server size={32} />
  },
  {
    id: 3,
    title: "CREATIVE DEVELOPMENT",
    description: "Bringing ideas to life with motion and interaction. I bridge the gap between static design and dynamic experience, ensuring every pixel and transition serves a purpose.",
    icon: <Zap size={32} />
  }
];

const technologies = [
    "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "SUPABASE", "MONGODB", "POSTGRESQL", "AI/LLM", "DOCKER", "AWS"
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  return (
    <section className="bg-white py-24 relative z-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-8 bg-gray-900"></div>
               <span className="text-sm font-bold uppercase tracking-widest text-gray-500">My Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
              BRINGING IDEAS<br />TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-900">LIFE</span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              I specialize in solving complex technical problems and transforming abstract concepts into deployed, scalable software. Whether it's a 0-to-1 startup or an enterprise system, I bring engineering excellence to every line of code.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200">
            {services.map((service, index) => (
                <motion.div
                    key={service.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`
                        relative p-10 min-h-[450px] flex flex-col justify-between border-r border-b border-gray-200 transition-all duration-500 group
                        ${hoveredIndex === index ? 'bg-black text-white' : 'bg-white text-gray-900'}
                    `}
                >
                    <div className="relative z-10">
                        <div className={`mb-8 transition-colors duration-500 ${hoveredIndex === index ? 'text-brand-400' : 'text-gray-900'}`}>
                            {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold leading-tight mb-6 uppercase tracking-tight">
                            {service.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-opacity duration-500 ${hoveredIndex === index ? 'text-gray-300 opacity-100' : 'text-gray-500 opacity-80'}`}>
                            {service.description}
                        </p>
                    </div>

                    <div className="relative z-10 pt-8 mt-auto border-t border-gray-100/10">
                         <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold tracking-widest">0{index + 1}</span>
                            <div className={`p-2 rounded-full transition-all duration-300 ${hoveredIndex === index ? 'bg-white text-black rotate-[-45deg]' : 'bg-gray-100 text-gray-900'}`}>
                                <ArrowRight size={16} />
                            </div>
                         </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Tech Marquee */}
        <div className="mt-20 border-y border-gray-200 py-6 overflow-hidden bg-gray-50/50">
            <div className="flex whitespace-nowrap">
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-12 items-center"
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 uppercase tracking-widest flex items-center gap-4">
                           {tech} <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;