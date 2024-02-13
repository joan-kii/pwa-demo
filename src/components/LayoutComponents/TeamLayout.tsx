import { manager, teammate } from '../../utils/users'
import UserCard from '../TeamComponents/UserCard'

function TeamLayout() {
  return (
    <div className="relative">
      <div className="container flex flex-col mx-auto mt-5 mb-20 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          {[manager, teammate].map((user) => <UserCard user={user} key={user.user.name + user._id} />)}
        </div>
      </div>
    </div>
  )
}

export default TeamLayout
