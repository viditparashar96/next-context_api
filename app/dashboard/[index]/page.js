"use client"
import { User } from '@/utils/UserContext'
import React, { useContext, useState } from 'react'

function page({params}) {
    const {users,setUser}=useContext(User)
   const foundedUser=users[params.index]
 
  return (
    <div>
    <h1>Hello {foundedUser.name}</h1>

    </div>
  )
}

export default page