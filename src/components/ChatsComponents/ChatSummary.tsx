import { Teammate, Manager, Chatbot } from '../../utils/types'
import UserPic from '../UtilsComponents/UserPic'

function ChatSummary({ user, setChatUser }:
  { user: Teammate | Manager | Chatbot,
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {

  return (
    <div
      className="flex items-center justify-between bg-white my-2 h-20 rounded-md border-solid border-2 cursor-pointer hover:opacity-70"
      onClick={() => setChatUser(user)}
    >
      <div className="flex p-1">
        <UserPic userPic={user.image} />
        <div className="ml-1 flex flex-col justify-center">
          <h4 className="text-gray-700 font-semibold sm:text-base text-sm">{user.user.name} {user.user.lastName}</h4>
          {user.user.name === 'Fernando' && <p className="sm:text-base text-sm text-gray-500">lo cambio</p>}
          {user.user.name === 'Sergio' && <p className="sm:text-base text-sm text-gray-500">lo cambio</p>}
          {user.user.name === 'Santiago' && <p className="sm:text-base text-sm text-gray-500">lo sé, lo sé</p>}
          {user.user.name === 'Rafael' && <p className="sm:text-base text-sm text-gray-500">cuando lo vea me lo creeré</p>}
          {user.user.name === 'Juan' && <p className="sm:text-base text-sm text-gray-500">OK</p>}
          {user.user.name === 'Daniel' && <p className="sm:text-base text-sm text-gray-500">ja, me parto</p>}
          {user.user.name === 'Antonio' && <p className="sm:text-base text-sm text-gray-500">tío pues dímelo</p>}
          {user.user.name === 'ATIA' && <p className="sm:text-base text-sm text-gray-500">¿En qué puedo ayudarte?</p>}
        </div>
      </div>
      <p className="mr-2 text-gray-500 font-semibold sm:text-base text-xs">12/1/24</p>
    </div>
  )
}

export default ChatSummary
