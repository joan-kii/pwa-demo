function TextInput({
  label, text, rows, content, setContent, children
}: {
  label: string, text: string, rows: number, children: React.ReactNode,
  content: string, setContent: React.Dispatch<React.SetStateAction<string>>
}) {

  const addLinks = (text: string) => {
    console.log(text);
    setContent(text)
  }

  return (
    <div className="mt-6 pt-5 w-full flex flex-col border-t-2 border-gray-300">
      <div className="mx-2 mt-4 flex justify-between">
        <label htmlFor={label} className="font-light">
          {label}
        </label>
        {children}
      </div>
      <div className="mt-2">
        <textarea
          id={label}
          name={label}
          value={content}
          onChange={(event) => addLinks(event.target.value)}
          rows={rows}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
        />
      </div>
      <p className="mt-2 text-sm font-light">{text}</p>
    </div>
  )
}

export default TextInput
