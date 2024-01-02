import { useState } from 'react'

import SearchHeader from './SearchHeader'
import SideBarTeam from './SideBarTeam'
import MainLayout from './MainLayout'
import { Layout } from '../utils/types'

function TeamApp() {
  const [layout, setLayout] = useState<Layout>('recent')
  
  return (
    <>
      <SearchHeader />
      <SideBarTeam layout={layout} setLayout={setLayout} />
      <MainLayout />
    </>
  )
}

export default TeamApp
