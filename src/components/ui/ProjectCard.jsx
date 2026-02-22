import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, CheckCircle } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group h-full"
        >
            <div className="glass-card h-full overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button variant="primary" className="p-3 rounded-full hover:scale-110 transition-transform">
                            <ExternalLink className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" className="p-3 rounded-full hover:scale-110 transition-transform">
                            <Github className="w-5 h-5" />
                        </Button>
                    </div>
                    {project.status && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full">
                            {project.status}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                    {/* Category Badge */}
                    <div className="mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            {project.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    {/* Role */}
                    {project.role && (
                        <p className="text-sm text-neutral-400 mb-4 font-medium">
                            Role: <span className="text-primary">{project.role}</span>
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                            Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="px-3 py-1 text-xs font-semibold text-neutral-400">
                                    +{project.technologies.length - 4} more
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Expand Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-semibold text-sm mb-4"
                    >
                        {isExpanded ? 'Show Less' : 'View Details'}
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                    </button>

                    {/* Expandable Details */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-white/10 pt-6 mt-6 space-y-6"
                            >
                                {/* Long Description */}
                                <div>
                                    <h4 className="text-sm font-bold text-neutral-300 uppercase tracking-widest mb-2">
                                        About
                                    </h4>
                                    <p className="text-neutral-400 leading-relaxed text-sm">
                                        {project.longDescription}
                                    </p>
                                </div>

                                {/* Features */}
                                {project.features && (
                                    <div>
                                        <h4 className="text-sm font-bold text-neutral-300 uppercase tracking-widest mb-3">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3 text-sm text-neutral-400"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* All Technologies */}
                                {project.technologies.length > 4 && (
                                    <div>
                                        <h4 className="text-sm font-bold text-neutral-300 uppercase tracking-widest mb-3">
                                            All Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/30 rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded text-neutral-400 hover:border-primary/50 hover:text-primary transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
