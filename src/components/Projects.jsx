import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import AnimatedSection from './AnimatedSection'

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.25 } }
}

const CATEGORIES = [
    { key: 'ALL', label: 'All Operations' },
    { key: 'AI/ML', label: 'AI/ML & Data' },
    { key: 'Full-Stack', label: 'Full-Stack' },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'Mobile', label: 'Mobile' },
]

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')
    const [expandedProjects, setExpandedProjects] = useState({})

    const toggleExpand = (id) => {
        setExpandedProjects(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const filteredProjects = selectedCategory === 'ALL'
        ? projects
        : projects.filter(p => p.filterCategory === selectedCategory)

    const getStatusBadge = (statusType, status) => {
        switch (statusType) {
            case 'prototype':
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-amber-500/30 bg-amber-500/10 text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {status}
                    </span>
                )
            case 'academic':
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {status}
                    </span>
                )
            case 'completed':
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-sage/30 bg-accent-sage/10 text-accent-sage">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
                        {status}
                    </span>
                )
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-bronze/30 bg-accent-bronze/10 text-accent-bronze">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-bronze" />
                        {status}
                    </span>
                )
        }
    }

    return (
        <AnimatedSection id="projects" className="py-24 md:py-32">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-divider pb-6">
                    <div className="flex items-end gap-6">
                        <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">03 /</span>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight">
                                Training Log
                            </h2>
                            <p className="text-xs font-mono text-text-secondary tracking-widest uppercase mt-2">
                                Proven Systems • Architectures • Technical Implementations
                            </p>
                        </div>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
                        {CATEGORIES.map(cat => {
                            const isActive = selectedCategory === cat.key
                            const count = cat.key === 'ALL'
                                ? projects.length
                                : projects.filter(p => p.filterCategory === cat.key).length

                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${
                                        isActive
                                            ? 'border-accent-bronze text-text-primary bg-card/60'
                                            : 'border-divider text-text-secondary hover:text-text-primary hover:border-divider/80 bg-card/10'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span className="ml-1.5 text-[10px] text-text-secondary/70">
                                        ({count})
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Training Log List */}
                <motion.div 
                    layout
                    className="flex flex-col gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const isExpanded = expandedProjects[project.id] ?? true

                            return (
                                <motion.article
                                    layout
                                    key={project.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="group relative flex flex-col p-6 md:p-8 border border-divider hover:border-divider/80 bg-card/15 hover:bg-card/30 transition-all duration-500 rounded-sm"
                                >
                                    {/* Top Status & Index Bar */}
                                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-divider/60">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono text-accent-bronze tracking-widest uppercase font-semibold">
                                                LOG // {project.index}
                                            </span>
                                            <span className="text-xs font-mono text-divider">|</span>
                                            <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {getStatusBadge(project.statusType, project.status)}
                                        </div>
                                    </div>

                                    {/* Main Body */}
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                        {/* Left Side: Title & Tech */}
                                        <div className="md:w-5/12 flex flex-col gap-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-3xl select-none grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                                                    {project.emoji}
                                                </span>
                                                <div className="flex flex-col">
                                                    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-text-primary tracking-tight group-hover:text-white transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    {project.subtitle && (
                                                        <span className="text-xs font-sans text-accent-bronze/90 tracking-wide mt-1">
                                                            {project.subtitle}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Tech Stack Chips */}
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.tech.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] md:text-xs px-2.5 py-1 bg-divider/30 hover:bg-divider/60 text-text-secondary hover:text-text-primary font-mono border border-divider rounded-sm uppercase tracking-wider transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: Description & Feature Highlights */}
                                        <div className="md:w-7/12 flex flex-col gap-5 border-t md:border-t-0 md:border-l border-divider/60 pt-5 md:pt-0 md:pl-8">
                                            <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans">
                                                {project.description}
                                            </p>

                                            {/* Architectural Highlights */}
                                            {project.features && project.features.length > 0 && (
                                                <div className="pt-2">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-xs font-mono uppercase tracking-widest text-text-primary flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-accent-bronze" />
                                                            Key Architecture & Highlights
                                                        </span>
                                                        <button
                                                            onClick={() => toggleExpand(project.id)}
                                                            className="text-[11px] font-mono text-text-secondary hover:text-accent-bronze transition-colors uppercase tracking-wider"
                                                        >
                                                            {isExpanded ? 'Collapse [-]' : 'Expand [+]'}
                                                        </button>
                                                    </div>

                                                    <AnimatePresence initial={false}>
                                                        {isExpanded && (
                                                            <motion.ul
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="space-y-2 overflow-hidden border-l border-divider/50 pl-4 py-1"
                                                            >
                                                                {project.features.map((feature, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="text-xs md:text-sm text-text-secondary/90 leading-relaxed font-sans flex items-start gap-2.5 group/item"
                                                                    >
                                                                        <span className="text-accent-bronze text-xs mt-0.5 select-none font-mono">▪</span>
                                                                        <span className="group-hover/item:text-text-primary transition-colors">
                                                                            {feature}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </motion.ul>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            )}

                                            {/* Action Links & Context Note */}
                                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-divider/50 mt-2">
                                                <div className="flex items-center gap-6">
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

                                                {project.note && (
                                                    <span className="text-[10px] font-mono text-text-secondary/70 uppercase tracking-widest bg-divider/20 px-2 py-0.5 border border-divider/40">
                                                        {project.note}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </AnimatedSection>
    )
}
