function GenericButton({
  text, type, handleClick, disabled
}: {
    text: string, 
    type: 'submit' | 'reset' | 'button',
    handleClick: (item: any) => void,
    disabled: boolean
  }) {
    
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-2 px-2 sm:px-3 sm:ms-2 text-sm font-medium text-white ${type === 'reset' ? 'bg-red-600 border-red-800 hover:bg-red-500 focus:ring-red-300' : 'bg-gray-800 border-gray-800 hover:bg-gray-600 focus:ring-gray-300'} rounded-lg border focus:ring-4 focus:outline-none disabled:bg-gray-600`}
      onClick={handleClick}
      >
      <span>{text}</span>
    </button>
  )
}

export default GenericButton
