import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Dashboard from './page/admin/Dashboard'

const App = () => {
  return (
    <div className='my-3.5 mx-8'>
      <Navbar />
      <div className='flex mt-10'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App