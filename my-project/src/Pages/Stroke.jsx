import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Stroke = () => {
    const nav = useNavigate()
    const handleBack = () => {
        nav(-1);
    }
    return (
        <div className='bg-black h-screen'>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    delay: 1
                }}
                className='text-4xl p-8 font-bold text-blue-400 text-white text-center'>Chapter 01</motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                trans className='text-white text-8xl font-bold text-center p-10'>4th Stroke Engine.</motion.div>
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 2
                }}
                className='text-white mx-14 text-xl'>Overview of Four-Stroke Engines

                A four-stroke engine, also known as a four-cycle engine, is an internal combustion engine that completes four distinct strokes of the piston during one cycle of operation.
                This type of engine is widely used in various applications, including automobiles, motorcycles, and light aircraft.</motion.p>

            <br />
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 3
                }}
                className='text-white mx-14 text-xl'>Overview of Four-Stroke Engines

                A four-stroke engine, also known as a four-cycle engine, is an internal combustion engine that completes four distinct strokes of the piston during one cycle of operation.
                This type of engine is widely used in various applications, including automobiles, motorcycles, and light aircraft.</motion.p>
            <motion.div className='flex'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 2
                }}>
                <div className='py-10'>
                    <a href="src/Pages/08Project-4thStroke/index.html" className='text-black bg-white rounded-xl m-10 p-4'>View More</a>
                </div>
                <div>
                    <button className='text-black bg-white rounded-xl m-6 p-4' onClick={handleBack}>Go Back</button>
                </div>
            </motion.div>
        </div>
    )
}

export default Stroke
