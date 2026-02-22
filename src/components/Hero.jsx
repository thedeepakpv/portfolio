import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
    const handleScroll = (e, href) => {
        e.preventDefault()
        const lenis = globalThis.__lenis
        if (lenis) {
            lenis.scrollTo(href, { offset: -80, duration: 1.2 })
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-radial-vignette snap-start"
        >
            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight tracking-tight text-text-primary"
                >
                    Engineer the Mind.<br />
                    Train the Body.
                </motion.h1>

                {/* Subtitle */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
                        I build systems the way I train — <span className="text-text-primary font-medium">structured</span>, <span className="text-text-primary font-medium">intentional</span>, and <span className="text-text-primary font-medium">relentless</span>.
                    </p>
                    <span className="inline-block relative px-5 py-2 text-xs font-mono text-text-secondary tracking-widest uppercase border-l-2 border-accent-bronze">
                        Discipline • Depth • Development
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mt-6">
                    <motion.a
                        href="#projects"
                        onClick={(e) => handleScroll(e, '#projects')}
                        id="hero-view-work"
                        className="relative px-8 py-3.5 font-sans font-semibold text-sm text-bg bg-text-primary border border-transparent transition-all duration-300 hover:bg-transparent hover:border-text-primary hover:text-text-primary"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Training Log
                    </motion.a>

                    <motion.a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        id="hero-contact"
                        className="px-8 py-3.5 font-sans font-semibold text-sm text-text-primary border border-divider hover:border-accent-bronze hover:text-accent-bronze transition-all duration-300"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex flex-col items-center gap-3 text-text-secondary cursor-pointer"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    onClick={(e) => handleScroll(e, '#about')}
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    )
}
