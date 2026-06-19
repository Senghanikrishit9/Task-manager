import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBroad from './components/Dashbroad/EmployeeDashBroad'
import AdminDashbroad from './components/Dashbroad/AdminDashbroad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(() => {
    setLocalStorage()
  },)


  useEffect(() => {
    getLocalStorage()
  },)
  return (
    <>
   <Login />
   {/* <EmployeeDashBroad /> */}
   {/* <AdminDashbroad /> */}
    </>
  )
}

export default App
