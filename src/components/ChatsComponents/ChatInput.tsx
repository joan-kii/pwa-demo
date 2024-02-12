function ChatInput() {
  return (
    <div className="mt-2 pt-2 w-full flex items-center">
      <input
        id="message"
        name="message"
        placeholder="Mensaje"
        disabled
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="ml-2 w-10 h-10 text-gray-500 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
  )
}

export default ChatInput
