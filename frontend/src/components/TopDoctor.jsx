/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { doctors } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'

const TopDoctor = () => {

    const { allDoctor } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-5 mt-14'>
            <p className='text-3xl font-medium'>Top Doctors To Book</p>
            <p>Simply browse through our extensive list of trusted doctors.</p>

            <div className='flex flex-wrap gap-5 justify-center items-center'>
                {allDoctor?.slice(0, 10).map((item, index) => (
                    <NavLink
                        key={index}
                        className='border border-blue-200 rounded-lg cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                        to={`/appointment/${item._id}`}
                    >
                        <img src={item.image} className='sm:max-w-52 max-w-36' alt="" />
                        <div className='flex flex-col mx-1 sm:ml-3 my-3'>
                            <div className='flex items-center gap-3'>
                                <div className='size-2 bg-green-500 rounded-full'></div>
                                <p className='text-sm sm:text-base text-green-500'>Available</p>
                            </div>
                            <p className='text-sm sm:text-lg text-gray-800'>{item.name}</p>
                            <p className='text-xs sm:text-sm text-gray-500'>{item.speciality}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
            <NavLink to='all-doctors' className='flex items-center justify-center border w-16 h-8 rounded-lg border-blue-500'>More</NavLink>
        </div>
    )
}

export default TopDoctor