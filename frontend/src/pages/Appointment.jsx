/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, doctors } from '../assets/assets'

const Appointment = () => {

    const { docId } = useParams()

    const [docInfo, setDocInfo] = useState()

    const [slotBook, setSlotBook] = useState({})
    const [slotBooked, setSlotBooked] = useState({})
    const [slotIndex, setSlotIndex] = useState(0)

    const getDocInfo = () => {
        setDocInfo(doctors.find((i) => docId === i._id))
    }

    const bookingSlots = async () => {
        let today = new Date()
        let bookingDate = []
        let bookingTime = []

        let currentDate = new Date()
        for (let i = 0; i < 7; i++) {
            currentDate = today.getDate() + i
            bookingDate.push(currentDate)

            if (currentDate === today.getDate() && today.getHours() >= 9) {
                if (today.getHours() < 21) {
                    if (today.getMinutes() > 30) {
                        bookingTime.push([{
                            hour: today.getHours() + 1,
                            minute: 0,
                        }])
                    } else {
                        bookingTime.push([{
                            hour: today.getHours(),
                            minute: 30,
                        }])
                    }
                }
            } else {
                bookingTime.push([{
                    hour: 9,
                    minute: 0,
                }])
            }

            if (currentDate === today.getDate()) {
                for (let iTime = 0; iTime < 25; iTime++) {
                    if (bookingTime[i][iTime]?.hour < 21) {
                        if (bookingTime[i][iTime]?.minute === 30) {
                            bookingTime[i]?.push({
                                hour: bookingTime[i][iTime]?.hour + 1,
                                minute: 0,
                            })
                        } else {
                            bookingTime[0]?.push({
                                hour: bookingTime[i][iTime]?.hour,
                                minute: 30,
                            })
                        }
                    }
                }
            } else {
                for (let iTime = 0; iTime < 25; iTime++) {
                    if (bookingTime?.[i]?.[iTime]?.hour < 21) {
                        if (bookingTime[i]?.[iTime]?.minute === 30) {
                            bookingTime[i]?.push({
                                hour: bookingTime[i]?.[iTime]?.hour + 1,
                                minute: 0,
                            })
                        } else {
                            bookingTime[i]?.push({
                                hour: bookingTime?.[i]?.[iTime]?.hour,
                                minute: 30,
                            })
                        }
                    }
                }
            }
        }

        await setSlotBook({
            date: bookingDate,
            time: bookingTime
        })
    }

    useEffect(() => {
        getDocInfo()
        bookingSlots()
    }, [docId])

    console.log("setSlotBook", slotBook)


    return (
        <div className='mt-5'>
            <div className='flex gap-5'>
                <div className='border max-w-64 bg-primary rounded-md'>
                    <img src={docInfo?.image} alt="" />
                </div>

                <div className='flex flex-col w-full relative'>
                    <div className='border w-full h-full rounded-md border-gray-400 py-3.5 px-6'>
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

            <div className='mt-6'>
                <p>Booking Slots</p>
                <div className='flex gap-8 mt-2'>
                    {slotBook?.date?.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center border border-primary rounded-full w-14 h-20 cursor-pointer ${index === slotIndex ? 'bg-primary text-white' : ''}`}
                            onClick={() => setSlotIndex(index)}
                        >
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <div className='overflow-auto'>
                    <div className='flex gap-8 mt-5'>
                        {slotBook?.time?.[slotIndex].map((item, index) => (
                            <div key={index} className='flex items-center justify-center border border-gray-400 rounded-full min-w-20 min-h-10 cursor-pointer'>
                                {
                                    item.hour > 12 ?
                                        <p className='text-sm'>{item.hour}:{item.minute} PM</p>
                                        : <p className='text-sm'>{item.hour}:{item.minute} AM</p>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Appointment