import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, Lock, ShieldCheck, MapPin, Brain, Activity, Zap, Database, Globe, Award, Banknote, Cloud, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { cn } from '../lib/utils';
import { GeoAnimation, AiSearchAnimation, VotingAnimation, LogisticsAnimation } from './ProjectCardAnimations';

interface ProjectVideoProps {
    src: string;
    className?: string;
    objectFit?: "cover" | "contain";
}

const ProjectVideo: React.FC<ProjectVideoProps> = ({ src, className, objectFit = "cover" }) => {
    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-gray-900 flex items-center justify-center", className)}>
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className={cn(
                    "w-full h-full",
                    objectFit === "cover" ? "object-cover" : "object-contain"
                )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
        </div>
    );
};

const Projects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="projects" className="py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden">
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-2 mb-2"
                        >
                            <span className="h-[2px] w-8 bg-brand-600"></span>
                            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Selected Work</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.9]"
                        >
                            ENGINEERING<br />EXCELLENCE
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-600 max-w-lg pb-2 leading-relaxed"
                    >
                        From 0-to-1 startups to complex enterprise systems. I build the critical infrastructure that big companies rely on.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Project 0: ParcelTrack - Full Width Enterprise Card */}
                    <motion.div
                        className="md:col-span-3"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <a
                            href="https://www.parceltrack.store/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200"
                        >
                            <div className="bg-[#0f172a] rounded-[1.5rem] h-full p-8 md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden relative">
                                <div className="flex-1 flex flex-col justify-between relative z-10">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold mb-6 tracking-wider">
                                            ENTERPRISE • LOGISTICS
                                        </div>
                                        <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">ParcelTrack</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-xl">
                                            Enterprise-grade dispatch platform with real-time global tracking. Architected with Supabase RLS & RBAC for strict banking-level data isolation.
                                        </p>

                                        {/* Technical Highlights */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                                                <ShieldCheck size={20} className="text-green-400 mt-1" />
                                                <div>
                                                    <h4 className="text-white text-xs font-bold uppercase mb-1">Row Level Security</h4>
                                                    <p className="text-gray-500 text-xs">Strict PostgreSQL policies isolating customer data.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                                                <Globe size={20} className="text-blue-400 mt-1" />
                                                <div>
                                                    <h4 className="text-white text-xs font-bold uppercase mb-1">Real-Time Engine</h4>
                                                    <p className="text-gray-500 text-xs">Live route updates via react-simple-maps.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                                                <Database size={20} className="text-purple-400 mt-1" />
                                                <div>
                                                    <h4 className="text-white text-xs font-bold uppercase mb-1">SQL Automation</h4>
                                                    <p className="text-gray-500 text-xs">Triggers & Functions handling timeline propagation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-white font-bold tracking-wide group-hover:gap-3 transition-all">
                                        VIEW CASE STUDY <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>

                                {/* Visual - Expanded Landscape View */}
                                <motion.div
                                    className="w-full lg:flex-[1.4] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 relative"
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-5 gap-2.5 z-20 border-b border-slate-700">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60 shadow-inner"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60 shadow-inner"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/60 shadow-inner"></div>
                                    </div>
                                    <div className="mt-8 h-full bg-[#0a0a0a] flex items-center justify-center">
                                        <ProjectVideo src="/previews/parceltrack.mp4" objectFit="contain" className="scale-[1.01] shadow-2xl shadow-blue-500/10" />
                                    </div>
                                </motion.div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Project 1: Attenda - Large Card (Span 2 cols on md) */}
                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <a
                            href="https://attenda.africa"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200"
                        >
                            <div className="bg-gray-900 rounded-[1.5rem] h-full p-8 md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden relative">
                                <div className="flex-1 flex flex-col justify-between relative z-10">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold mb-6 tracking-wider">
                                            GOVTECH • SAAS
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">Attenda Africa</h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            Nationwide geo-attendance platform. Adopted by a government organisation (NDA). Raised over $10k in funding & received AWS cloud credits.
                                        </p>

                                        {/* Key Achievements */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-[10px] font-bold border border-yellow-500/30">
                                                <Award size={12} /> GOVT ADOPTED
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-300 text-[10px] font-bold border border-green-500/30">
                                                <Banknote size={12} /> $10K+ RAISED
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-orange-500/20 text-orange-300 text-[10px] font-bold border border-orange-500/30">
                                                <Cloud size={12} /> AWS CREDITS
                                            </span>
                                        </div>

                                        {/* Technical Highlights */}
                                        <div className="space-y-3 mb-6 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                            <div className="flex items-start gap-3">
                                                <MapPin size={16} className="text-green-400 mt-1" />
                                                <div>
                                                    <h4 className="text-white text-xs font-bold uppercase">Smart Geo-Fencing</h4>
                                                    <p className="text-gray-500 text-xs">Verifies user GPS coordinates against venue boundaries.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ShieldCheck size={16} className="text-brand-400 mt-1" />
                                                <div>
                                                    <h4 className="text-white text-xs font-bold uppercase">Liveness Detection</h4>
                                                    <p className="text-gray-500 text-xs">AI prevents spoofing via static images or videos.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-white/50 font-bold tracking-widest text-[10px] uppercase">
                                        Case Study: Government Acquisition
                                    </div>
                                </div>

                                {/* Restricted Visual - Premium NDA Interaction */}
                                <motion.div
                                    className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gradient-to-br from-[#0f172a] via-black to-[#0f172a] relative flex flex-col items-center justify-center p-10 text-center"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Glassmorphism Background Pattern */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                                    <div className="relative z-10 mb-8 w-full flex flex-col items-center">
                                        <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 mb-6 shadow-2xl">
                                            <Lock size={32} className="text-white/80" />
                                        </div>
                                        <h4 className="text-white text-xs font-black tracking-widest uppercase mb-4 px-3 py-1 bg-white/5 rounded border border-white/10">
                                            Confidential Government Asset
                                        </h4>
                                        <p className="text-gray-400 text-[11px] leading-relaxed max-w-[280px]">
                                            This platform was successfully acquired and is in national deployment.
                                            <span className="block mt-3 text-brand-300 font-medium">Detailed architecture and development processes can only be shared in private, secure discussions.</span>
                                        </p>
                                    </div>

                                    <a
                                        href={SOCIAL_LINKS.email}
                                        className="relative z-10 px-8 py-3 bg-white text-gray-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
                                    >
                                        Inquire for Private Discussion
                                    </a>
                                </motion.div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Project 2: Seamless - Tall Card */}
                    <motion.div
                        className="md:col-span-1"
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ y }}
                    >
                        <a
                            href="https://seamlesssautopart.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 h-full"
                        >
                            <div className="bg-gray-50 rounded-[1.5rem] h-full p-8 flex flex-col">
                                <div className="flex-1">
                                    <div className="w-full aspect-square bg-white rounded-xl mb-8 overflow-hidden border border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-500">
                                        <ProjectVideo src="/previews/seamless.mp4" />
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4 tracking-wider">
                                        E-COMMERCE • AI
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Seamless Autoparts</h3>

                                    {/* Feature Highlight */}
                                    <div className="mb-4 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                        <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                                            <Brain size={14} className="text-purple-600" /> Contextual AI Search
                                        </div>
                                        <p className="text-[11px] text-gray-500">
                                            Uses vector embeddings to understand vague queries like "brake pads for 2010 camry".
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        AI-driven marketplace increasing conversion by 30%.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Project 3: Afrisata - Standard Card */}
                    <motion.div
                        className="md:col-span-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <a
                            href="https://afrisata.com"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 h-full"
                        >
                            <div className="bg-gray-900 rounded-[1.5rem] h-full p-8 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="w-full aspect-video bg-gray-800 rounded-xl mb-6 overflow-hidden relative border border-gray-700 group-hover:scale-105 transition-transform duration-500">
                                    <ProjectVideo src="/previews/afrisata.mp4" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold mb-4 tracking-wider">
                                        EVENT TECH
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Afrisata Awards</h3>

                                    {/* Feature Highlight */}
                                    <div className="mb-4 bg-gray-800/80 p-3 rounded-lg border border-gray-700 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                                            <Activity size={14} className="text-brand-400" /> High-Load Concurrency
                                        </div>
                                        <p className="text-[11px] text-gray-400">
                                            Optimized locking mechanisms handling 10k+ votes/sec without race conditions.
                                        </p>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Secure voting platform handling 10k+ requests with zero downtime.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Project 4: Sunrise - Wide */}
                    <motion.div
                        className="md:col-span-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <a
                            href="https://sunrisewaterpark.com"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 h-full"
                        >
                            <div className="bg-brand-50 rounded-[1.5rem] p-8 h-full flex flex-col relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-900 text-xs font-bold mb-4 tracking-wider border border-brand-100">
                                        HOSPITALITY
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunrise Water Park</h3>

                                    {/* Feature Highlight */}
                                    <div className="mb-4 bg-white p-3 rounded-lg border border-brand-100 shadow-sm">
                                        <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                                            <Zap size={14} className="text-green-600" /> Core Web Vitals
                                        </div>
                                        <p className="text-[11px] text-gray-500">
                                            Perfect 100/100 Lighthouse score via edge caching and image optimization.
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">High-performance booking platform.</p>
                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-900 shadow-sm group-hover:scale-110 transition-transform">
                                        <ExternalLink size={18} />
                                    </div>
                                    <div className="w-32 h-20 rounded-lg overflow-hidden border border-brand-100 shadow-sm scale-110 transform translate-x-4">
                                        <ProjectVideo src="/previews/sunrise.mp4" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* NDA / Enterprise Card - New */}
                    <motion.div
                        className="md:col-span-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="block bg-white rounded-[2rem] p-2 shadow-sm border border-gray-200 h-full cursor-default">
                            <div className="bg-gray-900 rounded-[1.5rem] p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Abstract Pattern */}
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-700/50 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold tracking-wider">
                                            ENTERPRISE
                                        </div>
                                        <Lock size={16} className="text-gray-500" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">Confidential Work</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        I've architected core banking infrastructure and government compliance systems under strict NDAs.
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-xs text-gray-300 font-mono bg-gray-800/50 p-2 rounded">
                                            <ShieldCheck size={14} className="text-green-400" /> Fintech / Banking Core
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-300 font-mono bg-gray-800/50 p-2 rounded">
                                            <ShieldCheck size={14} className="text-green-400" /> Large Scale SaaS
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-800">
                                    <p className="text-xs text-gray-500 italic">
                                        *Specific details available for discussion during interviews.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Projects;