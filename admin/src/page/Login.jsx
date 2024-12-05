import React, { useContext, useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { toast } from 'react-toastify';
import axios from 'axios'
import { AppContext } from '../context/AppContext';

const Login = () => {

    const { UrlBackend, setAToken, setDToken } = useContext(AppContext)

    const [isShow, setIsShow] = useState(false)
    const [action, setAction] = useState('admin')

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error("Missing Field")
            return
        }

        if (action === "admin") {
            try {
                const { data } = await axios.post(UrlBackend + '/api/admin/login', { email, password })

                if (data.success) {
                    toast.success("Login Successfully")
                    setAToken(data.aToken)
                    localStorage.setItem("aToken", data.aToken)
                }
            } catch (e) {
                toast.error(e.response.data.message)
            }
        } else {
            try {
                const { data } = await axios.post(UrlBackend + '/api/doctor/login', { email, password })

                if (data.success) {
                    toast.success('Login Successfully')
                    setDToken(data.dToken)
                    localStorage.setItem("dToken", data.dToken)
                }
            } catch (e) {
                toast.error(e.message)
            }
        }
    }

    return (
        <div className='flex flex-col items-center mt-16'>
            <p className='text-4xl font-bold'>{action === 'admin' ? 'Login To Admin Banner' : 'Login To Doctor Banner'}</p>
            <div className='flex flex-col items-center mt-10 px-5 py-5 border border-gray-600 rounded-lg shadow-2xl'>
                <p className='text-3xl font-medium'>Login</p>
                <form onSubmit={login} action="">
                    <div className='flex flex-col gap-2 mt-5'>
                        <div>
                            <p>Email</p>
                            <input
                                type="text"
                                className='border border-gray-600 w-52 py-1 px-1 rounded-lg'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='relative'>
                            <p>Password</p>
                            <input
                                type={`${isShow ? 'text' : 'password'}`}
                                className='border border-gray-600 w-52 py-1 pl-1 pr-7 rounded-lg'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isShow ?
                                <FaRegEye className='absolute bottom-1.5 right-1 cursor-pointer' onClick={() => setIsShow(false)} />
                                : <FaRegEyeSlash className='absolute bottom-1.5 right-1 cursor-pointer' onClick={() => setIsShow(true)} />
                            }
                        </div>
                    </div>

                    <div className='flex justify-center mt-5'>
                        <button className='bg-primary text-white py-1.5 px-5 rounded-2xl'>Login</button>
                    </div>
                </form>
                {action === "admin" ?
                    <p onClick={() => setAction('doctor')} className='mt-3.5 font-light underline text-blue-500 cursor-pointer'>Login To Doctor Banner</p>
                    : <p onClick={() => setAction('admin')} className='mt-3.5 font-light underline text-blue-500 cursor-pointer'>Login To Admin Banner</p>
                }

            </div>
        </div>
    )
}

export default Login