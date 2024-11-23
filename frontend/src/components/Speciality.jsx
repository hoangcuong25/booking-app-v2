/* eslint-disable react/jsx-key */
import React from 'react'
import { specialityData } from '../assets/assets'

const Speciality = () => {
    return (
        <div className='flex flex-col items-center gap-5 mt-14' id='speciality'>
            <p className='text-3xl font-medium'>Find by Speciality</p>
            <span>Simply browse thourgh our extensive list of trusted doctors, schedule your appointment</span>

            <div className='flex justify-center flex-wrap gap-7 '>
                {specialityData.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <img src={item.image} className='size-20' alt="" />
                        <p>{item.speciality}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Speciality