import React, { useEffect, useState, useCallback } from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { supabase } from '../Supabase'
import { UserData } from '../UserContext'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'https://promptworld-backend-88qg.onrender.com'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [credits, setCredits] = useState(null)   // null = loading
  const [isAdmin, setIsAdmin] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  // Fetch credits from backend (needs JWT)
  const refreshCredits = useCallback(async (currentUser) => {
    const target = currentUser ?? user
    if (!target) return

    try {
      const { data: sessionData } = await supabase.auth.getSession()
      const token = sessionData?.session?.access_token
      if (!token) return

      const res = await fetch(`${BACKEND}/credits`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) return
      const data = await res.json()
      setCredits(data.credits)
      setIsAdmin(data.isAdmin)
    } catch (err) {
      console.error('Credits fetch error:', err)
    }
  }, [user])

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (!error && data?.user) {
        setUser(data.user)
        refreshCredits(data.user)
      }
    }
    getUser()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null

  const email = user.email
  const name = user?.user_metadata?.full_name || email?.split('@')[0]?.toUpperCase()
  const avatar = user?.user_metadata?.picture

  return (
    <UserData.Provider value={{ user, email, name, avatar, credits, isAdmin, refreshCredits }}>
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
