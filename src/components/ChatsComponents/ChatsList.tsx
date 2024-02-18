import { useContext } from 'react'

import { Teammate, Manager, Chatbot } from '../../utils/types'
import { chatbot } from '../../utils/users'
import { Context } from '../../utils/context'
import ChatSummary from './ChatSummary'

function ChatsList({ team, setChatUser }:
  { 
    team: (Teammate | Manager)[],
    setChatUser: React.Dispatch<React.SetStateAction<Teammate | Manager | Chatbot | null>>
  }) {
    const { activeUser } = useContext(Context)
  return (
    <>
      <ChatSummary
        user={chatbot}
        setChatUser={setChatUser}
        key={chatbot.user.name + chatbot._id}
      />
      {team.map((user) => {
          if (user.user.name !== activeUser.user.name) {
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
