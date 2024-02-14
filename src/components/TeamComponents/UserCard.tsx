import { Teammate, Manager } from '../../utils/types'

function UserCard({ user }: { user: Teammate | Manager}) {
  return (
    <div>{user.user.username}</div>
  )
}

export default UserCard
