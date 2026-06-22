import React from 'react'
import Header from '../other/Header'
import Tasknumber from '../other/Tasknumber'
import Tasklistnumber from '../Tasklist/Tasklistnumber'

const EmployeeDashBroad = ({data}) => {
  return (
    <div>
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data}  />
      <Tasknumber data={data} />
      <Tasklistnumber data={data} />
    </div>
    </div>
  )
}

export default EmployeeDashBroad
