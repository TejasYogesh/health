import React from 'react'
import { motion } from 'framer-motion'
const Navbar = () => {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <div className='flex justify-between'>
                    <div className='bg-black p-2'>

                        <img src="PragyathaLogo.png" alt="" className='hsm:h-8 md:h-12 lg:h-12 m-4' />

                    </div>
                    <div>
                        <ul className='flex justify-end lg:justify-center m-10 text-white text-md'>
                            <li className='mx-4'>Home</li>
                            <li className='mx-4'> Contact</li>
                            <li className='mx-4'> About</li>
                            <li className='mx-4'>Internet </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
