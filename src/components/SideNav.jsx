import React from 'react'
import { LayoutDashboard, FolderOpenDot, BadgeQuestionMark, ChevronLeft, ChevronRight } from 'lucide-react'
import logo from './assests/logo3.jpg'
import { Link } from 'react-router-dom'
import UserProfile from './auth/Userprofile'

const SideNav = ({ collapsed, setCollapsed }) => {

  const navItem =
    "group flex items-center gap-3 px-3 py-2 rounded-[10px] text-[#868686] " +
    "hover:bg-[#262626] hover:text-[#00ff88] transition-all duration-200"

  return (
    <div
      className={`
        sticky top-0 h-screen bg-[#1D1D1D] flex flex-col justify-between
        overflow-y-auto overflow-x-hidden no-scrollbar
        transition-all duration-300 ease-in-out flex-shrink-0
        ${collapsed ? 'w-[64px]' : 'w-[220px]'}
      `}
    >
      {/* Top section */}
      <div>
        {/* Header: logo + brand + toggle button */}
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={logo}
              className="w-[38px] h-[38px] rounded-[8px] flex-shrink-0"
              alt="logo"
            />
            {!collapsed && (
              <div className="overflow-hidden">
                <h1 className="text-[15px] font-bold text-white whitespace-nowrap">Prompt World</h1>
                <p className="text-[11px] text-[#868686] whitespace-nowrap">AI Generator</p>
              </div>
            )}
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`
              flex-shrink-0 flex items-center justify-center
              w-7 h-7 rounded-md text-[#868686]
              hover:bg-[#262626] hover:text-[#00ff88]
              transition-all duration-200
              ${collapsed ? 'mx-auto mt-0' : ''}
            `}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Divider */}
        <div className="mx-3 mb-2 border-t border-[#262626]" />

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-2 mt-1">
          <Link to="/dashboard" className={navItem} title="Dashboard">
            <LayoutDashboard size={18} className="flex-shrink-0" />
            {!collapsed && (
              <span className="whitespace-nowrap text-sm overflow-hidden">Dashboard</span>
            )}
          </Link>

          <Link to="/dashboard/projects" className={navItem} title="Projects">
            <FolderOpenDot size={18} className="flex-shrink-0" />
            {!collapsed && (
              <span className="whitespace-nowrap text-sm overflow-hidden">Projects</span>
            )}
          </Link>
        </nav>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-2 px-2 mb-4">
        <div className="border-t border-[#262626] mb-2" />

        <Link className={navItem} title="Help & Support">
          <BadgeQuestionMark size={18} className="flex-shrink-0" />
          {!collapsed && (
            <span className="whitespace-nowrap text-sm overflow-hidden">Help & Support</span>
          )}
        </Link>

        {/* User profile — hide text when collapsed */}
        <UserProfile collapsed={collapsed} />
      </div>
    </div>
  )
}

export default SideNav
