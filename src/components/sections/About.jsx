import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { softSkills } from '../../data/content';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                            <img
                                src="/profile.jpg"
                                alt="Hayu Abdusemed"
                                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Decorative background for image */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 blur-2xl -z-10" />
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        <SectionHeading
                            subtitle="About Me"
                            title="Passionate about technology and continuous learning."
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-neutral-400 leading-relaxed"
                        >
                            I am a final-year Computer Science student with a strong interest in software development, databases, and computer networking. Throughout my academic journey, I have gained hands-on experience working on C# projects, system design, and technical documentation.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-neutral-400 leading-relaxed"
                        >
                            I am eager to apply my skills in real-world projects and continuously improve my technical knowledge. My approach combines academic rigor with practical problem-solving, always striving to deliver quality solutions.
                        </motion.p>

                        {/* Soft Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-4"
                        >
                            <h4 className="text-xl font-bold text-white mb-4">Soft Skills</h4>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-white text-sm font-medium hover:scale-105 transition-transform duration-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="grid grid-cols-2 gap-8 mt-4"
                        >
                            <div>
                                <h4 className="text-3xl font-bold text-white">3+</h4>
                                <p className="text-sm text-neutral-500">Academic Projects</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">5+</h4>
                                <p className="text-sm text-neutral-500">Technical Skills</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
