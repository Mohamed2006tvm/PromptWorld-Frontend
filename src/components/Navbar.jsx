import React, { useContext } from 'react'
import { Moon, Search, Zap, Infinity as InfinityIcon } from 'lucide-react'
import SignOutButton from './auth/Signout'
import { UserData } from '../UserContext'

const Navbar = () => {
  const { avatar, credits, isAdmin } = useContext(UserData)

  const iconBtn =
    "flex items-center justify-center border-2 border-[#2a2a2a] rounded-[10px] p-2 " +
    "text-white hover:bg-[#2a2a2a] hover:border-[#00ff88] hover:text-[#00ff88] " +
    "transition-all duration-200 active:scale-95"

  return (
    <div className="sticky top-0 z-50 py-3 bg-[#1D1D1D]
      flex sm:justify-between justify-end items-center px-5 gap-1 sm:gap-0">

      {/* Search */}
      <div className="relative sm:w-[300px] hidden sm:block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search prompts, projects"
          className="w-full pl-10 pr-4 py-2 rounded-[18px] bg-[#262626] text-white
          placeholder-[#848484] focus:outline-none focus:ring-1 focus:ring-[#00ff88]"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 sm:px-1">

        {/* Credit badge */}
        {isAdmin ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
            bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-semibold">
            <InfinityIcon size={14} />
            <span>Admin</span>
          </div>
        ) : (
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full
            border text-xs font-semibold transition-all
            ${credits === null
              ? 'bg-[#262626] border-[#2a2a2a] text-[#868686]'
              : credits <= 2
                ? 'bg-red-500/10 border-red-500/30 text-red-400'
                : 'bg-[#00ff88]/10 border-[#00ff88]/30 text-[#00ff88]'
            }`}>
            <Zap size={14} />
            <span>{credits === null ? '...' : `${credits} credits`}</span>
          </div>
        )}

        <button className={iconBtn}>
          <Moon size={20} />
        </button>
        <img src={avatar} alt="" className="w-9 h-9 rounded-full" />
        <SignOutButton />
      </div>
    </div>
  )
}

export default Navbar
