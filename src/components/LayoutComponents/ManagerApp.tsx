import TopBar from '../HeaderComponents/TopBar'
import SideBarTeam from './SideBarTeam'
import MainLayout from './MainLayout'

function ManagerApp() {
  return (
    <div className="relative">
      <TopBar />
      <main className="flex flex-row overflow-y-auto">
        <SideBarTeam />
        <MainLayout />
      </main>
    </div>
  )
}

export default ManagerApp
