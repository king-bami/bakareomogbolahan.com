import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [state, handleSubmit] = useForm("xpwvykyv");

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Title
            gsap.fromTo(titleRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );

            // Animate Form Inputs Stagger
            if (formRef.current) {
                const inputs = formRef.current.querySelectorAll('.input-group');
                gsap.fromTo(inputs,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: formRef.current,
                            start: "top 70%",
                        }
                    }
                );
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const parent = e.target.parentElement;
        if (parent) {
            const line = parent.querySelector('.input-line');
            const label = parent.querySelector('.input-label');
            gsap.to(line, { width: '100%', duration: 0.5, ease: 'power3.out' });
            gsap.to(label, { y: -24, scale: 0.8, color: '#0ea5e9', duration: 0.3 });
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const parent = e.target.parentElement;
        if (parent && !e.target.value) {
            const line = parent.querySelector('.input-line');
            const label = parent.querySelector('.input-label');
            gsap.to(line, { width: '0%', duration: 0.5, ease: 'power3.out' });
            gsap.to(label, { y: 0, scale: 1, color: '#9ca3af', duration: 0.3 });
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Content */}
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Let's Connect</span>
                        <h2 ref={titleRef} className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 leading-[0.9] mb-8">
                            LET'S WORK<br />TOGETHER
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-12">
                            I'm currently available for freelance projects and full-time roles.
                            Tell me about your project, and let's bring it to life.
                        </p>
                    </div>

                    <div className="space-y-8 hidden lg:block">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</h4>
                            <a href={SOCIAL_LINKS.email} className="text-2xl font-medium text-gray-900 hover:text-brand-600 transition-colors">
                                contact@bakareomogbolahan.com
                            </a>
                        </div>

                        <div className="flex gap-6">
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 relative">
                    {state.succeeded ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                <ArrowUpRight size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                            <p className="text-gray-600">Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form ref={formRef} className="space-y-12 relative z-10" onSubmit={handleSubmit}>

                            <div className="input-group relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-gray-900 focus:outline-none"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className="input-label absolute left-0 top-4 text-gray-400 text-xl pointer-events-none transition-all origin-left">
                                    Your Name
                                </label>
                                <div className="input-line absolute bottom-0 left-0 h-[2px] bg-brand-600 w-0"></div>
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="input-group relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-gray-900 focus:outline-none"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className="input-label absolute left-0 top-4 text-gray-400 text-xl pointer-events-none transition-all origin-left">
                                    Your Email
                                </label>
                                <div className="input-line absolute bottom-0 left-0 h-[2px] bg-brand-600 w-0"></div>
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="input-group relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-gray-900 focus:outline-none resize-none"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                ></textarea>
                                <label className="input-label absolute left-0 top-4 text-gray-400 text-xl pointer-events-none transition-all origin-left">
                                    Tell me about your project
                                </label>
                                <div className="input-line absolute bottom-0 left-0 h-[2px] bg-brand-600 w-0"></div>
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>

                            <button type="submit" disabled={state.submitting} className="group w-full bg-gray-900 text-white py-6 rounded-xl font-bold text-lg tracking-wide hover:bg-brand-600 transition-colors flex items-center justify-between px-8 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span>{state.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </form>
                    )}

                    {/* Mobile Socials */}
                    <div className="mt-12 lg:hidden space-y-8">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</h4>
                            <a href={SOCIAL_LINKS.email} className="text-xl font-medium text-gray-900 hover:text-brand-600 transition-colors">
                                contact@bakareomogbolahan.com
                            </a>
                        </div>
                        <div className="flex gap-6">
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;