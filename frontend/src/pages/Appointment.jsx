/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, doctors } from '../assets/assets'

const Appointment = () => {

    const { docId } = useParams()

    const [docInfo, setDocInfo] = useState()

    const Day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const [bookingDay, setBookingDay] = useState()

    const [slotBook, setSlotBook] = useState({})
    const [slotIndexDay, setSlotIndexDay] = useState(0)
    const [slotIndexTime, setSlotIndexTime] = useState(0)


    const getDocInfo = () => {
        setDocInfo(doctors.find((i) => docId === i._id))
    }

    const bookingSlots = async () => {
        const today = new Date();
        const bookingDates = [];
        const bookingTimes = [];

        setBookingDay(today.getDay())

        for (let i = 0; i < 7; i++) {
            // Create a new date object for each day
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i); // Safely calculate the date
            bookingDates.push(currentDate.toISOString().split("T")[0]); // Format as YYYY-MM-DD

            // Initialize the day's time slots
            const times = [];
            const startHour = i === 0 ? Math.max(9, today.getHours()) : 9; // Start from current hour or 9 AM
            const startMinute = i === 0 && today.getMinutes() > 30 ? 0 : today.getMinutes() <= 30 ? 30 : 0;

            for (let hour = startHour; hour < 21; hour++) {
                for (let minute = hour === startHour ? startMinute : 0; minute < 60; minute += 30) {
                    times.push({ hour, minute });
                }
            }

            bookingTimes.push(times);
        }

        await setSlotBook({
            date: bookingDates,
            time: bookingTimes
        });
    };

    useEffect(() => {
        getDocInfo()
        bookingSlots()
    }, [docId])

    console.log("setSlotBook", slotBook)

    return (
        <div className='mt-5'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex border max-w-64 bg-primary rounded-md'>
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
                <div className='overflow-auto'>
                    <div className='flex gap-8 mt-2'>
                        {slotBook?.date?.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center border border-primary rounded-full min-w-14 min-h-20 cursor-pointer ${index === slotIndexDay ? 'bg-primary text-white' : ''}`}
                                onClick={() => setSlotIndexDay(index)}
                            >
                                <p>{item.split("-")[2]}</p>
                                <p>{bookingDay + index < 7 ? Day[bookingDay + index] : Day[bookingDay + index - 7]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='overflow-auto'>
                    <div className='flex gap-8 mt-5'>
                        {slotBook?.time?.[slotIndexDay].map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center border border-gray-400 rounded-full min-w-20 min-h-10 cursor-pointer ${index === slotIndexTime ? 'bg-primary text-white' : ''}`}
                                onClick={() => setSlotIndexTime(index)}
                            >
                                {
                                    item.hour > 12 ?
                                        <p className='text-sm font-light'>{item.hour}:{item.minute} PM</p>
                                        : <p className='text-sm font-light'>{item.hour}:{item.minute} AM</p>
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