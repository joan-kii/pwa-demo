import SearchHeader from './SearchHeader'
import SideBarTeam from './SideBarTeam'
import MainLayout from './MainLayout'

function TeamApp() {
  return (
    <div className="relative">
      <SearchHeader />
      <main className="flex flex-row">
        <SideBarTeam />
        <MainLayout />
      </main>
    </div>
  )
}

export default TeamApp
