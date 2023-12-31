import React from 'react';
import { Review, icons } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '../motion';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import {
  AiOutlineStar,
  AiFillStar
} from 'react-icons/ai';

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";



const Clients = () => {


  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.activeIndex)
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrev = () => {


    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.activeIndex)
      swiperRef.current.swiper.slidePrev();

    }
  };

  const data = [
    {
      content: "  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      rating: 4.2,
    },
    {
      content: "  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      rating: 3.0,
    },
    {
      content: "  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      rating: 4.1,
    }
  ];

  return (
    <div className='mt-10 md:mt-20 px-5 lg:px-40 flex space-y-5 flex-col items-center md:flex-row-reverse justify-between'>

      <div className='w-full md:w-1/2'>

        <h2 className=' font-semibold text-3xl'>Our Clients Say About Us</h2>

        <Swiper
          ref={swiperRef}
          // navigation={{ hidden: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {
            data.map((item, index) =>

              <SwiperSlide className="blue-slide flex flex-col space-y-5" key={index}>
                <p className=' text-gray-400 mt-5'>
                  {item.content}
                </p>
                <div className=' flex flex-row items-center text-primary'>

                  {Array.from({ length: item.rating }, (_, i) => (
                    <AiFillStar key={i} />
                  ))}


                  {Array.from({ length: Math.round( 5- item.rating )}, (_, i) => (
                      <AiOutlineStar key={i} />
                  ))}

                
                  <h3 className=' ml-5 font-semibold text-black'>{item.rating}</h3>
                </div>
              </SwiperSlide>

            )
          }
        </Swiper>

        <div className='text-5xl space-x-5 flex flex-row justify-end'>
          <button onClick={goToPrev}>
            <IoIosArrowDropleft className={activeIndex <= 0 ? ' text-gray-300' : ' text-black'} />
          </button>
          <button onClick={goToNext}>
            < IoIosArrowDropright className={activeIndex == 2 ? ' text-gray-300' : ' text-black'} />
          </button>
        </div>
      </div>








      {/* <p className=' text-gray-400'>
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
        </div> */}


      {/* </div> */}


      <motion.div
        initial={zoomIn(1).initial}
        whileInView={zoomIn(1).animate}
        className=' md:w-[40%] -z-30'>
        <img className=' w-96 h-96 object-scale-down' src={Review} alt="" />
      </motion.div>
    </div>
  )
}

export default Clients