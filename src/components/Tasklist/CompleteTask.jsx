import React from 'react'

const CompleteTask = () => {
  return (
    <div>
       <div className='h-full w-80 shrink-0 p-5 bg-yellow-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-yellow-600 px-3 py-1 rounded font-semibold '>High</h3>
            <h4 className='font-semibold'>08 April 2025</h4>
          </div>
          <h2 className='mt-5 text-3xl '>🧑‍🎓 Today Task :-</h2>
          <p className=' text-xl mt-5'>Test the new employee portal and report any bugs or performance issues.</p>
          <div  className='mt-2 p-13'>
            <button className='w-25 bg-red-600 rounded'>Complete</button>
          </div>
      </div>
    </div>
  )
}

export default CompleteTask
