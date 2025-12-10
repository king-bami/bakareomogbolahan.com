import React, { useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { STATS } from '../constants';

const Counter = ({ value }: { value: string }) => {
    // Extract number part
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    const ref = useRef<HTMLSpanElement>(null);

    return (
        <motion.span
            ref={ref}
            onViewportEnter={() => {
                animate(0, numericValue, {
                    duration: 2.5,
                    ease: "easeOut",
                    onUpdate: (latest) => {
                        if (ref.current) {
                            ref.current.innerText = Math.round(latest) + suffix;
                        }
                    }
                });
            }}
            viewport={{ once: true }}
        >
            0{suffix}
        </motion.span>
    );
};

const Stats: React.FC = () => {
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-600 blur-[120px]"></div>
          <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-gray-800/50">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-brand-500 transition-colors duration-300">
                <Counter value={stat.value} />
              </div>
              <span className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-medium border-t border-gray-800 pt-4 w-full max-w-[100px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;