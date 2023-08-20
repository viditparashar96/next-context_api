"use client"
import Navbar from '@/components/Navbar'
import { User } from '@/utils/UserContext'
import { useRouter } from 'next/navigation'
import React, {useContext, useEffect, useState } from 'react'

function page() {
  const router=useRouter()
  const {users,setUser}=useContext(User)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  function handleChange(e){
    e.preventDefault()
    const {name,value}=e.target
    setFormData((prev)=>{
       return{
        ...prev,
        [name]:value
       }
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    const {name,value}=e.target
    setFormData((prev)=>{
       return{
        ...prev,
        [name]:value
       }
    })
    console.log(formData)
    setFormData({
      name:"",
      email:"",
      password:''
    })
    setUser((prev)=>{
      return[
        ...prev,
        formData
      ]
    })
   
    router.push("/signin")
  }
  return (
    <div className='relative w-[100%] h-[100vh]'>
      <Navbar />
      <div className='w-full h-[100vh] -z-10 absolute top-0 left-0 bg-gradient-to-b from-pink-200 to-blue-300'>

      </div>
      <div className='w-[300px] h-[400px] bg-gradient-to-b from-pink-300 to-[#c1e8fb] flex-1 flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-10'>
          <input onChange={handleChange} value={formData.name}  className='p-4 bg-transparent outline-none border-blue-400 text-black' type="text" name="name" placeholder='Enter your name' />
          <input onChange={handleChange} value={formData.email} className='p-4 bg-transparent outline-none border-blue-400 text-black' type="email" name="email" placeholder='Enter your email' />
          <input onChange={handleChange} value={formData.password} className='p-4 bg-transparent outline-none border-blue-400 text-black' type="password" name="password" placeholder='Enter your password' />
          <button className='w-full p-2 bg-gradient-to-r form-pink-400 border to-violet-500' >Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default page