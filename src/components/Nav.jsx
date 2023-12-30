import React, { useState } from 'react'
import { Logo, navigation, logoCaption, icons } from '../constants';
import { Link } from 'react-scroll'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiFillCiCircle,
} from 'react-icons/ai';
import { AppButton } from './AppButton';

const Nav = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    }
    
    const toggleActiveIndex = index =>{
        console.log(index);
        setActiveIndex(index);
    }

    return (
        <div className='mb-20'>
            <div className='px-5 lg:px-40 h-20 justify-between items-center flex flex-row bg-white fixed left-0 right-0 top-0 -z-20000'>
                {/* Logo Section */}
                <div className='flex flex-row space-x-2 items-center'>
                    <img className=' h-6 w-6' src={Logo} alt="" />
                    <h1 className='logo'>{logoCaption}</h1>
                </div>

                {/* Menu Icon */}
                <button onClick={toggleMenu} className=' md:hidden'>
                    {isMenu ? <AiOutlineClose className='h-6 w-6' /> : <AiOutlineMenu className='h-6 w-6' />}
                </button>

                {/* Menu Items */}
                <ul className=' hidden md:flex flex-row space-x-5 items-center'>
                    {navigation.map((item, index) =>
                        <li className={index === activeIndex ? 'font-semibold underline underline-offset-8 text-primary cursor-pointer' : 'font-semibold hover:underline underline-offset-8 hover:text-primary cursor-pointer'} key={index}>
                            <Link onClick={()=>toggleActiveIndex(index)} to={item.href} spy={true} smooth={true} offset={100}>
                                {item.name}
                            </Link>
                        </li>
                    )}

                {/* Login Menu Item */}
                   { AppButton("Log in")}

                </ul>

            </div>

            {/* Dropdown */}
            <div className={!isMenu ? " hidden" : 'bg-primary hover:bg-secondary fixed flex flex-col w-full space-y-4 text-white px-5 py-4'}>
                {navigation.map((item, index) =>
                    <div key={index}>
                        <Link to={item.href} spy={true} smooth={true} offset={100}>
                            {item.name}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Nav

