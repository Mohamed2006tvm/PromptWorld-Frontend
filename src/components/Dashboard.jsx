import React, { useEffect, useState, createContext } from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { supabase } from '../Supabase'

export const userData = createContext()

const Dashboard = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      console.log(user)
      if (!error)
        setUser(data.user)
      console.log(user)
    }
    getUser()
  }, [])


  if (!user)
    return null

  const email = user.email

  const name = user?.user_metadata?.full_name || email?.split('@')[0]?.toUpperCase()

  const avatar = user?.user_metadata?.picture

  return (
    <userData.Provider value={{ user, email, name, avatar }}>
      <div className="flex h-screen">

        <SideNav />




        <div className="w-full h-screen overflow-y-auto no-scrollbar flex flex-col">
          <Navbar />



          <Outlet />
        </div>
      </div>
    </userData.Provider>
  )
}

export default Dashboard
