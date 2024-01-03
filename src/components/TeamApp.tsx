import SearchHeader from './SearchHeader'
import SideBarTeam from './SideBarTeam'
import MainLayout from './MainLayout'

function TeamApp() {
  return (
    <div className="relative">
      <SearchHeader />
      <SideBarTeam />
      <MainLayout />
    </div>
  )
}

export default TeamApp
