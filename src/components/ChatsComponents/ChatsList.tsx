import { Teammate, Manager, Chatbot } from '../../utils/types'
import { chatbot } from '../../utils/users'
import ChatSummary from './ChatSummary'

function ChatsList({ team, setChatUser }:
  { team: (Teammate | Manager)[],
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {
  return (
    <>
      <ChatSummary
        user={chatbot}
        setChatUser={setChatUser}
        key={chatbot.user.name + chatbot._id}
      />
      {team.map((user) => {
          if (user.user.name !== 'Sergio') {
            return (
              <ChatSummary
                key={user.user.rol + user._id}
                user={user}
                setChatUser={setChatUser}
              />
            )
          } else {
            return
          }
        }
      )}
    </>
  )
}

export default ChatsList
