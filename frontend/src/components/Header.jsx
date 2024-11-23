import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between bg-primary rounded-md mt-3  px-6 md:px-10 lg:px-20'>
            <div className='flex flex-col justify-center text-white gap-3 md:gap-5 py-3 md:w-1/2'>
                <p className='font-bold text-2xl md:text-3xl lg:text-4xl xl:5xl'>Book Appoinment With Trusted Doctors</p>

                <div className='flex flex-col md:flex-row gap-2 items-center'>
                    <img src={assets.group_profiles} className='w-24' alt="" />
                    <p className='text-sm'>Simply browse through our extensive list of Trusted doctors,<br />schedule your appointment hassle-free</p>
                </div>

                <a href="#speciality" className='flex justify-center md:justify-start items-center'>
                    <div className='flex gap-3 px-3 py-3 bg-white text-gray-600 rounded-2xl w-52 '>
                        <span>Book Appointment</span>
                        <img src={assets.arrow_icon} alt="" />
                    </div>
                </a>
            </div>

            <div className='flex justify-end md:w-1/2'>
                <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header