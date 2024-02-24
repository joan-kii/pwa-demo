import { Teammate, Manager } from '../../utils/types'

function UserData({ user }: { user: Teammate | Manager }) {
  return (
    <div className="pt-2 sm:pt-4 sm:pr-4 w-full flex flex-col justify-center">
      <img src={user.image} className="w-10 h-10 sm:w-14 sm:h-14 mx-auto object-center object-cover rounded-full border-2 border-gray-300" />
      <div className="mx-auto flex flex-col justify-center text-gray-600">
        <p className="mx-auto text-sm sm:text-base">{user.user.name} {user.user.lastName}</p>
        <p className="mx-auto text-sm sm:text-base">@{user.user.username}</p>
      </div>
    </div>
  )
}

export default UserData
