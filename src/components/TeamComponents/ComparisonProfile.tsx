import { Teammate, Manager } from '../../utils/types'
import UserCard from './UserCard'

function ComparisonProfile({ activeUser, user, isGlobal }:
  {
    activeUser: Teammate | Manager,
    user: Teammate | Manager,
    isGlobal: boolean
  }) {
  return (
    <div>
      <UserCard user={activeUser} isGlobal={isGlobal} />
      <UserCard user={user} isGlobal={isGlobal} />
    </div>
  )
}

export default ComparisonProfile
