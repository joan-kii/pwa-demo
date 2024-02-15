import { useState } from 'react'

import { Teammate, Manager } from '../../utils/types'
import UserCard from './UserCard'
import UserFieldsProfile from './UserFieldsProfile'

function SingleProfile({ activeUser }: { activeUser: Teammate | Manager }) {
  const [isGlobal, setIsGlobal] = useState<boolean>(false)

  return (
    <div className="w-full">
      <UserFieldsProfile isGlobal={isGlobal} setIsGlobal={setIsGlobal} />
      <UserCard user={activeUser} />
    </div>
  )
}

export default SingleProfile
