import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, ArrowUpRight, Award } from 'lucide-react';
import me2Image from '../me.jpg';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">

                    {/* Editorial Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[3/4] rounded-none overflow-hidden bg-gray-200">
                            <img
                                src={me2Image}
                                alt="Coding Workspace"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-lg font-bold italic">
                                    "Code is just the tool. Impact is the goal."
                                </p>
                            </div>
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/10 z-0 -rotate-6"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="flex items-center gap-4 mb-6 overflow-hidden">
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="h-[1px] w-12 bg-gray-300 origin-left"
                            ></motion.span>
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-sm font-bold uppercase tracking-widest text-brand-600"
                            >The Story</motion.span>
                        </div>

                        <div className="overflow-hidden mb-8">
                            <motion.h2
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                            >
                                More than just a <br />
                                <span className="text-black text-stroke-2 text-gray-900">Senior Engineer</span>.
                            </motion.h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                My journey began with a curiosity for how things work, which quickly evolved into a passion for building systems that work <i>better</i>.
                            </p>
                            <p>
                                As the <strong className="text-gray-900">Ex-Founder & CTO of Attenda Africa</strong>, I didn't just write code; I navigated the complexities of product-market fit, user acquisition, and scaling infrastructure to support thousands of active users nationwide. This entrepreneurial experience gives me a unique edge—I build software with the business outcome in mind.
                            </p>
                            <p>
                                When I'm not architecting cloud-native solutions, I'm deeply invested in the tech community. From being a Google Open Source Mentee to mentoring the next generation of developers, I believe in lifting others as we climb.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-12">
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 mb-1">Founder</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Mindset</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 mb-1">Global</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Perspective</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Community Impact Section - Case Study Style */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gray-900 rounded-[2rem] p-8 md:p-16 overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold mb-6 tracking-wider">
                                COMMUNITY LEADERSHIP
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Empowering 200+ Youths through Tech.
                            </h3>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                As the <strong>President of the NYSC CDS Charity Group</strong> (Abeokuta North), I initiated and executed a major digital skills program.
                                By securing partnerships with <strong>Crescent University</strong> and <strong>SQI College of ICT</strong>, we bridged the digital divide for over 200 students.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="text-brand-400" size={24} />
                                        <span className="text-2xl font-bold text-white">200+</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Beneficiaries trained in Web Dev & Digital Literacy</p>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building className="text-green-400" size={24} />
                                        <span className="text-xl font-bold text-white">2 Top</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Institutions Partnered (Crescent & SQI)</p>
                                </div>
                            </div>

                            <a
                                href="https://www.linkedin.com/posts/omogbolahan-i-bakare-8a0741293_techforgood-empowermentthrougheducation-nysc-activity-7307885717475487744-fzv7"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-400 transition-colors group"
                            >
                                Read Impact Report on LinkedIn <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </a>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-600 blur-[100px] opacity-20"></div>
                            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                                <Award className="text-yellow-400 mb-6" size={48} />
                                <h4 className="text-xl font-bold text-white mb-4">Why This Matters</h4>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    "This initiative reflects my belief that technology is a tool for empowerment. As both a tech founder and community leader, I am committed to using my skills to create impactful programs that uplift youth and build stronger, tech-driven communities."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">OB</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Omogbolahan Bakare</div>
                                        <div className="text-gray-500 text-xs">NYSC CDS President</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;