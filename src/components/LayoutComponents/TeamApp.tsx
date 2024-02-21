import { useState } from 'react'

import TopBar from '../HeaderComponents/TopBar'
import SideBarTeam from './SideBarTeam'
import MainLayout from './MainLayout'

function TeamApp() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="relative">
      <TopBar />
      <main className="flex flex-row overflow-y-auto">
        <SideBarTeam showMenu={showMenu} setShowMenu={setShowMenu} />
        <MainLayout setShowMenu={setShowMenu} />
      </main>
    </div>
  )
}

export default TeamApp
