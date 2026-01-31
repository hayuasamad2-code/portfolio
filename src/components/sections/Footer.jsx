import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 bg-neutral-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-heading font-black tracking-tighter text-white mb-4 block">
                            <span className="text-primary">.</span>
                        </a>
                        <p className="text-neutral-500 max-w-xs">
                            Designing and building high-end digital products that make an impact.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                    <p className="text-sm text-neutral-500">
                        © {currentYear} Hayu Abdusemed. All rights reserved.
                    </p>
                    <p className="text-sm text-neutral-500 flex items-center gap-1.5">
                        Built with <Heart className="w-4 h-4 text-secondary fill-secondary" /> using React & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
