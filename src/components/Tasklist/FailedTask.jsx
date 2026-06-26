import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div>
        <div className='h-full w-80 shrink-0 p-5 bg-blue-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 px-3 py-1 rounded font-semibold '>High</h3>
            <h4 className='font-semibold'>21 Dec 2025</h4>
          </div>
          <h2 className='mt-5 text-3xl '>📃 Today Task :-</h2>
          <p className=' text-xl mt-5'>Organize project files and upload all required documents to the company drive.</p>
         <div  className='mt-2 p-13'>
            <button className='w-25 bg-red-600 rounded'>Failed</button>
          </div>
      </div>
    </div>
  )
}

export default FailedTask
