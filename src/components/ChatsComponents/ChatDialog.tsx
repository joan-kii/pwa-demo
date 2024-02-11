import ChatMessage from './ChatMessage'
import { Message } from '../../utils/types'

function ChatDialog({ messages }: { messages: Message[] }) {
  return (
    <div className="mb-2 p-2 h-auto flex flex-col border-solid border-b-2 border-x-2 border-slate-300 rounded-b-lg bg-slate-100">
      {messages.map((message) => <ChatMessage message={message} key={message._id} />)}
    </div>
  )
}

export default ChatDialog
