import { Message } from '../../utils/types'
import TextParsed from '../UtilsComponents/TextParsed'

function ChatMessage({ message }: { message: Message }) {
  return (
    <div
      className={`my-2 flex items-end text-gray-700 ${message.author === 'Sergio Samper' ? 'justify-end' : ''}`}
    >
      <div className={`w-2/3 flex ${message.author === 'Sergio Samper' ? 'justify-end' : 'justify-start'}`}>
        <div className={`p-2 flex w-max items-end ${message.author === 'Sergio Samper' ? 'bg-green-200' : 'bg-white'} rounded-md`}>
          <TextParsed text={message.text} />
          <p className="ml-2 text-xs text-gray-400">{message.hour}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
