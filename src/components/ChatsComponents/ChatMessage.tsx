import { useContext } from 'react'

import { Message } from '../../utils/types'
import { Context } from '../../utils/context'
import TextParsed from '../UtilsComponents/TextParsed'

function ChatMessage({ message }: { message: Message }) {
  const { activeUser } = useContext(Context)
  
  return (
    <div
      className={`my-2 flex items-end text-gray-700 ${message.author === activeUser.user.name ? 'justify-end' : ''}`}
    >
      <div className={`w-4/5 sm:w-2/3 flex ${message.author === activeUser.user.name ? 'justify-end' : 'justify-start'}`}>
        <div className={`p-2 flex items-end text-sm sm:text-base ${message.author === activeUser.user.name ? 'bg-green-200' : 'bg-white'} rounded-md`}>
          <TextParsed text={message.text} />
          <p className="ml-2 text-xs text-gray-400">{message.hour}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
