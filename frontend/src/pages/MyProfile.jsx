import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className='flex flex-col'>
            <div className='border-b border-gray-400 w-[50%]'>
                <img src={assets.profile_pic} alt="" className='my-7 rounded-full max-w-28' />
                <p className='text-2xl font-medium'>Name</p>
            </div>
            <div className='flex flex-col gap-1.5 mt-3.5 w-[38%]'>
                <p className='underline text-gray-500'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2'>
                    <p>Email: </p>
                    <p >vancuong25112003@gmail.com</p>
                    <p>Phone: </p>
                    {isEdit ?
                        <input type="number" className='border border-gray-400 rounded-md' />
                        : <p>0359020006</p>
                    }
                    <p>Address:</p>
                    {isEdit ?
                        <input type="text" className='border border-gray-400 rounded-md' />
                        : <p>Quang Ninh</p>
                    }

                </div>
            </div>

            <div className='flex flex-col gap-1.5 mt-3.5 w-[38%]'>
                <p className='underline text-gray-500'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2'>
                    <p>Gender:</p>
                    <select name="" id="">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <p>Birthday:</p>
                    <input type="date" />
                </div>
            </div>

            {isEdit ?
                <button className='flex justify-center mt-10 border border-primary rounded-full py-2.5 max-w-36 ' onClick={() => setIsEdit(false)}>Save Information</button>
                : <button className='flex justify-center mt-10 border border-primary rounded-full py-2.5 max-w-20 ' onClick={() => setIsEdit(true)}>Edit</button>}
        </div>
    )
}

export default MyProfile