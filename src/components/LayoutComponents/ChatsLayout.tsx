import { useState } from 'react'

import { team, manager } from '../../utils/users'
import ChatsList from '../ChatsComponents/ChatsList'
import Chat from '../ChatsComponents/Chat'
import { Teammate, Manager, Chatbot } from '../../utils/types'

function ChatsLayout() {
  const [chatUser, setChatUser] = useState<Teammate | Manager | Chatbot | null>(null)
  return ( 
    <div className="relative">
      <div className="container flex flex-col mx-auto mt-5 mb-20 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          <div className="border-b border-gray-900/10">
            {!chatUser ?
              <ChatsList team={[manager, ...team]} setChatUser={setChatUser} /> :
              <Chat user={chatUser} setChatUser={setChatUser} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatsLayout
