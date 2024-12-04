import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Dashboard from './page/admin/Dashboard'
import Login from './page/Login'
import { AppContext } from './context/AppContext'
import AddDoctor from './page/admin/AddDoctor'

const App = () => {

  const { aToken } = useContext(AppContext)

  return aToken ? (
    <div className='my-3.5 mx-8'>
      <Navbar />
      <div className='flex mt-10'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
        </Routes>
      </div>
    </div>
  )
    : (
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    )
}

export default App