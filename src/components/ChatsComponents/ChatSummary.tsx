import { Teammate, Manager, Chatbot } from '../../utils/types'
import UserPic from '../UtilsComponents/UserPic'

function ChatSummary({ user, setChatUser }:
  { user: Teammate | Manager | Chatbot,
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {

  return (
    <div
      className="flex bg-white my-2 rounded-md border-solid border-2 cursor-pointer hover:opacity-70"
      onClick={() => setChatUser(user)}
    >
      <UserPic userPic={user.image} />
      <div className="flex flex-col justify-center">
        <h4 className="text-gray-700 font-semibold">{user.user.name} {user.user.lastName}</h4>
        <p className="text-gray-500">Este es el último mensaje...</p>
      </div>
    </div>
  )
}

export default ChatSummary
