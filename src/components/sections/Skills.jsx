import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, FileJson, Zap, Palette, Server } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories } from '../../data/content';

const iconMap = {
    code: Code2,
    layers: Layers,
    'file-json': FileJson,
    zap: Zap,
    palette: Palette,
    server: Server,
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-neutral-900/50">
            <div className="container mx-auto px-6">
                <SectionHeading
                    subtitle="Expertise"
                    title="Skills & Technologies"
                    centered
                />

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                                    {category.category}
                                </h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, index) => {
                                    const Icon = iconMap[skill.icon] || Code2;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="glass-card group"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary-light group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                                            </div>

                                            <div className="relative h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                                />
                                            </div>
                                            <div className="mt-2 text-right">
                                                <span className="text-sm font-medium text-neutral-500">{skill.level}%</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
