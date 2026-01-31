import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { experience } from '../../data/content';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-neutral-900/50">
            <div className="container mx-auto px-6">
                <SectionHeading
                    subtitle="Career"
                    title="Professional Journey"
                    centered
                />

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                    <div className="flex flex-col gap-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.company + index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center justify-between md:flex-row flex-col gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 hidden md:block" />

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] glass-card">
                                    <span className="text-primary-light text-sm font-bold uppercase tracking-wider mb-2 block">{item.period}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                                    <div className="flex items-center gap-2 text-neutral-400 mb-4">
                                        <Briefcase className="w-4 h-4" />
                                        <span className="font-medium">{item.company}</span>
                                    </div>
                                    <p className="text-neutral-400 leading-relaxed italic">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Spacer for Desktop */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
