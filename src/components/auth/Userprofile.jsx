import React, { useContext } from "react"
import SignOutButton from "./Signout"
import { UserData } from "../../UserContext"

const UserProfile = ({ collapsed }) => {
  const { email, name, avatar } = useContext(UserData)
  return (
    <div
      className={`
        flex items-center rounded-[12px] p-2 cursor-pointer
        ${collapsed ? 'justify-center' : 'justify-between gap-3'}
      `}
    >
      {/* Avatar */}
      <div className={`flex items-center gap-2 min-w-0 ${collapsed ? '' : 'flex-1'}`}>
        <img src={avatar} alt="" className="w-8 h-8 rounded-full flex-shrink-0" />

        {/* Name & Email — hidden when collapsed */}
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-[13px] font-semibold text-white truncate">{name}</p>
            <p className="text-[11px] text-[#868686] truncate max-w-[120px]">{email}</p>
          </div>
        )}
      </div>

      {!collapsed && <SignOutButton />}
    </div>
  )
}

export default UserProfile
