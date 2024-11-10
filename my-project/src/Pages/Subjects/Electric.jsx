import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Electric = () => {
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
                className='text-4xl p-8 font-bold text-blue-400 text-center'>Chapter 03</motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                trans className='text-white text-8xl font-bold text-center p-10'>Electric Circuit</motion.div>
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 2
                }}
                className='text-white mx-14 text-xl'>Electric Circuit
                system, also known as the urinary system, is responsible for
                the elimination of waste products from the body and the
                regulation of water and electrolyte balance. Here’s a
                comprehensive overview of
                its structure, functions, and importance:</motion.p>

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
                <div className='py-10 px-4'>
                   <a href="src/Pages/11Project/index.html" className='bg-white rounded-xl m-6 p-4'>View More</a>
                </div>
                <div>
                    <button className='text-black bg-white rounded-xl m-6 p-4' onClick={handleBack}>Go Back</button>
                </div>
            </motion.div>
        </div>
    )
}

export default Electric;
