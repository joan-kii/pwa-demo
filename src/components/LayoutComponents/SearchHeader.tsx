import { useState } from 'react'

import { BellIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/android-chrome-512x512.png'
import ignatius from '../../assets/ignatius_mini.png'

const user = {
  name: 'Ignatius',
  email: 'ignatius@example.com',
  imageUrl: ignatius
}

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
    setKeywordList([])
  }

  return (
    <div className="flex mx-auto px-4 pt-6 justify-between items-center sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <img
            className="h-16 w-16"
            src={logo}
            alt="Fixloud"
          />
        </div>
        <div className="flex w-1/2 items-center">
          <h6 className="font-bold tracking-tight text-gray-900">Búsqueda:</h6>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
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
        <div className="ml-4 flex justify-end items-center md:ml-6">
          <button
            type="button"
            className="relative rounded-full bg-white-800 p-1 text-gray-800 hover:ring-2 hover:ring-gray-800 focus:outline-none focus:ring-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Notificaciones</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SearchHeader