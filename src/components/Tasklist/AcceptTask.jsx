import React from 'react'

const AcceptTask = ({task}) => {
  return (
    <div>
       <div className='h-full w-80 shrink-0 p-5 bg-green-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded font-semibold '>High</h3>
            <h4 className='font-semibold'>21 dec 2007</h4>
          </div>
          <h2 className='mt-5 text-3xl '>💻 Today Task :-</h2>
          <p className=' text-xl mt-5'>Talk with the client to understand the new project requirements and prepare a summary report.</p>
          <div className='flex p-10 gap-5 rounded'>
            <button className='bg-green-500'>Mark as  completed</button>
            <button className='bg-red-500'>Mark as Failed</button>
          </div>
      </div>
    
    </div>
  )
}

export default AcceptTask
