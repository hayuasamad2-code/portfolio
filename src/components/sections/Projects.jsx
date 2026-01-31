import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/content';
import Button from '../ui/Button';

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    subtitle="Selected Work"
                    title="Crafting Digital Reality"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="glass-card h-full overflow-hidden flex flex-col p-0">
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button variant="primary" className="p-3 rounded-full">
                                            <ExternalLink className="w-5 h-5" />
                                        </Button>
                                        <Button variant="outline" className="p-3 rounded-full">
                                            <Github className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded text-neutral-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" className="px-10 py-4">
                        See All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
