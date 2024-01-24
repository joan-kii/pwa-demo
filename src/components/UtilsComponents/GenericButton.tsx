function GenericButton({
  text, type, handleClick}: {
    text: string, 
    type: 'submit' | 'reset' | 'button',
    handleClick: function() {},
  }) {
  return (
    <button
      type={type}
      className="p-2 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      onClick={handleClick}
      >
      <span>{text}</span>
    </button>
  )
}

export default GenericButton
