import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/projects'
import AnimatedSection from './AnimatedSection'

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
    return (
        <AnimatedSection id="skills" className="py-24 md:py-32">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end gap-6 mb-16 border-b border-divider pb-6">
                    <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">02 /</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight">Strength Types</h2>
                </div>

                {/* Skill Blocks */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariants}
                            className="flex flex-col border border-divider bg-card/10 hover:bg-card/30 transition-colors duration-500 rounded-sm"
                        >
                            {/* Card Header */}
                            <div className="p-6 pb-4 border-b border-divider/50">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl grayscale opacity-80">{skill.icon}</span>
                                    <h3 className="font-heading font-bold text-text-primary text-base uppercase tracking-wider">
                                        {skill.category}
                                    </h3>
                                </div>
                            </div>

                            {/* Skills List */}
                            <div className="p-6 pt-4 flex-1">
                                <ul className="flex flex-col gap-3">
                                    {skill.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-text-secondary text-sm font-sans group">
                                            <span className="w-1.5 h-1.5 bg-accent-bronze/50 group-hover:bg-accent-bronze transition-colors flex-shrink-0" />
                                            <span className="group-hover:text-text-primary transition-colors duration-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom note */}
                <div className="mt-16 text-center border-t border-divider pt-8">
                    <p className="text-text-secondary text-xs font-mono tracking-widest uppercase">
                        Strength is Structured.
                    </p>
                </div>
            </div>
        </AnimatedSection>
    )
}
