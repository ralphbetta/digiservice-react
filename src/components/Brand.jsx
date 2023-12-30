import React from 'react'
import {brands} from '../constants'

const Brand = () => {
  return (
    <div className='mx-5 lg:mx-40 my-20'>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-6 items-center md:gap-14 xlg:gap-16'>

        {brands.map((brand, index)=>
       <div className='' key={index}>
         <img className='' src={brand.img} alt="" />
       </div>
        )}
    </div>
    </div>
  )
}

export default Brand