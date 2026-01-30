import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center bg-gray-400 min-h-screen gap-3'>
        <h1 >This is an Home page</h1>
        
        <Link to='/login' className='border border-2 px-5 py-1 rounded-xl'>Login</Link>
    </div>
  )
}

export default HomePage