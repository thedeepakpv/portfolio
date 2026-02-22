import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import AnimatedSection from './AnimatedSection'

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
    return (
        <AnimatedSection id="projects" className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end gap-6 mb-16 border-b border-divider pb-6">
                    <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">03 /</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight">Training Log</h2>
                </div>

                {/* Training Log List */}
                <motion.div 
                    className="flex flex-col gap-10"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            variants={itemVariants}
                            className="group relative flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-8 border border-divider bg-card/10 hover:bg-card/30 transition-colors duration-500 rounded-sm"
                        >
                            {/* Project Header (Left side on desktop) */}
                            <div className="md:w-1/3 flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-300">{project.emoji}</span>
                                    <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] md:text-xs px-2 py-1 bg-divider/30 text-text-secondary font-mono border border-divider rounded-sm uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Details (Right side on desktop) */}
                            <div className="md:w-2/3 flex flex-col gap-6 justify-between border-t md:border-t-0 md:border-l border-divider pt-6 md:pt-0 md:pl-8">
                                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans">
                                    {project.description}
                                </p>
                                
                                {/* Action Links */}
                                <div className="flex items-center gap-6 pt-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-mono text-text-secondary hover:text-text-primary uppercase tracking-widest transition-colors flex items-center gap-2 group/link"
                                    >
                                        <span className="w-0 overflow-hidden group-hover/link:w-3 border-t border-text-primary transition-all duration-300" />
                                        Repository
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-mono text-text-secondary hover:text-accent-bronze uppercase tracking-widest transition-colors flex items-center gap-2 group/link"
                                        >
                                            <span className="w-0 overflow-hidden group-hover/link:w-3 border-t border-accent-bronze transition-all duration-300" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    )
}
