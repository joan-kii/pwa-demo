function TextInput({label, text, rows}: {label: string, text: string, rows: number}) {
  return (
    <div className="mt-6 w-full flex flex-col border-t-2 border-gray-300">
      <label htmlFor="about" className="mt-4 ml-2 font-light">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id="description"
          name="description"
          rows={rows}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
          defaultValue={''}
        />
      </div>
      <p className="mt-2 text-sm font-light">{text}</p>
    </div>
  )
}

export default TextInput
