import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import Login from './Login';
import { useNavigate } from 'react-router-dom';
const First = () => {
    const navigate = useNavigate();
    const handleFunction =()=>{
        navigate("/login")
    }
    return (
        <div>
            
           <div className='grid grid-cols-2'>
            <div>
            <motion.div className='text-8xl text-white'> <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Introducing")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("CERT-IQ")
                        .start();
                }}
            /></motion.div>
            <motion.div className='text-md text-white my-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 3 }}>Designed to make
                learning efficient, accessible, and enjoyable, this system fosters
                a deeper understanding of concepts and helps students build
                skills that are essential for success in the modern world.</motion.div>
            <motion.div className='text-md text-white'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 5 }}>An Innovative way to learn new things and 
                    improve your learning ability</motion.div>
                    <button className='bg-white px-6 py-4 my-8 rounded-xl' onClick={handleFunction}>Login</button>
                    <button className='bg-white px-6 py-4 my-8 mx-4 rounded-xl'>Register</button>
                    {/* <button>Register</button> */}
            </div>
            <div className='bg-white h-[85vh] rounded-[50px]'>
                Hello
            </div>
           </div>
        </div>
    )
}

export default First
