import { Teammate, Manager, Chatbot  } from '../../utils/types'
import { managerMessages } from '../../utils/messages'
import ChatHeader from './ChatHeader'
import ChatDialog from './ChatDialog'

function Chat({ user, setChatUser }:
  { user: Teammate | Manager | Chatbot | null,
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {
  return (
    <>
      <ChatHeader user={user} setChatUser={setChatUser} />
      <ChatDialog messages={managerMessages} />
    </>
  )
}

export default Chat
