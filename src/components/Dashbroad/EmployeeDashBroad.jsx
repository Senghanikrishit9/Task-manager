import React from 'react'
import Header from '../other/Header'
import Tasknumber from '../other/Tasknumber'
import Tasklistnumber from '../Tasklist/Tasklistnumber'

const EmployeeDashBroad = () => {
  return (
    <div>
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header />
      <Tasknumber />
      <Tasklistnumber />
    </div>
    </div>
  )
}

export default EmployeeDashBroad
