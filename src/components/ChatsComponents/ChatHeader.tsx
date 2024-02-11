import { managerMessages } from '../../utils/messages'
import { Teammate, Manager, Chatbot  } from '../../utils/types'
import UserPic from '../UtilsComponents/UserPic'

function ChatHeader({ user, setChatUser }:
  { user: Teammate | Manager | Chatbot | null,
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {
  return (
    <>
      {user && 
        <div className="mt-2 p-2 flex items-center border-solid border-t-2 border-x-2 border-slate-300 rounded-t-lg bg-slate-200">
          <div className="cursor-pointer" onClick={() => setChatUser(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </div>
          <UserPic userPic={user.image} />
          <h4>{user.user.name} {user.user.lastName}</h4>
          <div className="self-end">{managerMessages.at(-1)?.date}</div>
        </div>
      }
    </>
  )
}

export default ChatHeader