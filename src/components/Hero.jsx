import { HeroImage } from '../constants'
import React from 'react'
import { AppButton } from './AppButton'
import { motion } from 'framer-motion'
import { slideIn } from '../motion';

const Hero = () => {
    return (
        <div className='px-5 pt-6 md:pt-0 lg:px-40 md:h-[50vh] flex flex-col md:flex-row justify-between'>
            {/* Left Hero Item */}
            <motion.div
                initial={slideIn('right', 1).initial}
                whileInView={slideIn(0, 0).default}
                transition={slideIn('', 1).transition}

                className=' md:w-[45%] flex flex-col justify-center space-y-5 -z-50'>
                <div className='flex'>
                    <p className=' text-primary uppercase'>Digital Agency</p>
                    <div className=' w-16 border-primary border-b-2'></div>
                </div>
                <h2 className=' text-4xl md:text-6xl xl:text-7xl font-bold'>Creating you <br /> from <span className='text-primary'> your brand</span></h2>
                <p>Advertising agency is a free profeciency association that works in playing out the assignment of marketing</p>
                {AppButton("Get Started")}
            </motion.div>

            {/* Right Hero Item */}
            <motion.div
                initial={slideIn('up', 1).initial}
                whileInView={slideIn(0, 0).default}
                transition={slideIn('', 1).transition}

                className=' md:w-[45%] flex flex-col justify-center -z-50'>
                <img className=' w-full h-full object-scale-down' src={HeroImage} alt="" />
            </motion.div>
        </div>
    )
}

export default Hero