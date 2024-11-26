/* eslint-disable react/jsx-key */
import React from 'react'
import { doctors } from '../assets/assets'

const MyAppointment = () => {
    return (
        <div className='mt-10'>
            <p className='font-medium'>My Appointments</p>
            <div>
                {doctors.slice(0, 3).map((item, index) => (
                    <div key={index} className='flex'>
                        <img src={item.image} className='max-w-36' alt="" />
                        <div className='flex flex-col gap-0.5'>
                            <p className='text-sm font-medium'>{item.name}</p>
                            <p className='text-sm text-gray-600' >{item.speciality}</p>
                            <div>
                                <p className='text-sm font-medium'>Address:</p>
                                <p className='text-sm text-gray-600'>{item.address.line1}</p>
                            </div>
                            <p className='text-sm font-medium'>Date & Time: <span className='text-sm text-gray-600'>26 Dev 2024 | 10:30</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointment