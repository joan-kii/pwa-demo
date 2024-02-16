function FieldItem({ text }: { text: string }) {
  return (
    <div className="col-span-2 bg-white dark:bg-slate-900 px-6 flex max-md:hidden" aria-hidden="true">
      <div className="py-2 text-slate-900 font-medium mt-4">{text}</div>
    </div>
  )
}

export default FieldItem
