import React from 'react'
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion'
const Scroll = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    translateX: scrollYProgress, // Move from left to right
                    height: '10px', // Set a height for visibility
                    backgroundColor: 'white', // Set a color for visibility
                    position: 'fixed', // Position it fixed
                    top: 0, // Align it to the top
                    left: 0,
                    right: 0,
                    zIndex: 1000 // Bring it to the front
                }}
            />
        </div>
    )
}

export default Scroll
