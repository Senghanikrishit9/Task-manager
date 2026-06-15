import React, { useState } from 'react'

const Login = () => {

  const[email, setEmail] = useState('')
  const[password , setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("emial is" , email)
    console.log("password is " , password)

    setEmail("")
    setPassword("")
    
  }
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600'>
        <form  
        onSubmit={(e,) =>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center p-20'>
          <input
    
          value={email}
           onChange={(e) =>{
            setEmail(e.target.value)
          }}
           required 
           className='border-2 outline-none border-emerald-600 text-xl py-3 px-5  rounded-full placeholder:text-white w-90'  type="Email" placeholder='Enter you Email' 
           />
          <input
          value={password}
          onChange={(e) =>{
            setPassword(e.target.value)
          }}
           required className='border-2 outline-none border-emerald-600 text-xl py-3 px-5  rounded-full mt-4 placeholder:text-white w-90' type="password"  placeholder='Enter your password'/>
          <button className='border-2 outline-none border-emerald-600 bg-emerald-600 text-xl py-3 px-5  rounded-full mt-4 w-90 placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
