import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { supabase } from '../Supabase'

import { UserData } from '../UserContext'

const Dashboard = () => {

  const [user, setUser] = useState(null)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (!error)
        setUser(data.user)
    }
    getUser()
  }, [])


  if (!user)
    return null

  const email = user.email

  const name = user?.user_metadata?.full_name || email?.split('@')[0]?.toUpperCase()

  const avatar = user?.user_metadata?.picture

  return (
    <UserData.Provider value={{ user, email, name, avatar }}>
      <div className="flex h-screen overflow-hidden">

        <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />

        <div className="flex-1 h-screen overflow-y-auto no-scrollbar flex flex-col transition-all duration-300">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </UserData.Provider>
  )
}

export default Dashboard
