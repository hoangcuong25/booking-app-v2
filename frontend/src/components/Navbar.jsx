import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [token, setToken] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='flex justify-between items-center mt-3 border-b border-gray-400 pb-3'>
            <img className='w-40' src={assets.logo} alt="" />

            <ul className='hidden md:flex gap-6 text-base '>
                <NavLink to='/'>
                    <p>HOME</p>
                    <hr className='border border-primary hidden' />
                </NavLink>

                <NavLink to='/all-doctors'>
                    <p>ALL DOCTORS</p>
                    <hr className='border border-primary hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <p>ABOUT</p>
                    <hr className='border border-primary hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <p>CONTACT</p>
                    <hr className='border border-primary hidden' />
                </NavLink>
            </ul>

            {token ?
                <div className='hidden md:flex gap-2 group relative cursor-pointer'>
                    <img src={assets.profile_pic} className='w-7 h-auto rounded-full' alt="" />
                    <img src={assets.dropdown_icon} alt="" />

                    <div className='absolute hidden group-hover:block right-0 pt-14'>
                        <ul className='bg-stone-100 w-36 flex flex-col gap-2 rounded-md'>
                            <NavLink to='my-profile' className='hover:bg-stone-200 rounded-md p-2 cursor-pointer'>
                                <p>My Profile</p>
                            </NavLink>

                            <NavLink to='my-appointment' className='hover:bg-stone-200 rounded-md p-2 cursor-pointer'>
                                <p>My Appointment</p>
                            </NavLink>

                            <NavLink className='hover:bg-stone-200 rounded-md p-2 cursor-pointer'>
                                <p>Logout</p>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                : <NavLink to='/login'>
                    <button className='hidden md:flex items-center justify-center text-white text-lg font-semibold w-32 h-10 bg-primary rounded-full'>Login Here</button>
                </NavLink>
            }
            <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='w-6 md:hidden' alt="" />
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-center px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 my-5 px-5 text-lg font-medium'>
                    <NavLink onClick={() => setShowMenu(false)} to='/'><p>Home</p> </NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p>ALL DOCTORS</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/about'><p>ABOUT</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/contact'><p>CONTACT</p></NavLink>
                    {
                        token ?
                            "" :
                            <NavLink to='/login'>
                                <button className='flex items-center justify-center text-white text-lg font-semibold w-32 h-10 bg-primary rounded-full mt-10'>Login Here</button>
                            </NavLink>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar