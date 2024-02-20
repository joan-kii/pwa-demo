import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

import NavigationButton from '../UtilsComponents/NavigationButton'
import { Context } from '../../utils/context'
import ChatsLayout from './ChatsLayout'
import TeamLayout from './TeamLayout'
import InterventionForm from './InterventionForm'

function MainLayout() {
  const { layout } = useContext(Context)

  return (
    <>
      <div className="container pl-64">
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
