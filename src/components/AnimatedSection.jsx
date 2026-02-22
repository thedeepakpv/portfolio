import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedSection({ children, className = '', id = '' }) {
    return (
        <motion.section
            id={id}
            className={`section-padding snap-start ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom calm easing
            }}
        >
            {children}
        </motion.section>
    )
}
