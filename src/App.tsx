import { Routes, Route } from 'react-router-dom'

import Login from './components/LayoutComponents/Login'
import TeamApp from './components/LayoutComponents/TeamApp'
import InterventionsList from './components/LayoutComponents/InterventionsList'
import InterventionItem from './components/InterventionComponents/InterventionItem'
import UserProfile from './components/TeamComponents/UserProfile'
import TeamLayout from './components/LayoutComponents/TeamLayout'

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/teammate/*" element={<TeamApp />}>
        <Route path="intervention/*">
          <Route path="recent" element={<InterventionsList />} />
          <Route path="pending" element={<InterventionsList />} />
          <Route path=":interventionId" element={<InterventionItem />} />
        </Route>
        <Route path="team/*" element={<TeamLayout />}>
          <Route path=":username" element={<UserProfile />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
