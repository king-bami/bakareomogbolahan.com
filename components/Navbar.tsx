import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto rounded-full bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 px-6 py-3'
                    : 'top-0 left-0 w-full bg-transparent px-6 lg:px-12 py-8'
                    }`}
            >
                <div className={`flex items-center justify-between ${scrolled ? 'gap-8' : 'max-w-[1600px] mx-auto w-full'}`}>

                    {/* Logo */}
                    <a href="#" className="relative group z-50">
                        <span className={`font-black uppercase tracking-tighter transition-all duration-300 flex flex-col leading-none ${scrolled ? 'text-lg text-gray-900' : 'text-xl md:text-2xl text-gray-900'
                            }`}>
                            <span className="block">Omogbolahan</span>
                            <span className={`block ${scrolled ? 'text-xs text-gray-500 font-bold tracking-widest' : 'text-brand-900'}`}>
                                Bakare
                            </span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-2">
                        <div className={`flex items-center ${scrolled ? 'bg-gray-100/50 rounded-full px-2 py-1' : ''}`}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    download={link.download}
                                    className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${scrolled
                                        ? 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                                        : 'text-gray-600 hover:text-brand-900'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className={`
                        flex items-center gap-2 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-full
                        ${scrolled
                                    ? 'bg-gray-900 text-white px-5 py-2.5 hover:bg-brand-600'
                                    : 'bg-white text-gray-900 px-6 py-3 hover:bg-gray-50 shadow-sm border border-gray-100'
                                }
                    `}
                        >
                            Let's Talk <ArrowUpRight size={16} />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-blue-700"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-gray-900 z-40 flex flex-col justify-between p-8 md:p-12"
                    >
                        <div className="flex justify-end">
                            {/* Close button handled by fixed nav toggle */}
                        </div>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    download={link.download}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + (i * 0.1) }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl md:text-7xl font-bold text-transparent text-stroke-white hover:text-white transition-all duration-300 tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl md:text-7xl font-bold text-white tracking-tighter mt-4"
                            >
                                Contact
                            </motion.a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                            <div>
                                <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2">Socials</h4>
                                <div className="flex flex-col gap-2">
                                    <a href={SOCIAL_LINKS.linkedin} className="text-white hover:text-brand-400">LinkedIn</a>
                                    <a href={SOCIAL_LINKS.github} className="text-white hover:text-brand-400">GitHub</a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2">Email</h4>
                                <a href={SOCIAL_LINKS.email} className="text-white hover:text-brand-400 break-words text-sm">contact@bakareomogbolahan.com</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;