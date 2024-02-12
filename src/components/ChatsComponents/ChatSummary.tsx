import { Teammate, Manager, Chatbot } from '../../utils/types'
import UserPic from '../UtilsComponents/UserPic'

function ChatSummary({ user, setChatUser }:
  { user: Teammate | Manager | Chatbot,
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {

  return (
    <div
      className="flex items-center justify-between bg-white my-2 rounded-md border-solid border-2 cursor-pointer hover:opacity-70"
      onClick={() => setChatUser(user)}
    >
      <div className="flex">
        <UserPic userPic={user.image} />
        <div className="flex flex-col justify-center">
          <h4 className="text-gray-700 font-semibold">{user.user.name} {user.user.lastName}</h4>
          {user.user.name === 'Fernando' && <p className="text-gray-500">ya me cuentas</p>}
          {user.user.name === 'ATIA' && <p className="text-gray-500">...y con todo el contenido creado por tu equipo. ¿En qué puedo ayudarte?</p>}
        </div>
      </div>
      <p className="mr-2 text-gray-500 font-semibold">12/1/24</p>
    </div>
  )
}

export default ChatSummary
