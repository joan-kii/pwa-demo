import { useContext } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'

import { Context } from '../../utils/context'
import UserPic from '../UtilsComponents/UserPic'

function TopSettings() {
  const { activeUser } = useContext(Context)

  return (
    <div className="flex-none sm:ml-4 flex items-center md:ml-6">
      <button
        type="button"
        className="relative rounded-full bg-white-800 p-1 text-gray-800 hover:ring-2 hover:ring-gray-800 focus:outline-none focus:ring-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Notificaciones</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="cursor-pointer">
        <UserPic userPic={activeUser.image} />
      </div>
    </div>
  )
}

export default TopSettings
