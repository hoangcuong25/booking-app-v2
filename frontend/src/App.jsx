import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import AllDoctors from './pages/AllDoctors'
import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/all-doctors' element={<AllDoctors />} />
        <Route path='/all-doctors/:speciality' element={<AllDoctors />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App