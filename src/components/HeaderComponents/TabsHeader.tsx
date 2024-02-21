import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../utils/context'
import { Layout } from '../../utils/types'

function TabsHeader() {
  const { layout, setLayout } = useContext(Context)
  const navigate = useNavigate()

  function handleNavigation(name: Layout) {
    setLayout(name)
    navigate('/team/intervention/recent')
    window.scrollTo(0, 0)
  }
  
  return (
    <div className="mt-1 font-medium text-center">
      <ul className="flex flex-wrap justify-around text-gray-900 text-sm sm:text-base">
        <li
          className={`flex items-center w-1/2 sm:w-1/3 justify-center border-b-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-100 hover:cursor-pointer ${layout === 'recent' || layout === 'pending' ? 'border-gray-700' : 'border-white'}`}
          onClick={() => handleNavigation('recent')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          <p className="inline-block p-2 sm:p-4">Intervenciones</p>
        </li>
        <li
          className={`hidden sm:flex items-center w-1/3 justify-center rounded-t-lg hover:text-gray-600 hover:bg-gray-100 border-b-2 hover:cursor-pointer ${layout === 'new' ? 'border-gray-700' : 'border-white'}`}
          onClick={() => {
            setLayout('new')
            window.scrollTo(0, 0)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p className="inline-block p-2 sm:p-4">Nueva Intervención</p>
        </li>
        <li
          className={`flex items-center w-1/2 sm:w-1/3 justify-center rounded-t-lg hover:text-gray-600 hover:bg-gray-100 border-b-2 hover:cursor-pointer ${layout === 'chats' ? 'border-gray-700' : 'border-white'}`}
          onClick={() => setLayout('chats')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <p className="inline-block p-2 sm:p-4">Chats</p>
        </li>
      </ul>
    </div>
  )
}

export default TabsHeader
