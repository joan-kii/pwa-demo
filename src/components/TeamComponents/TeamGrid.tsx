import { useContext, useState } from 'react'

import { Teammate, Manager } from '../../utils/types'
import { Context } from '../../utils/context'
import SingleProfile from './SingleProfile'
import ComparisonProfile from './ComparisonProfile'
import ProfileHeader from './ProfileHeader'

function TeamGrid({ user, setUser }:
  {
    user: Teammate | Manager,
    setUser: React.Dispatch<React.SetStateAction<Teammate | Manager | null>>
  }) {
  const { activeUser } = useContext(Context)
  const [isGlobal, setIsGlobal] = useState<boolean>(false)
  
  return (
    <div className="w-full my-4 border-r-md">
      <ProfileHeader isGlobal={isGlobal} setIsGlobal={setIsGlobal} setUser={setUser} />
      {activeUser.user._id === user.user._id &&
        <SingleProfile activeUser={activeUser} isGlobal={isGlobal} />
      }
      {activeUser.user._id !== user.user._id &&
        <ComparisonProfile activeUser={activeUser} user={user} isGlobal={isGlobal} />
      }
    </div>  
  )
}

export default TeamGrid
