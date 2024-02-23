import { Teammate, Manager } from '../../utils/types'

function UserSummary({ user, setUser }:
  { 
    user: Teammate | Manager,
    setUser: React.Dispatch<React.SetStateAction<Teammate | Manager | null>>
  }) {

  return (
    <div
      className="mx-auto my-2 w-11/12 sm:w-80 flex items-center justify-center cursor-pointer"
      onClick={() => setUser(user)}
    >
      <div className="w-full bg-gray-200 relative shadow overflow-hidden hover:shadow-lg group rounded-xl p-1 sm:p-5 border-2 border-gray-300">
        <div className="flex items-center gap-4">
          <img src={user.image} className="w-16 h-16 sm:w-32 sm:h-32 object-center object-cover rounded-full border-2 border-gray-300" />
          <div className="w-fit">
            <h1 className="text-gray-600 font-bold text-sm sm:text-base">{user.user.name} {user.user.lastName}</h1>
            <p className="text-gray-400 text-sm sm:text-base">{user.user.rol}</p>
            <p className="text-gray-500 text-sm sm:text-base">@{user.user.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSummary
