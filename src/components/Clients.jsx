import React from 'react'
import { Review, icons } from '../constants'

import {
  AiOutlineStar,
  AiFillStar
} from 'react-icons/ai';

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";



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
          <p className=' text-gray-500'>SEO Analyst</p>
        </div>
        <div className=' flex flex-row items-center justify-between text-primary'>

          <div className=' flex flex-row items-center text-primary'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <h3 className=' ml-5 font-semibold text-black'>4.1</h3>
          </div>

          <div className='text-5xl space-x-5 flex flex-row'>
            <button>
              <IoIosArrowDropleft className=' text-gray-300' />
            </button>
            <button>
              <IoIosArrowDropright />
            </button>
          </div>

        </div>
      </div>
      <div className=' md:w-[40%] fle '>
        <img className=' w-96 h-96 object-scale-down' src={Review} alt="" />
      </div>
    </div>
  )
}

export default Clients