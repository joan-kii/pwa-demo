function FieldItem({ text, data }: { text: string, data: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex max-md:hidden" aria-hidden="true">
      <div className="w-full flex justify-between py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p>{text}</p>
        <p>{data}</p>
      </div>
    </div>
  )
}

export default FieldItem
