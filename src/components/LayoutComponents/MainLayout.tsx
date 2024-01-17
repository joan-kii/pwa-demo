import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

import NavigationButton from '../UtilsComponents/NavigationButton'
import { Context } from '../../utils/context'

function MainLayout() {
  const { layout } = useContext(Context)
  
  return (
    <>
      <div className="container pl-64">
        {(layout === 'recent' || layout === 'pending') && <NavigationButton />}
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
