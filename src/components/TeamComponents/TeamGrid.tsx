import { useContext } from 'react'

import { Teammate, Manager } from '../../utils/types'
import { Context } from '../../utils/context'
import SingleProfile from './SingleProfile'
import ComparisonProfile from './ComparisonProfile'

function UserProfile({ user, setUser }:
  {
    user: Teammate | Manager,
    setUser: React.Dispatch<React.SetStateAction<Teammate | Manager | null>>
  }) {
  const { activeUser } = useContext(Context)
  
  return (
    <div className="relative">
      <div className="container flex flex-col mx-auto mt-5 mb-20 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          <div className="cursor-pointer" onClick={() => setUser(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </div>
          {activeUser.user._id === user.user._id && <SingleProfile activeUser={activeUser} />}
          {activeUser.user._id !== user.user._id && <ComparisonProfile activeUser={activeUser} user={user} />}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
