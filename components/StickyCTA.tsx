import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <a
        href={SOCIAL_LINKS.email}
        className="group flex items-center gap-2 bg-gray-900 hover:bg-brand-600 text-white pl-4 pr-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <Mail size={20} className="group-hover:animate-pulse" />
        <span className="font-medium text-sm">Hire Me</span>
      </a>
    </motion.div>
  );
};

export default StickyCTA;