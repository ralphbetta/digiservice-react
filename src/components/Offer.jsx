import React from 'react'
import { offers } from '../constants'

const Offer = () => {
  return (
    <div className='px-5 lg:px-40 mt-10 md:mt-24'>
        <h1 className=' text-center font-semibold text-3xl'>What About the Agency</h1>
        <p className=' text-center text-gray-400 mt-3'>A place where ideas grow. So. For the purpose, choose catchy</p>

        <div className=' flex flex-col md:flex-row md:space-x-8 mt-12'>
            {offers.map((offer, index)=>
             <div className='bg-white shadow-md md:shadow-xl hover:scale-105 hover:shadow-lg -z-50 transition-all duration-500 cursor-pointer p-8 my-5 flex flex-col space-y-5 rounded-md' key={index}>
                <img className=' h-8 w-8' src={offer.image} alt="" />
                <h2 className=' font-semibold'>{offer.title}</h2>
                <p className=' text-sm text-gray-400'>{offer.description}</p>
            </div>)}
        </div>
    </div>
  )
}

export default Offer