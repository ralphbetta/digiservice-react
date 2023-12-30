import React from 'react'
import { brands } from '../constants'
import { motion } from 'framer-motion'
import { slideIn } from '../motion';


const Brand = () => {



    return (
        <div id='feature' className='mx-5 lg:mx-40 my-20'>

            <div

                className='grid grid-cols-3 md:grid-cols-5 gap-6 items-center md:gap-14 xlg:gap-16'>

                {brands.map((brand, index) =>
                    <motion.div
                        
                        initial={slideIn('right', 1).initial}
                        whileInView={slideIn(0, 0).default}
                        transition={slideIn('', index).transition}

                        className='' key={index}>
                        <img className='' src={brand.img} alt="" />
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Brand