import { Message } from '../../utils/types'

function ChatMessage({ message }: { message: Message }) {
  return (
    <div>
      {message.text}
      {message.date}
    </div>
  )
}

export default ChatMessage