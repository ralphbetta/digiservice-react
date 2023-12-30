import React from 'react'
import { Logo, logoCaption } from '../constants'

const BottomNav = () => {
    return (
        <div className=' bg-[#021C23] py-24 px-5 lg:px-40 grid grid-cols-2 gap-5 md:grid-cols-4'>

            <div>
                {/* Logo Section */}
                <div className='flex flex-row space-x-2 items-center'>
                    <img className=' h-6 w-6' src={Logo} alt="" />
                    <h1 className='text-primary font-semibold text-xl'>Digi Service</h1>
                </div>
                <div className='flex flex-col space-y-4 mt-8 text-gray-500 cursor-pointer'>
                    <a className=' hover:text-primary' href="#">Sitemap</a>
                    <a className=' hover:text-primary' href="#">Contact Us</a>
                    <a className=' hover:text-primary' href="#">Terms of Use & IP</a>
                </div>
            </div>


            <div>
                <h1 className='text-white font-semibold text-xl'>Product</h1>
                <div className='flex flex-col space-y-4 mt-8 text-gray-500 cursor-pointer'>
                    <a className=' hover:text-primary' href="#">Proposals</a>
                    <a className=' hover:text-primary' href="#">Contracts</a>
                </div>
            </div>

            <div>
                <h1 className='text-white font-semibold text-xl'>For Agencies</h1>
                <div className='flex flex-col space-y-4 mt-8 text-gray-500 cursor-pointer'>
                    <a className=' hover:text-primary' href="#">Team & Story</a>
                    <a className=' hover:text-primary' href="#">Find Your Agency</a>
                    <a className=' hover:text-primary' href="#">Best Design Awards</a>

                </div>
            </div>

            <div>
                <h1 className='text-white font-semibold text-xl'>About</h1>
                <div className='flex flex-col space-y-4 mt-8 text-gray-500 cursor-pointer'>
                    <a className=' hover:text-primary' href="#">Benefits</a>
                    <a className=' hover:text-primary' href="#">Submit An Agency</a>
                    <a className=' hover:text-primary' href="#">Agency Selection Criteria</a>

                </div>
            </div>

        </div>
    )
}

export default BottomNav