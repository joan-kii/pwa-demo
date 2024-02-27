import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { Teammate, Manager, Chatbot, Message } from '../../utils/types'

function ChatDialog({ user, managerMessages, atiaMessages }:
  { 
    user: Teammate | Manager | Chatbot | null
    managerMessages: Message[],
    atiaMessages: Message[]
  }) {
    
  return (
    <div className="mb-2 py-2 px-4 h-auto flex flex-col border-solid border-b-2 border-x-2 border-slate-300 rounded-b-lg bg-slate-100">
      {user?.user.name === 'ATIA' && atiaMessages.map((message) => <ChatMessage message={message} key={message._id} />)}
      {(user?.user.name === ('Fernando' || 'Sergio')) && managerMessages.map((message) => <ChatMessage message={message} key={message._id} />)}
      <ChatInput />
    </div>
  )
}

export default ChatDialog
