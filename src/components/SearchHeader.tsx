import { useState } from 'react'

function SearchHeader() {
  const [keyword, setKeyword] = useState('')
  const [keywordList, setKeywordList] = useState<string[]>([])

  const handleKeywordSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setKeywordList(keywordList.concat(keyword))
    setKeyword('')
  }

  const handleKeywordListSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(keywordList);
    
    setKeywordList([])
  }
  return (
    <header className="bg-white shadow">
      <div className="flex mx-auto max-w-4xl px-4 py-6 items-center sm:px-6 lg:px-8">
        <h6 className="font-bold tracking-tight text-gray-900">Búsqueda</h6>
        <form onSubmit={handleKeywordSubmit} className="flex w-2/5 items-center">   
          <div className="relative ml-4 w-full">
            <label htmlFor="add-keyword" className="sr-only">Añadir palabra clave</label>
            <div className="absolute inset-y-0 start-0 flex items-center ps-1.5 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
              </svg>
            </div>
            <input
              type="text"
              id="add-keyword"
              value={keyword}
              onChange={({ target }) => {setKeyword(target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Añadir palabra clave"
              required 
            />
          </div>
          <button type="submit" className="p-2 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <span>Añadir</span>
          </button>
        </form>
        <form onSubmit={handleKeywordListSubmit} className="flex w-3/5 items-center">   
          <div className="relative ml-4 w-full">
            <label htmlFor="search-keywordList" className="sr-only">Buscar</label>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <input
              type="text"
              id="search-keywordList"
              value={keywordList.join(' + ')}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Lista de palabras clave"
              disabled
              required
            />
          </div>
          <button type="submit" className="p-2 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <span>Buscar</span>
          </button>
        </form>
      </div>
    </header>
  )
}

export default SearchHeader