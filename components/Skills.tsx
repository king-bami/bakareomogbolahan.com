import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const Skills: React.FC = () => {
    // Transform data for chart
    const data = SKILLS.map(s => ({
        name: s.category,
        level: s.level,
        color: '#0ea5e9'
    }));

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
                <p className="text-gray-600 mb-8">
                    My sweet spot is at the intersection of leadership and engineering. 
                    I don't just write code; I build systems, lead teams, and drive product strategy.
                </p>
                
                <div className="space-y-6">
                    {SKILLS.map((skill, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-gray-900 mb-2">{skill.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map(item => (
                                    <span key={item} className="px-3 py-1 text-sm bg-white border border-gray-200 rounded text-gray-700">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-[300px] w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
                 <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">Proficiency Distribution</h4>
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis type="number" hide domain={[0, 100]} />
                        <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 12}} />
                        <Tooltip 
                            cursor={{fill: 'transparent'}}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                        />
                        <Bar 
                            dataKey="level" 
                            barSize={20} 
                            radius={[0, 4, 4, 0]}
                            animationDuration={1500}
                            animationEasing="ease-out"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0ea5e9' : '#0c4a6e'} />
                            ))}
                        </Bar>
                    </BarChart>
                 </ResponsiveContainer>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;