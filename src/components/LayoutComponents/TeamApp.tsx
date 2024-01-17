import TopBar from './TopBar'
import SideBarTeam from './SideBarTeam'
import MainLayout from './MainLayout'

function TeamApp() {
  return (
    <div className="relative">
      <TopBar />
      <main className="flex flex-row">
        <SideBarTeam />
        <MainLayout />
      </main>
    </div>
  )
}

export default TeamApp
