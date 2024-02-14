import { useState } from 'react'

import { manager, team } from '../../utils/users'
import { Teammate, Manager } from '../../utils/types'
import UserSummary from '../TeamComponents/UserSummary'
import TeamGrid from '../TeamComponents/TeamGrid'

function TeamLayout() {
  const [user, setUser] = useState<Teammate | Manager | null>(null)

  return (
    <div className="relative">
      <div className="container flex flex-col mx-auto mt-5 mb-20 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          {!user && <UserSummary user={manager} setUser={setUser} />}
          {!user && 
            <div className="grid grid-cols-2">
              {team.map((user) => <UserSummary user={user} setUser={setUser} key={user.user.name + user._id} />)}
            </div>
          }
          {user && <TeamGrid user={user} setUser={setUser} />}
        </div>
      </div>
    </div>
  )
}

export default TeamLayout
