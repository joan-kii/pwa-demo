import { useContext } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'

import { Context } from '../../utils/context'

function TopSettings() {
  const { activeUser } = useContext(Context)

  return (
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
            <img className="h-10 w-10 rounded-full" src={activeUser.user.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSettings
