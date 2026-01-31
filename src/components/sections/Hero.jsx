import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight, Github, Twitter, Linkedin, Download } from 'lucide-react';
import { heroContent } from '../../data/content';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated Orbit Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-sm font-medium text-primary-light"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-8xl font-heading font-black text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {heroContent.greeting} <br />
                    <span className="text-gradient">{heroContent.name}</span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {heroContent.description}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg gap-2 group">
                        {heroContent.ctaPrimary}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <a href="/Resume.pdf" download="Hayu_Abdusemed_Resume.pdf" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full px-8 py-4 text-lg gap-2 group">
                            Download Resume
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        </Button>
                    </a>
                    <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg">
                        {heroContent.ctaSecondary}
                    </Button>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Github className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
                    <Twitter className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
