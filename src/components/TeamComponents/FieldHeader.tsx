function FieldHeader({ text, isColumn }: { text: string, isColumn: boolean }) {
  return (
    <div className={`col-span-2 bg-white px-4 sm:px-6 flex`} aria-hidden="true">
      <div className={`sm:w-auto py-2 ${isColumn ? 'mx-auto sm:mx-0' : ''} text-slate-700 font-medium`}>{text}</div>
    </div>
  )
}

export default FieldHeader
