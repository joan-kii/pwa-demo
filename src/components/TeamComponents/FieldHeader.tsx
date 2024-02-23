function FieldHeader({ text }: { text: string }) {
  return (
    <div className="col-span-2 bg-white dark:bg-slate-900 px-4 sm:px-6 flex" aria-hidden="true">
      <div className="py-2 text-slate-700 font-medium">{text}</div>
    </div>
  )
}

export default FieldHeader
