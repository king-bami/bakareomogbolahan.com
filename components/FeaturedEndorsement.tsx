import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, ExternalLink, Star } from 'lucide-react';

const FeaturedEndorsement: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent skew-x-12 translate-x-1/3"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Label */}
          <div className="flex justify-center md:justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Endorsed by Industry Leaders</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-white/5 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
            
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
                <Quote size={120} className="text-white transform rotate-180" />
            </div>

            {/* Avatar / Monogram Column */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
                <div className="relative group">
                    {/* Ring Animation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-blue-600 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Monogram */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-full border-2 border-white/20 flex items-center justify-center shadow-2xl">
                        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">OJ</span>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full border-4 border-gray-900 shadow-lg">
                        <Linkedin size={18} />
                    </div>
                </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-9 text-center md:text-left">
                <blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight mb-8 font-sans">
                    "I can confidently beat my chest that Gbolahan is excellent. His <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-blue-400 font-bold">technical depth & leadership</span> make him a rare gem. He delivers world-class results every time."
                </blockquote>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <div>
                        <h4 className="text-2xl font-bold text-white mb-1">Obed Jonathan</h4> <p className="text-yellow-400 font-medium tracking-wide flex items-center gap-2 justify-center md:justify-start">
                            PwC Nigeria <span className="w-1 h-1 bg-gray-900 rounded-full"></span> 
                        </p>
                        <p className="text-brand-400 font-medium tracking-wide flex items-center gap-2 justify-center md:justify-start">
                            Technology Consultant <span className="w-1 h-1 bg-gray-500 rounded-full"></span> Cybersecurity Engineer
                        </p>
                       
                    </div>
                    
                    <a 
                        href="https://www.linkedin.com/in/obed-jonathan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold text-sm hover:bg-brand-50 transition-all hover:scale-105"
                    >
                        Verify on LinkedIn <ExternalLink size={16} />
                    </a>
                </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEndorsement;