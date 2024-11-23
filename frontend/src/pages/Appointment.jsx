import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, doctors } from '../assets/assets'

const Appointment = () => {

    const { docId } = useParams()
    const [docInfo, setDocInfo] = useState()

    const getDocInfo = () => {
        setDocInfo(doctors.find((i) => docId === i._id))
    }

    useEffect(() => {
        getDocInfo()
    }, [docId])

    console.log(docInfo)

    return (
        <div className='mt-5'>
            <div className='flex gap-5'>
                <div className='border max-w-64 bg-primary rounded-md'>
                    <img src={docInfo?.image} alt="" />
                </div>

                <div className='border w-full rounded-md border-gray-400 py-3.5 px-6'>
                    <div className='flex items-center gap-3.5'>
                        <p className='text-xl text-gray-800'>{docInfo?.name}</p>
                        <img src={assets.verified_icon} className='w-5' alt="" />
                    </div>
                    <div className='flex gap-5'>
                        <p>{docInfo?.degree} - {docInfo?.speciality}</p>
                        <button className='text-sm text-gray-600 w-20 border border-primary rounded-full'>{docInfo?.experience}</button>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-800 font-medium'>about</p>
                        <img src={assets.info_icon} alt="" />
                    </div>
                    <p className='text-sm text-gray-600'>{docInfo?.about}</p>
                    <p className='mt-3 text-gray-600'>Appointment fee: <span className='text-gray-800'>${docInfo?.fees}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Appointment