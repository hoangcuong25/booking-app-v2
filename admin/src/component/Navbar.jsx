import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1.5'>
                <img src={assets.admin_logo} className='w-40' alt="" />
                <p className='border px-2.5 py-0.5 rounded-full text-xs border-gray-600'>Admin</p>
            </div>
            <button className=' bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar