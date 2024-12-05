import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { aToken, dToken, setAToken, setDToken } = useContext(AppContext)

    const navigate = useNavigate()

    const logout = () => {
        if (aToken) {
            localStorage.clear("aToken")
            setAToken(false)
            navigate("/")
        } else {
            localStorage.clear("dToken")
            setDToken(false)
            navigate("/")
        }
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1.5'>
                <img src={assets.admin_logo} className='w-40' alt="" />
                <p className='border px-2.5 py-0.5 rounded-full text-xs border-gray-600'>Admin</p>
            </div>

            {aToken || dToken ?
                <button className=' bg-primary text-white text-sm px-10 py-2 rounded-full' onClick={logout}>Logout</button>
                : <button className=' bg-primary text-white text-sm px-10 py-2 rounded-full'>Login</button>
            }

        </div>
    )
}

export default Navbar