import { Teammate, Manager } from '../../utils/types'
import UserCard from './UserCard'

function SingleProfile({ activeUser }: { activeUser: Teammate | Manager }) {
  return (
    <div>
      <UserCard user={activeUser} />
    </div>
  )
}

export default SingleProfile
