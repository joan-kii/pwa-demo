import { Outlet } from 'react-router-dom'

import NavigationButton from './NavigationButton'

function MainLayout() {
  return (
    <>
      <div className="container pl-64">
        <NavigationButton />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
