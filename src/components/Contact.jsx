import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const EMAIL = 'thedeepakpv10@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/deepak-pv-519681298'
const GITHUB = 'https://github.com/thedeepakpv'
const INSTAGRAM = 'https://www.instagram.com/thedeepakpv'

export default function Contact() {
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
            setTimeout(() => setCopied(false), 2500)
        } catch {
            globalThis.location.href = `mailto:${EMAIL}`
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }

    return (
        <AnimatedSection id="contact" className="py-24 md:py-32 bg-card/10">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end gap-6 mb-16 border-b border-divider pb-6">
                    <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">04 /</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight">Connect</h2>
                </div>

                <motion.div 
                    className="flex flex-col md:flex-row gap-16 md:gap-24"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {/* Left: Copy */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
                            Build with <br/><span className="text-accent-bronze">Purpose.</span>
                        </motion.h3>
                        <motion.p variants={itemVariants} className="text-text-secondary font-sans leading-relaxed">
                            I am always open to discussing system architecture, tough engineering problems, or disciplined approaches to growth. If you are building something that matters, let's talk.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-xs text-text-secondary font-mono tracking-widest uppercase mt-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-divider inline-block"></span>
                            Kannur, Kerala
                        </motion.p>
                    </div>

                    {/* Right: Actions */}
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <motion.div variants={itemVariants}>
                            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Direct Inquiry</p>
                            <button
                                onClick={copyEmail}
                                className="group w-full flex items-center justify-between p-4 md:p-6 border border-divider hover:border-text-primary transition-colors bg-card/20 text-left"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-heading font-bold text-text-primary text-lg group-hover:text-accent-bronze transition-colors">
                                        Email
                                    </span>
                                    <span className="font-mono text-sm text-text-secondary">
                                        {EMAIL}
                                    </span>
                                </div>
                                <AnimatePresence mode="wait">
                                    {copied ? (
                                        <motion.span
                                            key="copied"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="text-xs font-mono text-accent-sage uppercase tracking-widest"
                                        >
                                            COPIED
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="copy"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-xs font-mono text-text-secondary group-hover:text-text-primary uppercase tracking-widest transition-colors"
                                        >
                                            COPY
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Network</p>
                            <div className="flex items-center gap-4">
                                {[
                                    { name: 'LinkedIn', url: LINKEDIN, icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                                    { name: 'GitHub', url: GITHUB, icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg> },
                                    { name: 'Instagram', url: INSTAGRAM, icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> }
                                ].map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.name}
                                        className="w-14 h-14 flex items-center justify-center border border-divider hover:border-text-primary bg-card/10 hover:bg-card/40 transition-all text-sm text-text-secondary hover:text-text-primary"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    )
}
