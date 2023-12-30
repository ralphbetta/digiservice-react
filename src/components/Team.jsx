import React from 'react'
import { Teams } from '../constants'
import { AppButton } from './AppButton'
import { motion } from 'framer-motion'
import { slideIn, fadeIn } from '../motion';

const Team = () => {
  return (
    <div id='team' className='mt-10 md:mt-20 px-5 lg:px-40 flex space-y-5 flex-col items-center md:flex-row justify-between'>
      <motion.div

        initial={slideIn('right', 1).initial}
        whileInView={slideIn(0, 0).default}
        transition={slideIn('', 1).transition}

        className=' md:w-[40%] flex flex-col space-y-5 -z-40'>
        <h2 className=' font-semibold text-3xl'>Working together, to create something unique</h2>
        <p className=' text-gray-400'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.
        </p>
        {AppButton("Learn More")}
      </motion.div>

      <motion.div

        initial={fadeIn('up').initial}
        whileInView={fadeIn('up').animate}

        className=' md:w-[40%] flex -z-50'>
        <img className=' object-scale-down' src={Teams} alt="" />
      </motion.div>
    </div>
  )
}

export default Team