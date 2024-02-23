import { Teammate, Manager, Chatbot  } from '../../utils/types'
import UserPic from '../UtilsComponents/UserPic'

function ChatHeader({ user, setChatUser }:
  { user: Teammate | Manager | Chatbot | null,
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {
  return (
    <>
      {user && 
        <div className="mt-2 p-2 flex items-center justify-between text-gray-700 border-solid border-t-2 border-x-2 border-slate-300 rounded-t-lg bg-slate-200">
          <div className="flex items-center">
            <div className="mr-2 cursor-pointer" onClick={() => setChatUser(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </div>
            <UserPic userPic={user.image} />
            <h4 className="ml-2 sm:text-base text-sm">{user.user.name} {user.user.lastName}</h4>
          </div>
        </div>
      }
    </>
  )
}

export default ChatHeader
