"use client"
import React, { createContext, useEffect, useState } from 'react'

export const User=createContext(null)

const UserContext = ({children}) => {
    const [users,setUser]=useState([])
 
  
  return <User.Provider value={{users,setUser}}>{children}</User.Provider>
}

export default UserContext