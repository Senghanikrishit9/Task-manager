import React from 'react'

const NewTask = ({task}) => {
  return (
    <div>
      <div className='h-full w-80 shrink-0 p-5 bg-red-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded font-semibold '>High</h3>
            <h4 className='font-semibold'>21 March 2025</h4>
          </div>
          <h2 className='mt-5 text-3xl '>🧑‍💻 Today Task :-</h2>
          <p className=' text-xl mt-5'>Review the assigned tasks and provide progress updates during the team meeting.</p>
          <div className='mt-4 p-10 '>
            <button className='bg-blue-500 p-2 rounded '>Accept Task</button>
          </div>
      </div>
    </div>
  )
}

export default NewTask
