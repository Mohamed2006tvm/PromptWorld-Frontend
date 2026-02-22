import React from 'react'
import {
  LayoutDashboard,
  FolderOpenDot,
  BadgeQuestionMark,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react'
import logo from './assests/logo3.jpg'
import { Link } from 'react-router-dom'
import UserProfile from './auth/Userprofile'

const SideNav = ({ collapsed, setCollapsed }) => {

  const navItem =
    "flex items-center gap-3 px-3 py-2 rounded-[10px] text-[#868686] " +
    "hover:bg-[#262626] hover:text-[#00ff88] transition-colors duration-200 " +
    "whitespace-nowrap overflow-hidden"

  return (
    <div
      style={{
        width: collapsed ? '64px' : '220px',
        transition: 'width 0.3s ease',
        minWidth: collapsed ? '64px' : '220px',
      }}
      className="sticky top-0 h-screen bg-[#1D1D1D] flex flex-col justify-between overflow-hidden no-scrollbar flex-shrink-0"
    >
      {/* ── TOP ── */}
      <div>
        {/* Header row */}
        <div className="flex items-center justify-between px-3 py-3">
          {/* Logo + brand */}
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              src={logo}
              className="w-[36px] h-[36px] rounded-[8px] flex-shrink-0"
              alt="logo"
            />
            <div
              style={{
                opacity: collapsed ? 0 : 1,
                width: collapsed ? 0 : 'auto',
                overflow: 'hidden',
                transition: 'opacity 0.2s ease, width 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <h1 className="text-[15px] font-bold text-white">Prompt World</h1>
              <p className="text-[11px] text-[#868686]">AI Generator</p>
            </div>
          </div>

          {/* Toggle button — always visible */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="flex items-center justify-center w-7 h-7 rounded-md text-[#868686] hover:bg-[#262626] hover:text-[#00ff88] transition-colors duration-200 flex-shrink-0"
          >
            {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>
        </div>

        {/* Divider */}
        <div className="mx-3 mb-1 border-t border-[#262626]" />

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-2 mt-1">
          <Link to="/dashboard" className={navItem} title="Dashboard">
            <LayoutDashboard size={18} className="flex-shrink-0" />
            <span
              style={{
                opacity: collapsed ? 0 : 1,
                maxWidth: collapsed ? 0 : '200px',
                transition: 'opacity 0.2s ease, max-width 0.3s ease',
                overflow: 'hidden',
              }}
            >
              Dashboard
            </span>
          </Link>

          <Link to="/dashboard/projects" className={navItem} title="Projects">
            <FolderOpenDot size={18} className="flex-shrink-0" />
            <span
              style={{
                opacity: collapsed ? 0 : 1,
                maxWidth: collapsed ? 0 : '200px',
                transition: 'opacity 0.2s ease, max-width 0.3s ease',
                overflow: 'hidden',
              }}
            >
              Projects
            </span>
          </Link>
        </nav>
      </div>

      {/* ── BOTTOM ── */}
      <div className="flex flex-col gap-2 px-2 mb-4">
        <div className="border-t border-[#262626] mb-1" />

        <Link className={navItem} title="Help & Support">
          <BadgeQuestionMark size={18} className="flex-shrink-0" />
          <span
            style={{
              opacity: collapsed ? 0 : 1,
              maxWidth: collapsed ? 0 : '200px',
              transition: 'opacity 0.2s ease, max-width 0.3s ease',
              overflow: 'hidden',
            }}
          >
            Help &amp; Support
          </span>
        </Link>

        <UserProfile collapsed={collapsed} />
      </div>
    </div>
  )
}

export default SideNav
