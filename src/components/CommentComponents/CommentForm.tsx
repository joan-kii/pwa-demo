import { useState } from 'react'

function CommentForm() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="flex my-2 px-auto items-center border-solid border-b-2 hover:cursor-pointer hover:opacity-70" onClick={() => setShowForm(!showForm)}>
        <p className="mr-2 text-gray-900">Comentar</p>
        <svg data-accordion-icon className="w-3 h-3 transition-all ease-in-out duration-500 shrink-0 items-center" style={{ rotate: showForm ? '0deg' : '180deg' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
        </svg>
      </div>
      <form className={`transition-all ease-in-out duration-500 overflow-hidden ${showForm ? 'h-40' : 'h-0'}`}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">Tu comentario</label>
            <textarea id="comment" rows={3} className="w-full py-2 text-sm text-gray-900 bg-white dark:bg-gray-800 !outline-none dark:text-white dark:placeholder-gray-400" placeholder="Escribir comentario..." required></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-600 disabled:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Añadir comentario
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
