import React, { useEffect, useState } from 'react'
import { doctors } from '../assets/assets'
import { NavLink, useParams } from 'react-router-dom'

const AllDoctors = () => {

    const { speciality } = useParams()
    const [doctor, setDoctor] = useState()

    const filterDoctor = () => {
        setDoctor(doctors.filter((i) => (i.speciality === speciality)))
    }

    useEffect(() => {
        if (speciality) {
            filterDoctor()
        } else {
            setDoctor(doctors)
        }
    }, [speciality])

    return (
        <div className='mt-1.5'>
            <p>Browse through the doctors specialist.</p>
            <div className='flex mt-3 gap-8'>
                <div className='flex flex-col gap-3'>
                    <NavLink
                        className={`flex items-center justify-center h-7 w-40 border border-primary rounded-md text-sm text-gray-600 cursor-pointer ${speciality === 'General physician' ? 'bg-primary text-white' : ''}`}
                        to={`${speciality === 'General physician' ? '/all-doctors' : '/all-doctors/General physician'}`}
                    >
                        <p>General physician</p>
                    </NavLink>
                    <NavLink
                        className={`flex items-center justify-center h-7 w-40 border border-primary rounded-md text-sm text-gray-600 cursor-pointer ${speciality === 'Gynecologist' ? 'bg-primary text-white' : ''}`}
                        to={`${speciality === 'Gynecologist' ? '/all-doctors' : '/all-doctors/Gynecologist'}`}
                    >
                        <p>Gynecologist</p>
                    </NavLink>
                    <NavLink
                        className={`flex items-center justify-center h-7 w-40 border border-primary rounded-md text-sm text-gray-600 cursor-pointer ${speciality === 'Dermatologist' ? 'bg-primary text-white' : ''}`}
                        to={`${speciality === 'Dermatologist' ? '/all-doctors' : '/all-doctors/Dermatologist'}`}
                    >
                        <p>Dermatologist</p>
                    </NavLink>
                    <NavLink
                        className={`flex items-center justify-center h-7 w-40 border border-primary rounded-md text-sm text-gray-600 cursor-pointer ${speciality === 'Pediatricians' ? 'bg-primary text-white' : ''}`}
                        to={`${speciality === 'Pediatricians' ? '/all-doctors' : '/all-doctors/Pediatricians'}`}
                    >
                        <p>Pediatricians</p>
                    </NavLink>
                    <NavLink
                        className={`flex items-center justify-center h-7 w-40 border border-primary rounded-md text-sm text-gray-600 cursor-pointer ${speciality === 'Neurologist' ? 'bg-primary text-white' : ''}`}
                        to={`${speciality === 'Neurologist' ? '/all-doctors' : '/all-doctors/Neurologist'}`}
                    >
                        <p>Neurologist</p>
                    </NavLink>
                    <NavLink
                        className={`flex items-center justify-center h-7 w-40 border border-primary rounded-md text-sm text-gray-600 cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-primary text-white' : ''}`}
                        to={`${speciality === 'Gastroenterologist' ? '/all-doctors' : '/all-doctors/Gastroenterologist'}`}
                    >
                        <p>Gastroenterologist</p>
                    </NavLink>
                </div>

                <div className='flex flex-wrap gap-5 justify-center items-center'>
                    {doctor?.map((item, index) => (
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
            </div>
        </div>
    )
}

export default AllDoctors