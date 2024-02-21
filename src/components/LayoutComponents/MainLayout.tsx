import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

import NavigationButton from '../UtilsComponents/NavigationButton'
import { Context } from '../../utils/context'
import ChatsLayout from './ChatsLayout'
import TeamLayout from './TeamLayout'
import InterventionForm from './InterventionForm'

function MainLayout({ setShowMenu }:
  {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  }
  ) {
  const { layout } = useContext(Context)

  return (
    <>
      <div
        className="container sm:pl-64"
        onClick={() => setShowMenu(false)}
      >
        {(layout === 'recent' || layout === 'pending' || layout === 'intervention') && <NavigationButton />}
        {(layout === 'recent' || layout === 'pending' || layout === 'intervention') && <Outlet />}
        {layout === 'chats' && <ChatsLayout />}
        {layout === 'new' && <InterventionForm />}
        {layout === 'team' && <TeamLayout />}
      </div>
    </>
  )
}

export default MainLayout
