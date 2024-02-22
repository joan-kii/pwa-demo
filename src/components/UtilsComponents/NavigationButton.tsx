import { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Context } from '../../utils/context'

function NavigationButton() {
  const { showMenu, setShowMenu, setLayout }= useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()

  const path = location.pathname.split('/').at(-1)

  useEffect(() => {
    if (path === 'recent' || path === 'pending' || path === 'intervention') {
      setLayout(path)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])
  
  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(+1)
  }

  return (
    <div className="fixed w-full grid grid-cols-2">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="block justify-self-start items-center p-2 mt-2 ms-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white border-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="sr-only">Abrir menú</span>
        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <div className="justify-self-end sm:m-5 text-gray-900">
        <div className="mt-3 mr-3 sm:m-0 border-2 rounded-lg bg-white">
          <button onClick={goBack} className="border-r-2 p-1 sm:p-2 hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </button>
          <button onClick={goForward} className="p-1 sm:p-2 hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavigationButton
