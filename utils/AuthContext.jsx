'use client'
import { createContext, useState } from "react"

export const authContext = createContext()
export default function AuthContext({children}) {
    const [token , setToken] = useState(localStorage.getItem('token'))
    const handleToken = (tk)=>{
      tk?localStorage.setItem('token',tk) : localStorage.removeItem('token')
        setToken(tk)
    }
  return (
    <authContext.Provider value={{token , handleToken}}>
      {children}
    </authContext.Provider>
  )
}
