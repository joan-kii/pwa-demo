import TabsHeader from './TabsHeader'
import SearchHeader from './SearchHeader'


function TopBar() {
  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-10 shadow">
      <SearchHeader />
      <TabsHeader />
    </header>
  )
}

export default TopBar
