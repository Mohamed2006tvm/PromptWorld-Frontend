import React, { useContext } from "react"
import SignOutButton from "./Signout"
import { userData } from "../Dashboard"

const UserProfile = () => {
    const {user,email,name,avatar} = useContext(userData)
  return (
    <div>
      <div
        className="flex items-center justify-between gap-3 
        rounded-[12px] p-3 cursor-pointer flex-col-reverse md:flex-row">
        {/* Avatar */}
        <div className="flex items-center gap-3">
          <img src={avatar} alt=""   className="w-9 h-9 rounded-full"/>

          {/* Name & Email */}
          <div className="md:block hidden ">
            <p className="text-sm font-semibold text-white">
              {name}
            </p>
            <p className="text-xs text-[#868686] truncate max-w-[140px]">
              {email}
            </p>
          </div>
        </div>

        {/* <MoreVertical size={18} className="text-[#868686]" />  */}
          <SignOutButton/>
      </div>
    </div>
  )
} 

export default UserProfile
