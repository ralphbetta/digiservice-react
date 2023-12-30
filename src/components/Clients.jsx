import React from 'react'
import { Review } from '../constants'
import { AppButton } from './AppButton'

const Clients = () => {
  return (
    <div className='mt-10 md:mt-20 px-5 lg:px-40 flex space-y-5 flex-col items-center md:flex-row-reverse justify-between'>
      <div className=' md:w-[40%] flex flex-col space-y-5'>
        <h2 className=' font-semibold text-3xl'>Our Clients Say About Us</h2>
        <p className=' text-gray-400'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
        </p>
        <div>
          <h3 className=' font-semibold'>Kierra  Franci</h3>
          <p className=' text-gray-400'>SEO Analyst</p>
        </div>
        {AppButton("Learn More")}
      </div>
      <div className=' md:w-[40%] flex bg-slate-500'>
        <img className=' w-96 h-96 object-scale-down' src={Review} alt="" />
      </div>
    </div>
  )
}

export default Clients