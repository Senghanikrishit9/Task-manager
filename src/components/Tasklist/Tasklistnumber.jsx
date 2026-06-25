import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'



const Tasklistnumber = ({data}) => {
  console.log(data)
  return (
    <div id='tasklist' className='h-[60%] flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 overflow-x-auto'>
  
    {data.tasks.map((e) => {
      
      if(e.active){
        return <AcceptTask />
      }
         })}
   </div>
  )
}

export default Tasklistnumber
