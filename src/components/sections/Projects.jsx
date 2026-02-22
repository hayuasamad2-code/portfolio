import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/content';
import Button from '../ui/Button';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    subtitle="Selected Work"
                    title="Crafting Digital Reality"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
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
