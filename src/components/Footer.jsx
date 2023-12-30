import React from 'react'
import { social } from '../constants'

const Footer = () => {
  return (
   <div>
    <hr className=' border-gray-500' />
     <div className='bg-[#021C23] px-5 lg:px-40 text-gray-500 py-5 flex flex-col md:flex-row space-y-3 justify-center items-center md:justify-between'>
        <p>
            BettaDesign 2024, All Rights Reserved
        </p>
        <div className='flex flex-row items-center space-x-2'>
            <p>Join Our Social Community</p>
            <div className=' flex flex-row space-x-2'>
            {social.map((item)=> item.icon)}
            </div>
        </div>
    </div>
   </div>
  )
}

export default Footer