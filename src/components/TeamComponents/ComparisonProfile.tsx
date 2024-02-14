import { Teammate, Manager } from '../../utils/types'
import UserCard from './UserCard'

function ComparisonProfile({ activeUser, user }:
  {
    activeUser: Teammate | Manager,
    user: Teammate | Manager
  }) {
  return (
    <div>
      <UserCard user={activeUser} />
      <UserCard user={user} />
    </div>
  )
}

export default ComparisonProfile
