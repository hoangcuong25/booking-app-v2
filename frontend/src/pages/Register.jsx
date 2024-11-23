import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <form action="">
            <div className='flex justify-center mt-10 '>
                <div className='py-3.5 px-3 border rounded-lg shadow-xl'>
                    <div className='flex flex-col items-center '>
                        <p className='text-xl text-gray-900 font-bold mb-3'>Create Account</p>
                        <p className='text-gray-600 '>Please sign up to book appointment</p>
                    </div>
                    <div>
                        <p className='mt-3 text-gray-600 text-sm'>Full Name</p>
                        <input type="text" className=' text-sm border w-[100%] h-10 rounded-lg pl-1.5' />
                    </div>
                    <div>
                        <p className='mt-3 text-gray-600 text-sm'>Email</p>
                        <input type="text" className=' text-sm border w-[100%] h-10 rounded-lg pl-1.5' />
                    </div>
                    <div className='relative'>
                        <p className='mt-3 text-gray-600 text-sm'>Password</p>
                        <input type={`${isShow ? 'text' : 'password'}`} className='text-sm border w-[100%] h-10 rounded-lg pl-1.5 pr-9' />
                        {isShow ?
                            <FaRegEye className='absolute top-9 right-3 cursor-pointer' onClick={() => setIsShow(false)} />
                            : <FaRegEyeSlash className='absolute top-9 right-3 cursor-pointer' onClick={() => setIsShow(true)} />
                        }
                    </div>
                    <button className='w-[100%] h-10 bg-primary rounded-lg my-3'>Create Account</button>
                    <NavLink to='/login'>
                        <p className='text-gray-500 text-center text-sm'>Already have an account? <span className='text-blue-400 underline'>Login here</span></p>
                    </NavLink>
                </div>
            </div>
        </form>
    )
}

export default Register