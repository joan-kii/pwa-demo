import { Teammate, Manager } from '../../utils/types'

function UserData({ user }: { user: Teammate | Manager }) {
  return (
    <div className="pt-4 pr-4 w-1/3 flex justify-end">
      <img src={user.image} className="w-14 h-14 object-center object-cover rounded-full border-2 border-gray-300" />
      <div className="ml-2 flex flex-col justify-center text-gray-600">
        <p className="">{user.user.name} {user.user.lastName}</p>
        <p className="text-sm">@{user.user.username}</p>
      </div>
    </div>
  )
}

export default UserData
