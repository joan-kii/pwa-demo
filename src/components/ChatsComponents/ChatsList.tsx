import { Teammate, Manager } from '../../utils/types'
import ChatSummary from './ChatSummary'

function ChatsList({ team, setChatUser }:
  { team: (Teammate | Manager)[],
    setChatUser: React.Dispatch<React.SetStateAction<boolean>>
  }) {
  return (
    <>
      {team.map((user) => {
          return (
            <ChatSummary
              key={user.user.rol + user._id}
              user={user}
              setChatUser={setChatUser}
            />
          )
        }
      )}
    </>
  )
}

export default ChatsList
