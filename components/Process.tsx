import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Layers, Rocket } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        description: "I start by understanding the core problem. Who are the users? What are the business goals? This phase is about gathering requirements and defining technical feasibility.",
        icon: <Search size={28} className="text-white" />
    },
    {
        id: "02",
        title: "Architecture & Design",
        description: "Designing scalable systems. I select the right stack (Next.js, Supabase, etc.) and map out data flows, API structures, and UI/UX patterns before writing a line of code.",
        icon: <Compass size={28} className="text-white" />
    },
    {
        id: "03",
        title: "Development",
        description: "Building with precision. I write clean, maintainable, and type-safe code. This phase includes rigorous testing, component creation, and backend integration.",
        icon: <Layers size={28} className="text-white" />
    },
    {
        id: "04",
        title: "Deploy & Scale",
        description: "Launching to production. I set up CI/CD pipelines, monitor performance metrics, and optimize for speed and SEO. I ensure the product can handle growth.",
        icon: <Rocket size={28} className="text-white" />
    }
];

const Process: React.FC = () => {
    return (
        <section id="process" className="bg-gray-900 text-white py-24 md:py-32 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4 block">My Methodology</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        HOW I BUILD<br />WORLD-CLASS SOFTWARE
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group"
                        >
                            {/* Connector Line (Desktop) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gray-800 -translate-x-8 z-0"></div>
                            )}

                            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl h-full hover:bg-gray-800 transition-colors duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-900/50 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <span className="text-6xl font-black text-gray-800 absolute top-4 right-6 select-none opacity-50 group-hover:text-gray-700 transition-colors">
                                    {step.id}
                                </span>
                                <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default Process;