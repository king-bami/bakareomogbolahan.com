import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-6">Let's Build Something Great</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="flex justify-center gap-6 mb-8">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-brand-600 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-brand-600 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href={SOCIAL_LINKS.email} className="p-3 bg-gray-800 rounded-full hover:bg-brand-600 transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Omogbolahan Bakare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;