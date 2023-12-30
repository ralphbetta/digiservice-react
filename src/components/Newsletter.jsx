import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { AppButton } from './AppButton'

const Newsletter = () => {
    return (
        <div id='contact' className='mt-10 md:mt-20 px-5 lg:px-40 bg-primary bg-opacity-10 space-y-8 py-20 md:py-32 flex flex-col'>
            <h1 className=' text-center font-semibold text-3xl'>If you Join Our Newsletter</h1>
            <p className=' text-center text-gray-500  md:mx-40'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>

            <form onSubmit={(e)=>{ console.log(e)}}>
                <div className=' flex flex-row items-center justify-center'>
                    <div className=' bg-white py-4 pl-5 rounded-s-sm' >
                        <AiOutlineMail />
                    </div>
                    <input className='py-3 pl-3 md:w-[30%] rounded-e-sm focus:outline-none' type="text" placeholder='Your Email Address' />
                    <button className=' py-3 bg-primary hover:bg-secondary transition-all duration-500 text-white rounded-sm ml-4 px-5'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Newsletter