import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-brand-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
                {/* Mobile line connection */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 md:hidden"></div>
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-500 md:hidden"></div>

              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Date Column */}
                <div className="hidden md:block md:col-span-3 text-right pt-1">
                   <div className="text-sm font-semibold text-gray-500 flex items-center justify-end gap-2">
                       {exp.period}
                   </div>
                   <div className="text-xs text-gray-400 mt-1">{exp.location}</div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-9">
                    {/* Mobile Date */}
                    <div className="md:hidden flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar size={14} /> {exp.period}
                    </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role} <span className="text-brand-600 font-normal">@ {exp.company}</span>
                    </h3>
                    {exp.link && (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-gray-500 hover:text-brand-600 mt-1 sm:mt-0">
                            Visit <ExternalLink size={14} className="ml-1" />
                        </a>
                    )}
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 mb-4 text-sm sm:text-base">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-brand-900 bg-brand-50 rounded-full border border-brand-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;