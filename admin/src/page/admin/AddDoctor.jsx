import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const AddDoctor = () => {

    const { UrlBackend, aToken } = useContext(AppContext)

    const [image, setImage] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [experience, setExperience] = useState()
    const [fees, setFees] = useState()
    const [speciality, setSpeciality] = useState()
    const [degree, setDegree] = useState()
    const [address, setAddress] = useState()
    const [about, setAbout] = useState()

    const addDoctor = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', image)
        formData.append('speciality', speciality)
        formData.append('degree', degree)
        formData.append('experience', experience)
        formData.append('about', about)
        formData.append('fees', fees)
        formData.append('address', address)

        try {
            const { data } = await axios.post(UrlBackend + '/api/admin/add-doctor', formData, { headers: { aToken } })

            if (data.success) {
                toast.success('Add Doctor Successfully')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    console.log(image)

    return (
        <div className='w-full ml-8'>
            <p className='w-full text-2xl font-semibold'>Add Doctor</p>
            <div className='w-full border border-stone-100 py-5 px-5 mt-5'>
                <form onSubmit={addDoctor}>
                    <div className='flex items-center gap-3.5'>
                        <input type="file" id='image' accept="image/*" hidden onChange={(e) => setImage(e.target.files[0])} />
                        <label htmlFor="image">{image ? <img src={URL.createObjectURL(image)} alt="" className='w-16' /> : <img src={assets.upload_area} className='w-16' alt="" />}</label>
                        <p>Upload Doctor <br />picture</p>
                    </div>

                    <div className='flex'>
                        <div className='w-1/2 mt-8 flex flex-col gap-5'>
                            <div>
                                <p className='text-blue-700'>Doctor Name</p>
                                <input
                                    type="text"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className='text-blue-700'>Doctor Email</p>
                                <input
                                    type="text"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='Your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className='text-blue-700'>Doctor Password</p>
                                <input
                                    type="text"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className='text-blue-700'>Doctor Experience</p>
                                <select
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    onChange={(e) => setExperience(e.target.value)}
                                >
                                    <option value="1 Year">1 Year</option>
                                    <option value="2 Year">2 Year</option>
                                    <option value="3 Year">3 Year</option>
                                    <option value="4 Year">4 Year</option>
                                    <option value="5 Year">5 Year</option>
                                    <option value="6 Year">6 Year</option>
                                    <option value="7 Year">7 Year</option>
                                    <option value="8 Year">8 Year</option>
                                    <option value="9 Year">9 Year</option>
                                </select>
                            </div>
                            <div>
                                <p className='text-blue-700'>Fees</p>
                                <input
                                    type="number"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='Your Fees'
                                    value={fees}
                                    onChange={(e) => setFees(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='w-1/2 mt-8 flex flex-col gap-5'>
                            <div>
                                <p className='text-blue-700'>Speciality</p>
                                <input
                                    type="text"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='General Physician'
                                    value={speciality}
                                    onChange={(e) => setSpeciality(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className='text-blue-700'>Degree</p>
                                <input
                                    type="text"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='Degree'
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className='text-blue-700'>Address</p>
                                <input
                                    type="text"
                                    className='border border-gray-300 w-72 rounded-md py-1 px-2 mt-2'
                                    placeholder='Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-5'>
                        <p className='text-blue-700'>About Me</p>
                        <textarea
                            className='border border-gray-300 w-full h-36 rounded-md py-1 px-2 mt-2'
                            placeholder='Write About Yourself'
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    <button className='mt-5 py-3 px-7 bg-primary rounded-full text-white'>Add doctor</button>
                </form>
            </div>
        </div>
    )
}

export default AddDoctor