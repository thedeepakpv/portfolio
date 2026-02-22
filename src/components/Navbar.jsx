import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        // IntersectionObserver for scroll-spy
        const sections = document.querySelectorAll('section[id]')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -60% 0px' }
        )
        sections.forEach((s) => observer.observe(s))

        return () => {
            window.removeEventListener('scroll', handleScroll)
            sections.forEach((s) => observer.unobserve(s))
        }
    }, [])

    const handleClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const lenis = globalThis.__lenis
        if (lenis) {
            lenis.scrollTo(href, { offset: -80, duration: 1.2 })
        } else {
            const target = document.querySelector(href)
            if (target) target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => handleClick(e, '#home')}
                    className="text-xl font-heading font-bold text-text-primary tracking-widest cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    DEEPAK
                </motion.a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, href }) => {
                        const sectionId = href.replace('#', '')
                        const isActive = active === sectionId
                        return (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={(e) => handleClick(e, href)}
                                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#A1A1A1] hover:text-white'
                                        }`}
                                >
                                    {label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeLink"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-accent-bronze"
                                        />
                                    )}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* Mobile hamburger */}
                <button
                    id="mobile-menu-btn"
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <ul className="flex flex-col py-4 px-6 gap-4">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleClick(e, href)}
                                        className="text-[#A1A1A1] hover:text-white text-sm font-medium block py-1"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
