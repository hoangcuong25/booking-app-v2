import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-2.5'>
            <NavLink to={'admin-dashboard'} className={({ isActive }) => `flex items-center py-2.5 px-2 gap-2.5 w-48 cursor-pointer ${isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""}`} >
                <img src={assets.home_icon} alt="" />
                <p className='text-gray-700 font-medium'>Dashboard</p>
                <hr className='justify-end w-1 h-[200%] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center py-2.5 px-2 gap-2.5 w-48  cursor-pointer ${isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""}`}>
                <img src={assets.appointment_icon} alt="" />
                <p className='text-gray-700 font-medium'>Appointment</p>
                <hr className='justify-end w-1 h-[200%] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center  py-2.5 px-2 gap-2.5 w-48 cursor-pointer ${isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""}`}>
                <img src={assets.add_icon} alt="" />
                <p className='text-gray-700 font-medium'>Add Doctor</p>
                <hr className='justify-end w-1 h-[200%] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center py-2.5 px-2 gap-2.5 w-48 cursor-pointer ${isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""}`}>
                <img src={assets.people_icon} alt="" />
                <p className='text-gray-700 font-medium'>Doctor List</p>
                <hr className='justify-end w-1 h-[200%] bg-primary hidden' />
            </NavLink>
        </div>
    )
}

export default Sidebar