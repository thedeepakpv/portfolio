import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,            // Smoothness factor
            wheelMultiplier: 1,
            touchMultiplier: 1.2,
            infinite: false,
            autoResize: true,
        })

        // Expose lenis globally for navigation
        globalThis.__lenis = lenis

        let rafId
        function raf(time) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

        // --- Custom Scroll Snap Implementation ---
        let isMoving = false
        let snapTimeout = null

        const handleSnap = () => {
            if (isMoving) return

            const sections = document.querySelectorAll('section, footer')
            let closestSection = null
            let minDistance = Infinity

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                const distance = Math.abs(rect.top)
                if (distance < minDistance) {
                    minDistance = distance
                    closestSection = section
                }
            })

            if (closestSection && minDistance < window.innerHeight / 3) {
                lenis.scrollTo(closestSection, {
                    offset: 0,
                    duration: 0.8,
                    easing: (t) => Math.min(1, 1.001 * t * (2 - t)), // Custom ease
                })
            }
        }

        lenis.on('scroll', () => {
            isMoving = true
            clearTimeout(snapTimeout)
            snapTimeout = setTimeout(() => {
                isMoving = false
                handleSnap()
            }, 150) // Debounce snap to wait for scroll end
        })

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
            globalThis.__lenis = null
            clearTimeout(snapTimeout)
        }
    }, [])

    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
