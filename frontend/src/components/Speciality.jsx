/* eslint-disable react/jsx-key */
import React from 'react'
import { specialityData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Speciality = () => {
    return (
        <div className='flex flex-col items-center gap-5 mt-14' id='speciality'>
            <p className='text-3xl font-medium'>Find by Speciality</p>
            <span>Simply browse thourgh our extensive list of trusted doctors, schedule your appointment</span>

            <div className='flex justify-center flex-wrap gap-7 '>
                {specialityData.map((item, index) => (
                    <NavLink
                        key={index}
                        className='flex flex-col items-center hover:translate-y-[-10px] transition-all duration-500'
                        to={`/all-doctors/${item.speciality}`}
                    >
                        <img src={item.image} className='size-20' alt="" />
                        <p>{item.speciality}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Speciality