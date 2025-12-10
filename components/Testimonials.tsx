import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { TestimonialsColumn } from './ui/TestimonialsColumn';

const Testimonials: React.FC = () => {
  const firstColumn = TESTIMONIALS.slice(0, 3);
  const secondColumn = TESTIMONIALS.slice(3, 6);
  // Reusing data to fill 3rd column for visual balance if needed, or split differently
  const thirdColumn = [TESTIMONIALS[0], TESTIMONIALS[4], TESTIMONIALS[2]]; 

  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-brand-900 bg-brand-50 rounded-full border border-brand-100">
            Social Proof
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Trusted by founders & engineers
          </h2>
          <p className="text-lg text-gray-600 opacity-90">
            I don't just write code; I build partnerships. Here's what my collaborators have to say about our work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden mask-image-gradient">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
        
        {/* Fade overlay for bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;