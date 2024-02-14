import { Teammate, Manager } from '../../utils/types'

function UserCards({ user, setUser }:
  { 
    user: Teammate | Manager,
    setUser: React.Dispatch<React.SetStateAction<Teammate | Manager | null>>
  }) {

  return (
    <div
      className="mx-auto my-2 w-80 flex items-center justify-center cursor-pointer"
      onClick={() => setUser(user)}
    >
      <div className="w-full bg-gray-200 relative shadow overflow-hidden hover:shadow-lg group rounded-xl p-5 border-2 border-gray-300">
        <div className="flex items-center gap-4">
          <img src={user.image} className="w-32 h-32 object-center object-cover rounded-full border-2 border-gray-300" />
          <div className="w-fit">
            <h1 className="text-gray-600 font-bold">{user.user.name} {user.user.lastName}</h1>
            <p className="text-gray-400">{user.user.rol}</p>
            <p className="text-gray-500 ">@{user.user.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCards
