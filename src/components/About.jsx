import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
    return (
        <AnimatedSection id="about" className="py-24 md:py-32 bg-card/20">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end gap-6 mb-16 border-b border-divider pb-6">
                    <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">01 /</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight">Identity</h2>
                </div>

                <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
                    {/* Left: Avatar & Title */}
                    <motion.div
                        className="md:col-span-5 flex flex-col gap-6"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        <motion.div variants={itemVariants} className="relative w-full aspect-square rounded-sm overflow-hidden border border-divider">
                            <img
                                src="/profile.jpg"
                                alt="Deepak P V"
                                className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-bg/20 mix-blend-multiply pointer-events-none" />
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex flex-col gap-2 border-l border-accent-bronze pl-4">
                            <h3 className="text-xl font-heading font-bold text-text-primary">Deepak P V</h3>
                            <p className="text-sm font-mono text-text-secondary uppercase tracking-widest">
                                Kannur, Kerala
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        className="md:col-span-7 space-y-12"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {/* Statement */}
                        <motion.div variants={itemVariants} className="relative">
                            <blockquote className="text-xl md:text-2xl font-light text-text-primary leading-relaxed">
                                "I am a CS undergrad obsessed with building things that matter. I approach software the way I approach fitness—with <span className="font-semibold">discipline</span>, <span className="font-semibold">consistency</span>, and <span className="font-semibold">purpose</span>."
                            </blockquote>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6 text-text-secondary text-base md:text-lg font-sans leading-loose border-l border-divider pl-6">
                            <p>
                                I don't just write code; I design systems. Whether it's a mobile app, a complex backend API, or a clean user interface, I believe in creating architecture that is as robust as it is elegant.
                            </p>
                            <p>
                                My journey is driven by a genuine curiosity about how things work. 
                                Beyond syntax and frameworks, I look for the underlying principles—applying philosophical depth to engineering problems and maintaining physical rigor to ensure mental clarity.
                            </p>
                        </motion.div>

                        {/* Principles */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-divider">
                            <div>
                                <span className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Approach</span>
                                <p className="text-text-primary font-medium text-sm">Pragmatic. Focused. Scalable.</p>
                            </div>
                            <div>
                                <span className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Driven By</span>
                                <p className="text-text-primary font-medium text-sm">Clarity, growth, and purposeful living.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    )
}
